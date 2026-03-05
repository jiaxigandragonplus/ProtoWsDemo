/**
 * 网络管理器
 * 统一管理 WebSocket 服务器和客户端
 */

import { WsServer, WsServerConfig } from './WsServer';
import { WsClient, WsClientConfig } from './WsClient';
import { Logger } from '../logger/Logger';

/**
 * 网络管理器类
 */
export class NetworkManager {
  private static instance: NetworkManager;
  private wsServer: WsServer | null = null;
  private wsClients: Map<string, WsClient> = new Map();
  private logger: Logger;

  private constructor() {
    this.logger = new Logger();
  }

  /**
   * 获取单例实例
   */
  public static getInstance(): NetworkManager {
    if (!NetworkManager.instance) {
      NetworkManager.instance = new NetworkManager();
    }
    return NetworkManager.instance;
  }

  /**
   * 设置日志器
   */
  public setLogger(logger: Logger): void {
    this.logger = logger;
  }

  /**
   * 创建并启动 WebSocket 服务器
   */
  public async createServer(config: WsServerConfig): Promise<WsServer> {
    if (this.wsServer) {
      this.logger.warn('已存在 WebSocket 服务器，将复用', 'NetworkManager');
    }

    this.wsServer = new WsServer(config, this.logger);
    await this.wsServer.start();
    return this.wsServer;
  }

  /**
   * 获取 WebSocket 服务器
   */
  public getServer(): WsServer | null {
    return this.wsServer;
  }

  /**
   * 创建 WebSocket 客户端连接
   */
  public async createClient(id: string, config: WsClientConfig): Promise<WsClient> {
    const existing = this.wsClients.get(id);
    if (existing) {
      this.logger.warn(`客户端 ${id} 已存在，将复用`, 'NetworkManager');
      return existing;
    }

    const client = new WsClient(config, this.logger);
    await client.connect();
    this.wsClients.set(id, client);
    return client;
  }

  /**
   * 获取 WebSocket 客户端
   */
  public getClient(id: string): WsClient | null {
    return this.wsClients.get(id) || null;
  }

  /**
   * 移除客户端
   */
  public async removeClient(id: string): Promise<void> {
    const client = this.wsClients.get(id);
    if (client) {
      await client.close();
      this.wsClients.delete(id);
    }
  }

  /**
   * 获取所有客户端
   */
  public getAllClients(): Map<string, WsClient> {
    return new Map(this.wsClients);
  }

  /**
   * 关闭所有连接
   */
  public async close(): Promise<void> {
    const promises: Promise<void>[] = [];

    // 关闭服务器
    if (this.wsServer) {
      promises.push(this.wsServer.stop());
      this.wsServer = null;
    }

    // 关闭所有客户端
    for (const [id, client] of this.wsClients.entries()) {
      promises.push(client.close());
    }
    this.wsClients.clear();

    await Promise.all(promises);
    this.logger.info('所有网络连接已关闭', 'NetworkManager');
  }
}
