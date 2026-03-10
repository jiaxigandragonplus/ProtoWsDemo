/**
 * 网络管理器
 * 统一管理 WebSocket 服务器和客户端
 * - serverWsServer: 用于服务器之间的连接
 * - clientWsServer: 用于客户端的连接
 */

import { WsServer, WsServerConfig } from './WsServer';
import { WsClient, WsClientConfig } from './WsClient';
import { Logger } from '../logger/Logger';

/**
 * 网络管理器类
 */
export class NetworkManager {
  private static instance: NetworkManager;
  private serverWsServer: WsServer | null = null; // 用于服务器之间的连接
  private clientWsServer: WsServer | null = null; // 用于客户端的连接
  // WebSocket 客户端分类型存，再按服务器 id 存
  private wsClients: Map<string, Map<number, WsClient>> = new Map();
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
   * @param config - 服务器间连接的配置
   * @param clientConfig - 可选的客户端连接配置
   */
  public async createServer(config: WsServerConfig, clientConfig?: WsServerConfig): Promise<void> {
    // 创建服务器间连接的 WsServer
    this.serverWsServer = new WsServer(config, this.logger);
    await this.serverWsServer.start();

    // 创建客户端连接的 WsServer（可选）
    if (clientConfig) {
      this.clientWsServer = new WsServer(clientConfig, this.logger);
      await this.clientWsServer.start();
    }
  }

  /**
   * 获取服务器间连接的 WebSocket 服务器
   */
  public getServerWsServer(): WsServer | null {
    return this.serverWsServer;
  }

  /**
   * 获取客户端连接的 WebSocket 服务器
   */
  public getClientWsServer(): WsServer | null {
    return this.clientWsServer;
  }

  /**
   * 创建 WebSocket 客户端连接
   */
  public async createClient(serverType: string, id: number, config: WsClientConfig): Promise<WsClient> {
    let typeMap = this.wsClients.get(serverType);
    if (!typeMap) {
      typeMap = new Map();
      this.wsClients.set(serverType, typeMap);
    }

    const existing = typeMap.get(id);
    if (existing) {
      this.logger.warn(`客户端 ${serverType}:${id} 已存在，将复用`, 'NetworkManager');
      return existing;
    }

    const client = new WsClient(config, this.logger);
    await client.connect();
    typeMap.set(id, client);
    return client;
  }

  /**
   * 获取 WebSocket 客户端，serverType 为 gate/game 等，id 为服务器 id
   */
  public getClient(serverType: string, id: number): WsClient | null {
    const typeMap = this.wsClients.get(serverType);
    return typeMap?.get(id) || null;
  }

  /**
   * 移除客户端
   */
  public async removeClient(serverType: string, id: number): Promise<void> {
    const typeMap = this.wsClients.get(serverType);
    if (typeMap) {
      const client = typeMap.get(id);
      if (client) {
        await client.close();
        typeMap.delete(id);
        // 如果该类型下没有客户端了，删除类型映射
        if (typeMap.size === 0) {
          this.wsClients.delete(serverType);
        }
      }
    }
  }

  /**
   * 获取所有客户端
   */
  public getAllClients(): Map<string, Map<number, WsClient>> {
    // 返回深拷贝，避免外部修改内部数据
    const result = new Map<string, Map<number, WsClient>>();
    for (const [type, typeMap] of this.wsClients.entries()) {
      result.set(type, new Map(typeMap));
    }
    return result;
  }

  /**
   * 获取指定类型的所有客户端
   */
  public getClientsByType(serverType: string): Map<number, WsClient> | null {
    return this.wsClients.get(serverType) || null;
  }

  /**
   * 关闭所有连接
   */
  public async close(): Promise<void> {
    const promises: Promise<void>[] = [];

    // 关闭服务器间连接的服务器
    if (this.serverWsServer) {
      promises.push(this.serverWsServer.stop());
      this.serverWsServer = null;
    }

    // 关闭客户端连接的服务器
    if (this.clientWsServer) {
      promises.push(this.clientWsServer.stop());
      this.clientWsServer = null;
    }

    // 关闭所有客户端
    for (const [type, typeMap] of this.wsClients.entries()) {
      for (const [id, client] of typeMap.entries()) {
        promises.push(client.close());
      }
    }
    this.wsClients.clear();

    await Promise.all(promises);
    this.logger.info('所有网络连接已关闭', 'NetworkManager');
  }
}
