import WebSocket, { WebSocketServer } from 'ws';
import { PlayerSession } from './PlayerSession';
import { MessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';

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
    private sessions: Map<WebSocket, PlayerSession>;
    private config: GateConfig;

    constructor(config: GateConfig) {
        this.config = {
            port: config.port,
            host: config.host || '127.0.0.1'
        };
        
        // 同步加载 proto 文件
        ProtoLoader.loadProtoSync();
        
        // 初始化消息注册表
        MessageHandler.init();
        
        this.wss = new WebSocketServer({
            port: this.config.port,
            host: this.config.host
        });
        this.sessions = new Map<WebSocket, PlayerSession>();
        
        this.setupServer();
    }

    /**
     * 设置服务器事件处理
     */
    private setupServer(): void {
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
        this.sessions.set(ws, session);

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
     */
    private handleMessage(session: PlayerSession, data: Buffer): void {
        try {
            const uint8Data = new Uint8Array(data);
            MessageHandler.handleMessage(session, uint8Data);
        } catch (error) {
            console.error('处理消息时出错:', error);
            session.close();
        }
    }

    /**
     * 处理连接关闭
     */
    private handleClose(session: PlayerSession): void {
        const ws = session.getWebSocket();
        this.sessions.delete(ws);
        
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
        return this.sessions.size;
    }

    /**
     * 获取所有会话
     */
    getSessions(): Map<WebSocket, PlayerSession> {
        return this.sessions;
    }

    /**
     * 关闭服务器
     */
    shutdown(): void {
        console.log('Gate 服务器正在关闭...');
        
        // 关闭所有连接
        for (const [ws, session] of this.sessions) {
            session.close();
        }
        this.sessions.clear();
        
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
}

// 如果直接运行此文件则启动服务器
if (require.main === module) {
    startGate();
}
