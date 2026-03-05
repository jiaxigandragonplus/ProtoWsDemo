/**
 * 配置管理模块
 * 负责读取和解析 JSON 配置文件
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * 配置接口定义
 */
export interface ServerConfig {
  name: string;
  host: string;
  port: number;
}

export interface DatabaseConfig {
  mongo: {
    uri: string;
    options?: Record<string, any>;
  };
  redis: {
    host: string;
    port: number;
    password?: string;
    db?: number;
  };
}

export interface LoggerConfig {
  level: string;
  console: boolean;
  file: {
    enabled: boolean;
    path: string;
    maxSize: number; // 单个文件最大大小 (字节)
    maxFiles: number; // 最大保留的文件数
  };
}

export interface DiscoveryConfig {
  enabled: boolean;
  serviceName: string;
  heartbeatInterval: number; // 心跳间隔 (毫秒)
  discoveryInterval: number; // 服务发现轮询间隔 (毫秒)
}

export interface AppConfig {
  server: ServerConfig;
  database: DatabaseConfig;
  logger: LoggerConfig;
  discovery: DiscoveryConfig;
  [key: string]: any;
}

/**
 * 配置管理器类
 */
export class ConfigManager {
  private static instance: ConfigManager;
  private config: AppConfig;
  private configPath: string;

  private constructor() {
    this.config = {} as AppConfig;
    this.configPath = '';
  }

  /**
   * 获取单例实例
   */
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  /**
   * 加载配置文件
   * @param configPath 配置文件路径
   */
  public load(configPath: string): void {
    this.configPath = configPath;
    const absolutePath = path.resolve(configPath);
    
    if (!fs.existsSync(absolutePath)) {
      throw new Error(`配置文件不存在：${absolutePath}`);
    }

    const content = fs.readFileSync(absolutePath, 'utf-8');
    this.config = JSON.parse(content);
  }

  /**
   * 从对象加载配置
   * @param config 配置对象
   */
  public loadFromObject(config: AppConfig): void {
    this.config = config;
  }

  /**
   * 获取配置值
   * @param key 配置键，支持点号分隔，如 'server.host'
   * @param defaultValue 默认值
   */
  public get<T = any>(key: string, defaultValue?: T): T {
    const keys = key.split('.');
    let value: any = this.config;

    for (const k of keys) {
      if (value === undefined || value === null) {
        return defaultValue as T;
      }
      value = value[k];
    }

    return value !== undefined ? value : (defaultValue as T);
  }

  /**
   * 获取服务器配置
   */
  public getServerConfig(): ServerConfig {
    return this.config.server;
  }

  /**
   * 获取数据库配置
   */
  public getDatabaseConfig(): DatabaseConfig {
    return this.config.database;
  }

  /**
   * 获取日志配置
   */
  public getLoggerConfig(): LoggerConfig {
    return this.config.logger;
  }

  /**
   * 获取服务发现配置
   */
  public getDiscoveryConfig(): DiscoveryConfig {
    return this.config.discovery;
  }

  /**
   * 获取完整配置对象
   */
  public getAllConfig(): AppConfig {
    return { ...this.config };
  }

  /**
   * 重新加载配置
   */
  public reload(): void {
    if (this.configPath) {
      this.load(this.configPath);
    }
  }
}
