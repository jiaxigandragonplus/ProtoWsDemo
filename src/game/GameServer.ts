import WebSocket, { WebSocketServer } from 'ws';
import { GameMessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';

/**
 * Game 服务器配置
 */
interface GameConfig {
    port: number;
    host?: string;
}

/**
 * Game 服务器
 * 负责处理具体的业务逻辑
 */
export class GameServer {
    private config: GameConfig;
    private wss: WebSocketServer;
    private isRunning: boolean = false;

    constructor(config: GameConfig) {
        this.config = {
            port: config.port || 9000,
            host: config.host || '127.0.0.1'
        };

        // 同步加载 proto 文件
        ProtoLoader.loadProtoSync();

        // 创建 WebSocket 服务器
        this.wss = new WebSocketServer({
            port: this.config.port,
            host: this.config.host
        });

        this.setupServer();
    }

    /**
     * 设置服务器事件处理
     */
    private setupServer(): void {
        this.wss.on('connection', (ws) => {
            console.log('[GameServer] Gate 服务器已连接');
            
            ws.on('message', (data: Buffer) => {
                this.handleMessage(data);
            });

            ws.on('close', () => {
                console.log('[GameServer] Gate 服务器连接已关闭');
            });

            ws.on('error', (error: Error) => {
                console.error('[GameServer] Gate 连接错误:', error);
            });
        });

        this.wss.on('error', (error: Error) => {
            console.error('[GameServer] WebSocket 服务器错误:', error);
        });

        this.isRunning = true;
        console.log(`[GameServer] Game 服务器已启动 - 监听 ${this.config.host}:${this.config.port}`);
    }

    /**
     * 处理来自 Gate 的消息
     */
    private handleMessage(data: Buffer): void {
        try {
            const uint8Data = new Uint8Array(data);
            GameMessageHandler.handleMessage(uint8Data, this.wss);
        } catch (error) {
            console.error('[GameServer] 处理消息时出错:', error);
        }
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
    shutdown(): void {
        console.log('[GameServer] 正在关闭 Game 服务器...');
        this.isRunning = false;
        
        // 关闭所有连接
        for (const client of this.wss.clients) {
            client.close();
        }
        
        // 关闭服务器
        this.wss.close(() => {
            console.log('[GameServer] Game 服务器已关闭');
        });
    }
}

/**
 * 启动 Game 服务器
 */
function startGame(): void {
    const config: GameConfig = {
        port: 9000
    };

    const gameServer = new GameServer(config);

    // 处理进程退出
    process.on('SIGINT', () => {
        console.log('\n[GameServer] 收到退出信号...');
        gameServer.shutdown();
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        console.log('\n[GameServer] 收到终止信号...');
        gameServer.shutdown();
        process.exit(0);
    });
}

// 如果直接运行此文件则启动服务器
if (require.main === module) {
    startGame();
}
