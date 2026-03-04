import WebSocket, { WebSocketServer } from 'ws';
import { PlayerSession } from './PlayerSession';
import { MessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';
import { PlayerManager } from './PlayerManager';
import { GameConnector } from './GameConnector';

/**
 * Gate 服务器配置
 */
interface GateConfig {
    port: number;
    host?: string;
}

/**
 * Gate 服务器
 * 负责处理客户端的 WebSocket 连接请求
 */
export class GateServer {
    private wss: WebSocketServer;
    private config: GateConfig;
    private gameConnector: GameConnector;

    constructor(config: GateConfig) {
        this.config = {
            port: config.port,
            host: config.host || '127.0.0.1'
        };
        
        // 同步加载 proto 文件
        ProtoLoader.loadProtoSync();
        
        // 初始化消息注册表
        MessageHandler.init();
        
        // 创建 Game 连接器
        this.gameConnector = new GameConnector('127.0.0.1', 9000);
        
        this.wss = new WebSocketServer({
            port: this.config.port,
            host: this.config.host
        });
        
        this.setupServer();
    }

    /**
     * 设置服务器事件处理
     */
    private async setupServer(): Promise<void> {
        // 连接到 Game 服务器
        try {
            await this.gameConnector.connect();
            console.log('[GateServer] 已连接到 Game 服务器');
        } catch (error) {
            console.error('[GateServer] 连接 Game 服务器失败:', error);
        }

        this.wss.on('connection', (ws: WebSocket) => {
            this.handleConnection(ws);
        });

        this.wss.on('error', (error: Error) => {
            console.error('WebSocket 服务器错误:', error);
        });

        console.log(`Gate 服务器已启动 - 监听 ${this.config.host}:${this.config.port}`);
    }

    /**
     * 处理新连接
     */
    private handleConnection(ws: WebSocket): void {
        console.log('新客户端连接');
        
        // 创建玩家会话
        const session = new PlayerSession(ws);
        PlayerManager.registerSession(ws, session);

        // 设置消息处理
        ws.on('message', (data: Buffer) => {
            this.handleMessage(session, data);
        });

        // 设置关闭处理
        ws.on('close', () => {
            this.handleClose(session);
        });

        // 设置错误处理
        ws.on('error', (error: Error) => {
            console.error('客户端连接错误:', error);
        });
    }

    /**
     * 处理客户端消息
     * 使用 WebsocketMessage 格式，根据 uri 前缀判断转发目标
     */
    private handleMessage(session: PlayerSession, data: Buffer): void {
        try {
            const uint8Data = new Uint8Array(data);
            
            // 使用 MessageHandler 处理 WebsocketMessage
            MessageHandler.handleWebsocketMessage(session, uint8Data, (wsMessage) => {
                this.forwardToGame(session, wsMessage);
            });
        } catch (error) {
            console.error('处理消息时出错:', error);
            session.close();
        }
    }

    /**
     * 转发 WebsocketMessage 到 Game 服务器
     */
    private forwardToGame(session: PlayerSession, wsMessage: any): void {
        try {
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
                messageId: 0, // 不再使用 messageId
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

            this.gameConnector.send(outerEncoded);
            console.log(`[GateServer] 消息已转发到 Game 服务器 - messageType: ${wsMessage.message_type}`);
        } catch (error) {
            console.error('[GateServer] 转发消息到 Game 失败:', error);
        }
    }

    /**
     * 处理连接关闭
     */
    private handleClose(session: PlayerSession): void {
        const ws = session.getWebSocket();
        PlayerManager.removeSession(ws);
        
        if (session.isLogin()) {
            console.log(`玩家断开连接 - ID: ${session.getPlayerId()}, 名称：${session.getName()}`);
        } else {
            console.log('未登录客户端断开连接');
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
     * 关闭服务器
     */
    shutdown(): void {
        console.log('Gate 服务器正在关闭...');
        
        // 关闭 Game 连接
        this.gameConnector.close();
        
        // 关闭所有连接
        for (const [ws, session] of PlayerManager.getAllSessions()) {
            session.close();
        }
        
        // 关闭服务器
        this.wss.close(() => {
            console.log('Gate 服务器已关闭');
        });
    }
}

/**
 * 启动 Gate 服务器
 */
function startGate(): void {
    const config: GateConfig = {
        port: 8080
    };
    
    const gateServer = new GateServer(config);
    
    // 处理进程退出
    process.on('SIGINT', () => {
        console.log('\n收到退出信号...');
        gateServer.shutdown();
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        console.log('\n收到终止信号...');
        gateServer.shutdown();
        process.exit(0);
    });

    // 捕获异常
    process.on('uncaughtException', (err) => {
        console.error('\n[GateServer] 捕获到异常:', err);
    });
}

// 如果直接运行此文件则启动服务器
if (require.main === module) {
    startGate();
}
