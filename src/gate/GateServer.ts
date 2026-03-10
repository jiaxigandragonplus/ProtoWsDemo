import WebSocket from 'ws';
import { ClientSession as GateClientSession } from './ClientSession';
import { MessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';
import { ClientManager } from './ClientManager';
import { Framework, getFramework } from '../framework/Framework';
import { WsClient } from '../framework/network/WsClient';
import { WsServer } from '../framework/network/WsServer';
import { ServiceInstance } from '../framework/discovery/ServiceDiscovery';
import { Session } from '../framework/network/Session';
import { SessionManager } from '../framework/network/SessionManager';

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

        // 初始化框架，传入消息处理函数
        // Gate 服务器需要启用客户端连接服务器
        await this.framework.init(this.serverId, {
            configPath: `config/${process.env.NODE_ENV || 'local'}/gate.json`,
            enableClientServer: true,
        });

        // 启动框架（包括服务发现）
        await this.framework.start();

        // 监听服务发现变化事件
        this.setupServiceDiscoveryListener();

        // 设置 WebSocket 服务器事件处理
        const networkManager = this.framework.getNetworkManager();
        
        // 获取服务器间连接的 WsServer（用于与其他服务器通信）
        const serverWsServer = networkManager.getServerWsServer();
        if (serverWsServer) {
            serverWsServer.on('connection', (event) => {
                this.handleServerConnection(event.socket, event.session);
            });

            serverWsServer.on('close', (event) => {
                this.handleServerClose(event.socket, event.session);
            });

            serverWsServer.on('message', (event) => {
                this.handleServerMessage(event.socket, event.data);
            });
        }

        // 获取客户端连接的 WsServer（用于与客户端通信）
        const clientWsServer = networkManager.getClientWsServer();
        if (clientWsServer) {
            clientWsServer.on('connection', (event) => {
                this.handleClientConnection(event.socket, event.session);
            });

            clientWsServer.on('close', (event) => {
                this.handleClientClose(event.socket, event.session);
            });

            clientWsServer.on('message', (event) => {
                this.handleClientMessage(event.socket, event.data);
            });
        }

        this.isRunning = true;

        logger.info(`Gate 服务器已启动 - 服务器间连接：${this.config.host}:${this.config.port + this.serverId}, 客户端连接：${this.config.host}:${this.config.port + this.serverId + 1000}`, 'GateServer');
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
     * 处理服务器间连接（来自其他服务器的连接）
     * @param ws - WebSocket 实例
     * @param session - Framework Session 实例
     */
    private handleServerConnection(ws: WebSocket, session: Session): void {
        const logger = this.framework.getLogger();
        logger.info(`新服务器连接，sessionId=${session.getSessionId()}`, 'GateServer');
        
        // 使用 SessionManager 管理服务器间会话
        const sessionManager = SessionManager.getInstance();
        // 这里需要根据实际情况设置 serverType 和 serverId
        // 暂时先注册到 SessionManager
        sessionManager.registerSession('gate', this.serverId, session);
    }

    /**
     * 处理服务器间消息
     */
    private handleServerMessage(ws: WebSocket, data: Buffer): void {
        try {
            const logger = this.framework.getLogger();
            logger.debug(`收到服务器间消息`, 'GateServer');
            
            // 处理来自其他服务器的消息
            // 这里可以根据具体协议进行解析和处理
        } catch (error) {
            this.framework.getLogger().error('处理服务器间消息时出错', error as Error, 'GateServer');
        }
    }

    /**
     * 处理服务器间连接关闭
     */
    private handleServerClose(ws: WebSocket, session: Session): void {
        const logger = this.framework.getLogger();
        logger.info('服务器连接关闭', 'GateServer');
        
        // 从 SessionManager 中移除会话
        const sessionManager = SessionManager.getInstance();
        sessionManager.removeSessionBySession(session);
    }

    /**
     * 处理客户端连接
     * @param ws - WebSocket 实例
     * @param session - Framework Session 实例
     */
    private handleClientConnection(ws: WebSocket, session: Session): void {
        const logger = this.framework.getLogger();
        logger.debug(`新客户端连接，sessionId=${session.getSessionId()}`, 'GateServer');
        
        // 创建玩家会话（使用扩展的 ClientSession）
        const clientSession = new GateClientSession(ws, {
            gateSessionId: session.getSessionId() as number,
        });
        ClientManager.registerSession(ws, clientSession);
    }

    /**
     * 处理客户端消息
     */
    private handleClientMessage(ws: WebSocket, data: Buffer): void {
        try {
            const session = ClientManager.getSession(ws);
            if (!session) {
                this.framework.getLogger().warn('未找到会话，忽略消息', 'GateServer');
                return;
            }

            const uint8Data = new Uint8Array(data);
            
            // 使用 MessageHandler 处理 WebsocketMessage
            MessageHandler.handleWebsocketMessage(session, uint8Data, async (wsMessage) => {
                await this.forwardToServer(session, wsMessage);
            });
        } catch (error) {
            this.framework.getLogger().error('处理消息时出错', error as Error, 'GateServer');
        }
    }

    /**
     * 处理 Framework 传来的 WebSocket 消息
     * @param data - 消息数据
     * @param serverType - 服务器类型
     * @param id - 服务器实例 ID
     */
    private handleFrameworkMessage(data: Buffer, serverType: string, id: number): void {
        try {
            // Gate 服务器的消息已经在 handleMessage 中通过 wsServer.on('message') 处理
            // 此方法主要用于处理来自其他服务器的消息
            this.framework.getLogger().debug(
                `收到 Framework 消息 - serverType: ${serverType}, id: ${id}`,
                'GateServer'
            );
        } catch (error) {
            this.framework.getLogger().error(
                '处理 Framework 消息时出错',
                error as Error,
                'GateServer'
            );
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
     * 转发 WebsocketMessage 到其他服务器
     */
    private async forwardToServer(session: GateClientSession, wsMessage: any): Promise<void> {
        // todo
    }

    /**
     * 处理客户端连接关闭
     * @param ws - WebSocket 实例
     * @param session - Framework Session 实例
     */
    private handleClientClose(ws: WebSocket, session: Session): void {
        const clientSession = ClientManager.getSession(ws);
        if (clientSession) {
            const sessionId = clientSession.getGateSessionId();
            // 清理会话路由
            this.sessionRoutes.delete(sessionId);
            
            ClientManager.removeSession(ws);
            
            if (clientSession.isLogin()) {
                this.framework.getLogger().info(
                    `玩家断开连接 - ID: ${clientSession.getPlayerId()}, 名称：${clientSession.getName()}`,
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
        return ClientManager.getOnlineCount();
    }

    /**
     * 获取所有会话
     */
    getSessions(): Map<WebSocket, GateClientSession> {
        return ClientManager.getAllSessions();
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
        for (const [ws, session] of ClientManager.getAllSessions()) {
            session.close();
        }
        
        // 关闭框架（包括 WebSocket 服务器）
        await this.framework.shutdown();
        
        logger.info('Gate 服务器已关闭', 'GateServer');
    }

    async sendMessage(serverType: string, id: number, message: any): Promise<void> {
        const logger = this.framework.getLogger();
        logger.info(`[GateServer] 发送消息给 ${serverType} 服务器 ${id}`, 'GateServer');
        
        this.framework.sendMessage(serverType, id, message);
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
