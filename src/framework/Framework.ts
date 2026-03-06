/**
 * 框架主类
 * 统一管理所有框架模块的初始化和生命周期
 */

import { ConfigManager, AppConfig } from './config/ConfigManager';
import { Logger, defaultLogger } from './logger/Logger';
import { DatabaseManager } from './db/DatabaseManager';
import { NetworkManager } from './network/NetworkManager';
import { ServiceDiscovery, DiscoveryConfig } from './discovery/ServiceDiscovery';
import { RedisClient } from './db/RedisClient';

/**
 * 框架配置接口
 */
export interface FrameworkConfig {
  configPath?: string;
  config?: AppConfig;
}

/**
 * 框架类
 */
export class Framework {
  private static instance: Framework;
  private configManager: ConfigManager;
  private logger: Logger;
  private databaseManager: DatabaseManager;
  private networkManager: NetworkManager;
  private serviceDiscovery: ServiceDiscovery | null = null;
  private isInitialized: boolean = false;
  private isRunning: boolean = false;
  protected serverId: number = 0;

  private constructor() {
    this.configManager = ConfigManager.getInstance();
    this.logger = defaultLogger;
    this.databaseManager = DatabaseManager.getInstance();
    this.networkManager = NetworkManager.getInstance();
  }

  /**
   * 获取单例实例
   */
  public static getInstance(): Framework {
    if (!Framework.instance) {
      Framework.instance = new Framework();
    }
    return Framework.instance;
  }

  /**
   * 获取配置管理器
   */
  public getConfigManager(): ConfigManager {
    return this.configManager;
  }

  /**
   * 获取日志器
   */
  public getLogger(): Logger {
    return this.logger;
  }

  /**
   * 获取数据库管理器
   */
  public getDatabaseManager(): DatabaseManager {
    return this.databaseManager;
  }

  /**
   * 获取网络管理器
   */
  public getNetworkManager(): NetworkManager {
    return this.networkManager;
  }

  /**
   * 获取服务发现
   */
  public getServiceDiscovery(): ServiceDiscovery | null {
    return this.serviceDiscovery;
  }

  /**
   * 初始化框架
   */
  public async init(serverId: number, config: FrameworkConfig): Promise<void> {
    if (this.isInitialized) {
      this.logger.warn('框架已初始化', 'Framework');
      return;
    }

    this.serverId = serverId;

    // 加载配置
    if (config.configPath) {
      this.configManager.load(config.configPath);
    } else if (config.config) {
      this.configManager.loadFromObject(config.config);
    } else {
      throw new Error('必须提供 configPath 或 config 参数');
    }

    // 初始化日志器
    const loggerConfig = this.configManager.getLoggerConfig();
    this.logger.init({
      level: loggerConfig.level, // 字符串将在 Logger 内部处理
      console: loggerConfig.console,
      file: loggerConfig.file,
    });

    this.logger.info('框架初始化中...', 'Framework');

    // 初始化数据库
    const dbConfig = this.configManager.getDatabaseConfig();
    await this.databaseManager.init(dbConfig);

    // 设置各管理器的日志器
    this.databaseManager.setLogger(this.logger);
    this.networkManager.setLogger(this.logger);

    // 创建 WebSocket 服务器
    const serverConfig = this.configManager.getServerConfig();
    await this.networkManager.createServer({
      host: serverConfig.host,
      port: serverConfig.port + this.serverId
    });

    this.isInitialized = true;
    this.logger.info('框架初始化完成', 'Framework');
  }

  /**
   * 启动框架
   */
  public async start(): Promise<void> {
    if (!this.isInitialized) {
      throw new Error('框架未初始化，请先调用 init()');
    }

    if (this.isRunning) {
      this.logger.warn('框架已在运行中', 'Framework');
      return;
    }

    this.logger.info('框架启动中...', 'Framework');

    // 启动服务发现
    const discoveryConfig = this.configManager.getDiscoveryConfig();
    if (discoveryConfig?.enabled) {
      const redisClient = this.databaseManager.getRedisClient();
      if (redisClient) {
        const serverConfig = this.configManager.getServerConfig();
        
        this.serviceDiscovery = new ServiceDiscovery(
          redisClient,
          {
            serviceName: discoveryConfig.serviceName,
            instanceId: this.serverId,
            host: serverConfig.host,
            port: serverConfig.port + this.serverId, // 使用配置中的端口
            heartbeatInterval: discoveryConfig.heartbeatInterval,
            discoveryInterval: discoveryConfig.discoveryInterval,
            instanceTimeout: discoveryConfig.heartbeatInterval * 6,
          },
          this.logger
        );

        this.serviceDiscovery.start();
      } else {
        this.logger.warn('Redis 未连接，跳过服务发现', 'Framework');
      }
    }

    this.isRunning = true;
    this.logger.info('框架启动完成', 'Framework');
  }

  /**
   * 生成实例 ID
   */
  private generateInstanceId(): string {
    const serverConfig = this.configManager.getServerConfig();
    return `${serverConfig.name}-${this.serverId}`
  }

  /**
   * 检查是否已初始化
   */
  public checkInitialized(): boolean {
    return this.isInitialized;
  }

  /**
   * 检查是否在运行
   */
  public checkRunning(): boolean {
    return this.isRunning;
  }

  /**
   * 关闭框架
   */
  public async shutdown(): Promise<void> {
    if (!this.isInitialized) {
      return;
    }

    this.logger.info('框架关闭中...', 'Framework');
    this.isRunning = false;

    // 停止服务发现
    if (this.serviceDiscovery) {
      await this.serviceDiscovery.stop();
      this.serviceDiscovery = null;
    }

    // 关闭网络连接
    await this.networkManager.close();

    // 关闭数据库连接
    await this.databaseManager.close();

    // 关闭日志器
    this.logger.close();

    this.isInitialized = false;
    this.logger.info('框架已关闭', 'Framework');
  }

  // 发送消息
  public async sendMessage(serverType: string, id: number, message: any): Promise<void> {
    let client = this.networkManager.getClient(serverType, id);
    
    // 客户端不存在或连接已断开
    if (!client || !client.isSocketConnected()) {
      // 创建连接
      const serviceInfo = this.serviceDiscovery.getService(serverType, id);
      if (!serviceInfo) {
        this.logger.warn(`服务器实例 ${serverType} : ${id} 不存在`, 'Framework');
        return;
      }

      client = await this.networkManager.createClient(serverType, id, {
        url: `ws://${serviceInfo.host}:${serviceInfo.port}`,
      });
    }

    // 将消息对象序列化为 JSON 字符串
    const messageStr = typeof message === 'string' ? message : JSON.stringify(message);
    const success = client.send(messageStr);
    
    if (!success) {
      this.logger.warn(`发送消息失败：${serverType}:${id}`, 'Framework');
    }
  }
}

/**
 * 获取框架实例的便捷函数
 */
export function getFramework(): Framework {
  return Framework.getInstance();
}
