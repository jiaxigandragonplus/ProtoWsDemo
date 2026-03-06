import WebSocket from 'ws';
import { PlayerSession } from './PlayerSession';
import { MessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';
import { PlayerManager } from './PlayerManager';
import { Framework, getFramework } from '../framework/Framework';
import { WsClient } from '../framework/network/WsClient';
import { ServiceInstance } from '../framework/discovery/ServiceDiscovery';

/**
 * Gate 服务器配置
 */
interface GateConfig {
    port: number;
    host: string;
}

/**
 * 游戏服务器连接信息
 */
interface GameServerConnection {
    instance: ServiceInstance;
    client: WsClient;
    lastUsed: number;
}

/**
 * Gate 服务器
 * 负责处理客户端的 WebSocket 连接请求
 * 基于服务发现，按需建立与其他服务器的连接
 */
export class GateServer {
    private config: GateConfig;
    private framework: Framework;
    private isRunning: boolean = false;
    private serverId: number = 0;
    
    // 游戏服务器连接池，key 为服务实例 ID
    private gameConnections: Map<number, GameServerConnection> = new Map();
    // 当前会话到游戏服务器的路由映射，key 为 sessionId (number 类型)
    private sessionRoutes: Map<number, number> = new Map();

    constructor(config: GateConfig, serverId: number) {
        this.config = config;
        this.framework = getFramework();
        this.serverId = serverId;
        
        // 同步加载 proto 文件
        ProtoLoader.loadProtoSync();
        
        // 初始化消息注册表
        MessageHandler.init();
    }

    /**
     * 启动服务器
     */
    async start(): Promise<void> {
        if (this.isRunning) {
            this.framework.getLogger().warn('Gate 服务器已在运行中', 'GateServer');
            return;
        }

        const logger = this.framework.getLogger();
        logger.info('Gate 服务器启动中...', 'GateServer');

        // 初始化框架
        await this.framework.init(this.serverId, {
            configPath: `config/${process.env.NODE_ENV || 'local'}/gate.json`
        });

        // 启动框架（包括服务发现）
        await this.framework.start();

        // 监听服务发现变化事件
        this.setupServiceDiscoveryListener();

        // 设置 WebSocket 服务器事件处理
        const networkManager = this.framework.getNetworkManager();
        const wsServer = networkManager.getServer();
        
        if (wsServer) {
            wsServer.on('connection', (conn) => {
                this.handleConnection(conn.socket);
            });

            wsServer.on('message', (event) => {
                this.handleMessage(event.socket, event.data);
            });

            wsServer.on('close', (event) => {
                this.handleClose(event.socket);
            });
        }

        this.isRunning = true;

        logger.info(`Gate 服务器已启动 - 监听 ${this.config.host}:${this.config.port + this.serverId}`, 'GateServer');
    }

    /**
     * 设置服务发现监听器
     */
    private setupServiceDiscoveryListener(): void {
        const serviceDiscovery = this.framework.getServiceDiscovery();
        if (serviceDiscovery) {
            serviceDiscovery.on('change', (event) => {
                this.framework.getLogger().info(
                    `服务列表变化：${event.serviceName}, 实例数：${event.instances.length}`, 
                    'GateServer'
                );
                // 清理已下线的服务连接
                this.cleanupOfflineServices(event.instances);
            });
        }
    }

    /**
     * 清理已下线的服务连接
     */
    private cleanupOfflineServices(instances: ServiceInstance[]): void {
        const validIds = new Set(instances.map(inst => inst.id));
        
        for (const [instanceId, connection] of this.gameConnections.entries()) {
            if (!validIds.has(instanceId)) {
                this.framework.getLogger().info(
                    `清理已下线的游戏服务器连接：${instanceId}`, 
                    'GateServer'
                );
                connection.client.close();
                this.gameConnections.delete(instanceId);
            }
        }
        
        // 清理已下线服务的会话路由
        for (const [sessionId, instanceId] of this.sessionRoutes.entries()) {
            if (!validIds.has(instanceId)) {
                this.sessionRoutes.delete(sessionId);
            }
        }
    }

    /**
     * 获取或创建到游戏服务器的连接
     */
    private async getOrCreateGameConnection(): Promise<WsClient | null> {
        const serviceDiscovery = this.framework.getServiceDiscovery();
        if (!serviceDiscovery) {
            this.framework.getLogger().warn('服务发现未初始化', 'GateServer');
            return null;
        }

        // 从服务发现中获取游戏服务器实例
        const instances = serviceDiscovery.getInstances();
        const gameInstances = instances.filter(inst => inst.name === 'game');
        
        if (gameInstances.length === 0) {
            this.framework.getLogger().warn('没有可用的游戏服务器实例', 'GateServer');
            return null;
        }

        // 使用加权轮询选择一个实例
        const selectedInstance = serviceDiscovery.selectInstanceByWeight();
        if (!selectedInstance) {
            this.framework.getLogger().warn('无法选择游戏服务器实例', 'GateServer');
            return null;
        }

        // 检查是否已有连接
        const existing = this.gameConnections.get(selectedInstance.id);
        if (existing && existing.client.isSocketConnected()) {
            existing.lastUsed = Date.now();
            return existing.client;
        }

        // 创建新连接
        return this.createGameConnection(selectedInstance);
    }

    /**
     * 创建到游戏服务器的连接
     */
    private async createGameConnection(instance: ServiceInstance): Promise<WsClient | null> {
        const logger = this.framework.getLogger();
        const networkManager = this.framework.getNetworkManager();
        
        const gameUrl = `ws://${instance.host}:${instance.port}`;
        logger.info(`正在连接到游戏服务器：${gameUrl} (ID: ${instance.id})`, 'GateServer');

        try {
            const client = await networkManager.createClient('game', instance.id, {
                url: gameUrl,
                reconnectInterval: 3000,
                maxReconnectAttempts: 10,
                pingInterval: 30000
            });

            client.on('message', (data: Buffer) => {
                this.handleGameMessage(data, instance.id);
            });

            client.on('open', () => {
                logger.info(`[GateServer] 已连接到游戏服务器：${instance.id}`, 'GateServer');
            });

            client.on('close', () => {
                logger.warn(`[GateServer] 与游戏服务器的连接已关闭：${instance.id}`, 'GateServer');
                // 连接关闭时，从连接池移除
                this.gameConnections.delete(instance.id);
            });

            client.on('error', (error: Error) => {
                logger.error(`[GateServer] 游戏服务器连接错误：${instance.id}`, error, 'GateServer');
            });

            const connection: GameServerConnection = {
                instance,
                client,
                lastUsed: Date.now()
            };
            this.gameConnections.set(instance.id, connection);
            
            return client;
        } catch (error) {
            logger.error(`[GateServer] 连接游戏服务器失败：${instance.id}`, error as Error, 'GateServer');
            return null;
        }
    }

    /**
     * 处理新连接
     */
    private handleConnection(ws: WebSocket): void {
        const logger = this.framework.getLogger();
        logger.debug('新客户端连接', 'GateServer');
        
        // 创建玩家会话
        const session = new PlayerSession(ws);
        PlayerManager.registerSession(ws, session);
    }

    /**
     * 处理客户端消息
     */
    private handleMessage(ws: WebSocket, data: Buffer): void {
        try {
            const session = PlayerManager.getSession(ws);
            if (!session) {
                this.framework.getLogger().warn('未找到会话，忽略消息', 'GateServer');
                return;
            }

            const uint8Data = new Uint8Array(data);
            
            // 使用 MessageHandler 处理 WebsocketMessage
            MessageHandler.handleWebsocketMessage(session, uint8Data, async (wsMessage) => {
                await this.forwardToGame(session, wsMessage);
            });
        } catch (error) {
            this.framework.getLogger().error('处理消息时出错', error as Error, 'GateServer');
        }
    }

    /**
     * 处理来自游戏服务器的消息
     */
    private handleGameMessage(data: Buffer, instanceId: number): void {
        try {
            const uint8Data = new Uint8Array(data);
            
            // 使用 PBPackage 解析
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.decode(uint8Data) as any;
            
            const messageType = pbPackage.message_type as string;
            const messagePayload = new Uint8Array(pbPackage.message_payload as ArrayBuffer);
            
            this.framework.getLogger().debug(
                `[GateServer] 收到游戏服务器消息 - instanceId: ${instanceId}, messageType: ${messageType}`, 
                'GateServer'
            );
            
            // 根据 messageType 路由
            if (messageType === 'GameToGate') {
                // 解析 GameToGate 消息
                const gameToGateType = ProtoLoader.GameToGate;
                const gameToGate = gameToGateType.decode(messagePayload) as any;
                
                // 调用 MessageHandler 处理
                MessageHandler.handleGameToGameMessage(gameToGate);
            } else {
                this.framework.getLogger().warn(
                    `[GateServer] 未知消息类型：${messageType} (from ${instanceId})`, 
                    'GateServer'
                );
            }
        } catch (error) {
            this.framework.getLogger().error(
                '[GateServer] 处理游戏服务器消息时出错', 
                error as Error, 
                'GateServer'
            );
        }
    }

    /**
     * 转发 WebsocketMessage 到游戏服务器
     * 按需建立连接
     */
    private async forwardToGame(session: PlayerSession, wsMessage: any): Promise<void> {
        try {
            const sessionId = session.getGateSessionId();
            
            // 获取或创建游戏服务器连接
            const client = await this.getOrCreateGameConnection();
            if (!client || !client.isSocketConnected()) {
                this.framework.getLogger().warn(
                    '[GateServer] 游戏服务器连接不可用，无法转发消息', 
                    'GateServer'
                );
                return;
            }

            // 使用 PBPackage 包装 WebsocketMessage
            const pbPackageType = ProtoLoader.PBPackage;
            const wsMessageType = ProtoLoader.WebsocketMessage;
            
            // 先编码 WebsocketMessage
            const wsEncoded = wsMessageType.encode(wsMessage).finish();
            
            // 用 PBPackage 包装
            const pbPackage = pbPackageType.create({
                message_type: wsMessage.message_type,
                message_payload: wsEncoded
            });
            const pbEncoded = pbPackageType.encode(pbPackage).finish();

            // 构建 GateToGame 消息
            const gateToGameType = ProtoLoader.GateToGame;
            const gateToGame = gateToGameType.create({
                sessionId: sessionId,
                messageId: 0,
                payload: pbEncoded,
                message_type: wsMessage.message_type
            });
            const encoded = gateToGameType.encode(gateToGame).finish();

            // 使用 PBPackage 包装 GateToGame 消息
            const outerPbPackage = pbPackageType.create({
                message_type: 'GateToGame',
                message_payload: encoded
            });
            const outerEncoded = pbPackageType.encode(outerPbPackage).finish();

            client.send(Buffer.from(outerEncoded));
            this.framework.getLogger().debug(
                `[GateServer] 消息已转发到游戏服务器 - messageType: ${wsMessage.message_type}`, 
                'GateServer'
            );
        } catch (error) {
            this.framework.getLogger().error(
                '[GateServer] 转发消息到游戏服务器失败', 
                error as Error, 
                'GateServer'
            );
        }
    }

    /**
     * 处理连接关闭
     */
    private handleClose(ws: WebSocket): void {
        const session = PlayerManager.getSession(ws);
        if (session) {
            const sessionId = session.getGateSessionId();
            // 清理会话路由
            this.sessionRoutes.delete(sessionId);
            
            PlayerManager.removeSession(ws);
            
            if (session.isLogin()) {
                this.framework.getLogger().info(
                    `玩家断开连接 - ID: ${session.getPlayerId()}, 名称：${session.getName()}`, 
                    'GateServer'
                );
            } else {
                this.framework.getLogger().info('未登录客户端断开连接', 'GateServer');
            }
        }
    }

    /**
     * 获取在线玩家数量
     */
    getOnlineCount(): number {
        return PlayerManager.getOnlineCount();
    }

    /**
     * 获取所有会话
     */
    getSessions(): Map<WebSocket, PlayerSession> {
        return PlayerManager.getAllSessions();
    }

    /**
     * 检查是否正在运行
     */
    isServerRunning(): boolean {
        return this.isRunning;
    }

    /**
     * 关闭服务器
     */
    async shutdown(): Promise<void> {
        const logger = this.framework.getLogger();
        logger.info('Gate 服务器正在关闭...', 'GateServer');
        
        this.isRunning = false;
        
        // 关闭所有游戏服务器连接
        for (const [instanceId, connection] of this.gameConnections.entries()) {
            logger.info(`关闭游戏服务器连接：${instanceId}`, 'GateServer');
            await connection.client.close();
        }
        this.gameConnections.clear();
        this.sessionRoutes.clear();
        
        // 关闭所有客户端连接
        for (const [ws, session] of PlayerManager.getAllSessions()) {
            session.close();
        }
        
        // 关闭框架（包括 WebSocket 服务器）
        await this.framework.shutdown();
        
        logger.info('Gate 服务器已关闭', 'GateServer');
    }
}

/**
 * 启动 Gate 服务器
 */
async function startGate(): Promise<void> {
    const env = process.env.NODE_ENV || 'local';
    const configPath = `config/${env}/gate.json`;

    // 从环境变量里面读取服务器id
    const serverId = parseInt(process.env.SERVER_ID);
    if (isNaN(serverId)) {
      console.error('SERVER_ID 环境变量未设置或无效');
      process.exit(1);
    }
    
    const framework = getFramework();
    await framework.init(serverId, { configPath });
    
    const config = framework.getConfigManager().getAllConfig();
    
    const gateConfig: GateConfig = {
        port: config.server.port,
        host: config.server.host
    };
    
    const gateServer = new GateServer(gateConfig, serverId);
    
    // 处理进程退出
    process.on('SIGINT', async () => {
        console.log('\n收到退出信号...');
        await gateServer.shutdown();
        process.exit(0);
    });

    process.on('SIGTERM', async () => {
        console.log('\n收到终止信号...');
        await gateServer.shutdown();
        process.exit(0);
    });

    // 捕获异常
    process.on('uncaughtException', (err) => {
        console.error('\n[GateServer] 捕获到异常:', err);
    });

    await gateServer.start();
}

// 如果直接运行此文件则启动服务器
if (require.main === module) {
    startGate().catch((err) => {
        console.error('[GateServer] 启动失败:', err);
        process.exit(1);
    });
}
