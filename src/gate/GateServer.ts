import WebSocket from 'ws';
import { PlayerSession } from './PlayerSession';
import { MessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';
import { PlayerManager } from './PlayerManager';
import { Framework, getFramework } from '../framework/Framework';
import { WsClient } from '../framework/network/WsClient';

/**
 * Gate 服务器配置
 */
interface GateConfig {
    port: number;
    host: string;
    gameHost: string;
    gamePort: number;
}

/**
 * Gate 服务器
 * 负责处理客户端的 WebSocket 连接请求
 */
export class GateServer {
    private config: GateConfig;
    private gameConnector: WsClient | null = null;
    private framework: Framework;
    private isRunning: boolean = false;

    constructor(config: GateConfig) {
        this.config = config;
        this.framework = getFramework();
        
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
        await this.framework.init({
            configPath: `src/config/${process.env.NODE_ENV || 'local'}/gate.json`
        });

        // 启动框架（包括服务发现）
        await this.framework.start();

        // 连接到 Game 服务器
        await this.connectToGame();

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
        logger.info(`Gate 服务器已启动 - 监听 ${this.config.host}:${this.config.port}`, 'GateServer');
    }

    /**
     * 连接到 Game 服务器
     */
    private async connectToGame(): Promise<void> {
        const logger = this.framework.getLogger();
        const networkManager = this.framework.getNetworkManager();
        
        const gameUrl = `ws://${this.config.gameHost}:${this.config.gamePort}`;
        logger.info(`正在连接到 Game 服务器：${gameUrl}`, 'GateServer');

        try {
            this.gameConnector = await networkManager.createClient('game', {
                url: gameUrl,
                reconnectInterval: 3000,
                maxReconnectAttempts: 10,
                pingInterval: 30000
            });

            this.gameConnector.on('message', (data: Buffer) => {
                this.handleGameMessage(data);
            });

            this.gameConnector.on('open', () => {
                logger.info('[GateServer] 已连接到 Game 服务器', 'GateServer');
            });

            this.gameConnector.on('close', () => {
                logger.warn('[GateServer] 与 Game 服务器的连接已关闭', 'GateServer');
            });

            this.gameConnector.on('error', (error: Error) => {
                logger.error('[GateServer] Game 连接错误', error, 'GateServer');
            });

        } catch (error) {
            logger.error('[GateServer] 连接 Game 服务器失败', error as Error, 'GateServer');
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
            MessageHandler.handleWebsocketMessage(session, uint8Data, (wsMessage) => {
                this.forwardToGame(session, wsMessage);
            });
        } catch (error) {
            this.framework.getLogger().error('处理消息时出错', error as Error, 'GateServer');
        }
    }

    /**
     * 处理来自 Game 服务器的消息
     */
    private handleGameMessage(data: Buffer): void {
        try {
            const uint8Data = new Uint8Array(data);
            
            // 使用 PBPackage 解析
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.decode(uint8Data) as any;
            
            const messageType = pbPackage.message_type as string;
            const messagePayload = new Uint8Array(pbPackage.message_payload as ArrayBuffer);
            
            this.framework.getLogger().debug(`[GateServer] 收到 Game 消息 - messageType: ${messageType}`, 'GateServer');
            
            // 根据 messageType 路由
            if (messageType === 'GameToGate') {
                // 解析 GameToGate 消息
                const gameToGateType = ProtoLoader.GameToGate;
                const gameToGate = gameToGateType.decode(messagePayload) as any;
                
                // 调用 MessageHandler 处理
                MessageHandler.handleGameToGameMessage(gameToGate);
            } else {
                this.framework.getLogger().warn(`[GateServer] 未知消息类型：${messageType}`, 'GateServer');
            }
        } catch (error) {
            this.framework.getLogger().error('[GateServer] 处理 Game 消息时出错', error as Error, 'GateServer');
        }
    }

    /**
     * 转发 WebsocketMessage 到 Game 服务器
     */
    private forwardToGame(session: PlayerSession, wsMessage: any): void {
        try {
            if (!this.gameConnector || !this.gameConnector.isSocketConnected()) {
                this.framework.getLogger().warn('[GateServer] Game 连接不可用，无法转发消息', 'GateServer');
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
                sessionId: session.getGateSessionId(),
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

            this.gameConnector.send(Buffer.from(outerEncoded));
            this.framework.getLogger().debug(
                `[GateServer] 消息已转发到 Game 服务器 - messageType: ${wsMessage.message_type}`, 
                'GateServer'
            );
        } catch (error) {
            this.framework.getLogger().error('[GateServer] 转发消息到 Game 失败', error as Error, 'GateServer');
        }
    }

    /**
     * 处理连接关闭
     */
    private handleClose(ws: WebSocket): void {
        const session = PlayerManager.getSession(ws);
        if (session) {
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
        
        // 关闭 Game 连接
        if (this.gameConnector) {
            await this.framework.getNetworkManager().removeClient('game');
            this.gameConnector = null;
        }
        
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
    const configPath = `src/config/${env}/gate.json`;
    
    const framework = getFramework();
    await framework.init({ configPath });
    
    const config = framework.getConfigManager().getAllConfig();
    
    const gateConfig: GateConfig = {
        port: config.server.port,
        host: config.server.host,
        gameHost: process.env.GAME_HOST || '127.0.0.1',
        gamePort: parseInt(process.env.GAME_PORT || '8090')
    };
    
    const gateServer = new GateServer(gateConfig);
    
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
