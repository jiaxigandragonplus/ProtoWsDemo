/**
 * WebSocket 客户端封装
 */

import WebSocket from 'ws';
import { Logger } from '../logger/Logger';

/**
 * WebSocket 客户端配置
 */
export interface WsClientConfig {
  url: string;
  protocols?: string | string[];
  reconnectInterval?: number; // 重连间隔（毫秒）
  maxReconnectAttempts?: number; // 最大重连次数
  pingInterval?: number; // ping 间隔（毫秒）
  maxPayload?: number; // 最大消息大小（字节）
}

/**
 * WebSocket 客户端包装类
 */
export class WsClient {
  private socket: WebSocket | null = null;
  private config: WsClientConfig;
  private logger: Logger;
  private reconnectAttempts: number = 0;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private pingTimer: NodeJS.Timeout | null = null;
  private isConnecting: boolean = false;
  private shouldReconnect: boolean = true;
  private isConnected: boolean = false;

  constructor(config: WsClientConfig, logger?: Logger) {
    this.config = config;
    this.logger = logger || new Logger();
  }

  /**
   * 连接到服务器
   */
  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isConnecting || this.isConnected) {
        this.logger.debug('客户端已在连接中', 'WsClient');
        resolve();
        return;
      }

      this.isConnecting = true;
      this.shouldReconnect = true;

      try {
        this.socket = new WebSocket(this.config.url, this.config.protocols, {
          maxPayload: this.config.maxPayload || 1024 * 1024,
        });

        this.socket.on('open', () => {
          this.isConnecting = false;
          this.isConnected = true;
          this.reconnectAttempts = 0;
          this.logger.info(`WebSocket 已连接：${this.config.url}`, 'WsClient');
          this.emit('open');
          this.startPing();
          resolve();
        });

        this.socket.on('message', (data: Buffer) => {
          this.emit('message', data);
        });

        this.socket.on('close', (code: number, reason: Buffer) => {
          this.isConnecting = false;
          this.isConnected = false;
          this.stopPing();
          this.logger.info(`WebSocket 连接关闭：code=${code}`, 'WsClient');
          this.emit('close', { code, reason });

          if (this.shouldReconnect) {
            this.scheduleReconnect();
          }
        });

        this.socket.on('error', (error: Error) => {
          this.isConnecting = false;
          this.logger.error('WebSocket 错误', error, 'WsClient');
          this.emit('error', error);
          reject(error);
        });
      } catch (error) {
        this.isConnecting = false;
        reject(error);
      }
    });
  }

  /**
   * 安排重连
   */
  private scheduleReconnect(): void {
    const maxAttempts = this.config.maxReconnectAttempts || 10;
    
    if (this.reconnectAttempts >= maxAttempts) {
    this.logger.error('达到最大重连次数，停止重连', new Error('Max reconnect attempts reached'), 'WsClient');
    this.emit('maxReconnectExceeded', { attempts: this.reconnectAttempts });
    return;
  }

    this.reconnectAttempts++;
    const delay = this.config.reconnectInterval || 3000;

    this.logger.info(`计划重连 (${this.reconnectAttempts}/${maxAttempts})，${delay}ms 后`, 'WsClient');

    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect().catch((err) => {
        this.logger.error('重连失败', err as Error, 'WsClient');
      });
    }, delay);
  }

  /**
   * 启动心跳
   */
  private startPing(): void {
    const pingInterval = this.config.pingInterval || 30000;

    this.pingTimer = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.ping();
      }
    }, pingInterval);
  }

  /**
   * 停止心跳
   */
  private stopPing(): void {
    if (this.pingTimer) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
  }

  /**
   * 发送消息
   */
  public send(data: Buffer | string): boolean {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
      return true;
    }
    this.logger.warn('WebSocket 未连接，无法发送消息', 'WsClient');
    return false;
  }

  /**
   * 检查连接状态
   */
  public isSocketConnected(): boolean {
    return this.isConnected && this.socket?.readyState === WebSocket.OPEN;
  }

  /**
   * 获取 WebSocket 实例
   */
  public getSocket(): WebSocket | null {
    return this.socket;
  }

  /**
   * 事件映射
   */
  private eventHandlers: Map<string, Set<Function>> = new Map();

  /**
   * 注册事件监听
   */
  public on(event: 'open', handler: () => void): void;
  public on(event: 'message', handler: (data: Buffer) => void): void;
  public on(event: 'close', handler: (data: { code: number; reason: Buffer }) => void): void;
  public on(event: 'error', handler: (error: Error) => void): void;
  public on(event: 'maxReconnectExceeded', handler: (data: { attempts: number }) => void): void;
  public on(event: string, handler: Function): void {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, new Set());
    }
    this.eventHandlers.get(event)!.add(handler);
  }

  /**
   * 移除事件监听
   */
  public off(event: string, handler: Function): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  /**
   * 触发事件
   */
  private emit(event: string, data?: any): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach((handler) => handler(data));
    }
  }

  /**
   * 停止重连
   */
  public stopReconnecting(): void {
    this.shouldReconnect = false;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  /**
   * 关闭连接
   */
  public close(code?: number, reason?: string): Promise<void> {
    return new Promise((resolve) => {
      this.shouldReconnect = false;
      this.stopReconnecting();
      this.stopPing();

      if (this.socket) {
        this.socket.close(code || 1000, reason);
        this.socket.on('close', () => {
          this.socket = null;
          this.isConnected = false;
          this.logger.info('WebSocket 客户端已关闭', 'WsClient');
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}
