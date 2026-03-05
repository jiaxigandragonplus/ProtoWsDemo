/**
 * 数据库管理器
 * 统一管理 MongoDB 和 Redis 连接
 */

import { MongoClient, MongoConfig } from './MongoClient';
import { RedisClient, RedisConfig } from './RedisClient';
import { Logger } from '../logger/Logger';

/**
 * 数据库配置接口
 */
export interface DatabaseConfig {
  mongo: MongoConfig;
  redis: RedisConfig;
}

/**
 * 数据库管理器类
 */
export class DatabaseManager {
  private static instance: DatabaseManager;
  private mongoClient: MongoClient | null = null;
  private redisClient: RedisClient | null = null;
  private logger: Logger;

  private constructor() {
    this.logger = new Logger();
  }

  /**
   * 获取单例实例
   */
  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  /**
   * 设置日志器
   */
  public setLogger(logger: Logger): void {
    this.logger = logger;
  }

  /**
   * 初始化数据库连接
   */
  public async init(config: DatabaseConfig): Promise<void> {
    // 初始化 MongoDB
    if (config.mongo?.uri) {
      this.mongoClient = new MongoClient(config.mongo, this.logger);
      await this.mongoClient.connect();
    }

    // 初始化 Redis
    if (config.redis?.host) {
      this.redisClient = new RedisClient(config.redis, this.logger);
      await this.redisClient.connect();
    }
  }

  /**
   * 获取 MongoDB 客户端
   */
  public getMongoClient(): MongoClient | null {
    return this.mongoClient;
  }

  /**
   * 获取 Redis 客户端
   */
  public getRedisClient(): RedisClient | null {
    return this.redisClient;
  }

  /**
   * 检查 MongoDB 连接状态
   */
  public isMongoConnected(): boolean {
    return this.mongoClient?.isConnected() || false;
  }

  /**
   * 检查 Redis 连接状态
   */
  public isRedisConnected(): boolean {
    return this.redisClient?.isConnected() || false;
  }

  /**
   * 关闭所有数据库连接
   */
  public async close(): Promise<void> {
    const promises: Promise<void>[] = [];

    if (this.mongoClient) {
      promises.push(this.mongoClient.close());
    }

    if (this.redisClient) {
      promises.push(this.redisClient.close());
    }

    await Promise.all(promises);
    this.logger.info('所有数据库连接已关闭', 'DatabaseManager');
  }
}
