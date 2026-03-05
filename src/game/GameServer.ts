import WebSocket from 'ws';
import { GameMessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';
import { Framework, getFramework } from '../framework/Framework';

/**
 * Game 服务器配置
 */
interface GameConfig {
    port: number;
    host: string;
}

/**
 * Game 服务器
 * 负责处理具体的业务逻辑
 */
export class GameServer {
    private config: GameConfig;
    private framework: Framework;
    private isRunning: boolean = false;
    private serverId: number = 0;

    constructor(config: GameConfig, serverId: number) {
        this.config = config;
        this.serverId = serverId;
        this.framework = getFramework();
        
        // 同步加载 proto 文件
        ProtoLoader.loadProtoSync();
    }

    /**
     * 启动服务器
     */
    async start(): Promise<void> {
        if (this.isRunning) {
            this.framework.getLogger().warn('Game 服务器已在运行中', 'GameServer');
            return;
        }

        const logger = this.framework.getLogger();
        logger.info('Game 服务器启动中...', 'GameServer');

        // 初始化框架
        await this.framework.init(this.serverId,{
            configPath: `config/${process.env.NODE_ENV || 'local'}/game.json`
        });

        // 启动框架（包括服务发现）
        await this.framework.start();

        // 设置 WebSocket 服务器事件处理
        const networkManager = this.framework.getNetworkManager();
        const wsServer = networkManager.getServer();
        
        if (wsServer) {
            wsServer.on('connection', (conn) => {
                logger.info('[GameServer] Gate 服务器已连接', 'GameServer');
                
                conn.socket.on('message', (data: Buffer) => {
                    this.handleMessage(data);
                });

                conn.socket.on('close', () => {
                    logger.info('[GameServer] Gate 服务器连接已关闭', 'GameServer');
                });

                conn.socket.on('error', (error: Error) => {
                    logger.error('[GameServer] Gate 连接错误', error, 'GameServer');
                });
            });
        }

        this.isRunning = true;
        logger.info(`[GameServer] Game 服务器已启动 - 监听 ${this.config.host}:${this.config.port + this.serverId}`, 'GameServer');
    }

    /**
     * 处理来自 Gate 的消息
     */
    private handleMessage(data: Buffer): void {
        try {
            const uint8Data = new Uint8Array(data);
            GameMessageHandler.handleMessage(uint8Data, this.framework.getNetworkManager());
        } catch (error) {
            this.framework.getLogger().error('[GameServer] 处理消息时出错', error as Error, 'GameServer');
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
    async shutdown(): Promise<void> {
        const logger = this.framework.getLogger();
        logger.info('[GameServer] 正在关闭 Game 服务器...', 'GameServer');
        
        this.isRunning = false;
        
        // 关闭框架（包括 WebSocket 服务器）
        await this.framework.shutdown();
        
        logger.info('[GameServer] Game 服务器已关闭', 'GameServer');
    }
}

/**
 * 启动 Game 服务器
 */
async function startGame(): Promise<void> {
    const env = process.env.NODE_ENV || 'local';
    const configPath = `config/${env}/game.json`;

    // 从环境变量里面读取服务器id
    const serverId = parseInt(process.env.SERVER_ID);
    if (isNaN(serverId)) {
      console.error('SERVER_ID 环境变量未设置或无效');
      process.exit(1);
    }
    
    const framework = getFramework();
    await framework.init(serverId, { configPath });
    
    const config = framework.getConfigManager().getAllConfig();
    
    const gameConfig: GameConfig = {
        port: config.server.port,
        host: config.server.host
    };

    const gameServer = new GameServer(gameConfig, serverId);

    // 处理进程退出
    process.on('SIGINT', async () => {
        console.log('\n[GameServer] 收到退出信号...');
        await gameServer.shutdown();
        process.exit(0);
    });

    process.on('SIGTERM', async () => {
        console.log('\n[GameServer] 收到终止信号...');
        await gameServer.shutdown();
        process.exit(0);
    });

    await gameServer.start();
}

// 如果直接运行此文件则启动服务器
if (require.main === module) {
    startGame().catch((err) => {
        console.error('[GameServer] 启动失败:', err);
        process.exit(1);
    });
}
