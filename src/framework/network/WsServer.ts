/**
 * WebSocket 服务器封装
 */

import WebSocket, { WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';
import { Logger } from '../logger/Logger';
import { Session, SessionType, SessionConfig } from './Session';

/**
 * WebSocket 服务器配置
 */
export interface WsServerConfig {
  host: string;
  port: number;
  path?: string;
  maxPayload?: number; // 最大消息大小（字节）
  pingInterval?: number; // ping 间隔（毫秒）
  pingTimeout?: number; // ping 超时（毫秒）
}

/**
 * 连接事件数据
 */
export interface ConnectionEvent {
  socket: WebSocket;
  request: IncomingMessage;
  session: Session;
}

/**
 * 消息事件数据
 */
export interface MessageEvent {
  socket: WebSocket;
  data: Buffer;
  session: Session;
}

/**
 * 错误事件数据
 */
export interface ErrorEvent {
  socket?: WebSocket;
  error: Error;
  session?: Session;
}

/**
 * 关闭事件数据
 */
export interface CloseEvent {
  socket: WebSocket;
  code: number;
  reason: Buffer;
  session: Session;
}

/**
 * WebSocket 服务器包装类
 */
export class WsServer {
  private server: WebSocketServer | null = null;
  private config: WsServerConfig;
  private logger: Logger;
  // 使用 Session 管理连接，key 为 sessionId
  private sessions: Map<number | string, Session> = new Map();
  private pingInterval: NodeJS.Timeout | null = null;
  private isRunning: boolean = false;

  constructor(config: WsServerConfig, logger?: Logger) {
    this.config = config;
    this.logger = logger || new Logger();
  }

  /**
   * 启动服务器
   */
  public start(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.server = new WebSocketServer({
          host: this.config.host,
          port: this.config.port,
          path: this.config.path || '/',
          maxPayload: this.config.maxPayload || 1024 * 1024, // 默认 1MB
        });

        this.server.on('listening', () => {
          this.isRunning = true;
          this.logger.info(`WebSocket 服务器启动：ws://${this.config.host}:${this.config.port}`, 'WsServer');
          resolve();
        });

        this.server.on('error', (error) => {
          this.logger.error('WebSocket 服务器错误', error, 'WsServer');
          reject(error);
        });

        this.server.on('connection', (socket, request) => {
          this.handleConnection(socket, request);
        });

        // 启动心跳检测
        this.startHeartbeat();
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * 处理新连接
   * @param socket - WebSocket 实例
   * @param request - HTTP 请求对象
   * @param sessionConfig - 可选的会话配置，如果不传则创建基础 Session
   */
  private handleConnection(socket: WebSocket, request: IncomingMessage, sessionConfig?: SessionConfig): void {
    // 创建 Session 实例
    const config: SessionConfig = sessionConfig ?? {
      type: SessionType.SERVER,
    };
    const session = new Session(socket, config, this.logger);
    
    this.sessions.set(session.getSessionId(), session);
    this.logger.debug(`新连接：${this.getSocketId(socket)}, sessionId=${session.getSessionId()}`, 'WsServer');

    socket.on('pong', () => {
      // 收到 pong，标记为活跃
      (socket as any).isAlive = true;
    });

    socket.on('message', (data: Buffer) => {
      this.emit('message', { socket, data, session });
    });

    socket.on('close', (code: number, reason: Buffer) => {
      this.logger.debug(`连接关闭：${this.getSocketId(socket)}, code=${code}, sessionId=${session.getSessionId()}`, 'WsServer');
      // 从 sessions 中删除
      this.sessions.delete(session.getSessionId());
      this.emit('close', { socket, code, reason, session });
    });

    socket.on('error', (error: Error) => {
      this.logger.error(`连接错误：${this.getSocketId(socket)}, sessionId=${session.getSessionId()}`, error, 'WsServer');
      this.emit('error', { socket, error, session });
    });

    this.emit('connection', { socket, request, session });
  }

  /**
   * 启动心跳检测
   */
  private startHeartbeat(): void {
    const pingInterval = this.config.pingInterval || 30000;
    const pingTimeout = this.config.pingTimeout || 5000;

    this.pingInterval = setInterval(() => {
      if (!this.server) return;

      this.sessions.forEach((session) => {
        const socket = session.getWebSocket();
        if ((socket as any).isAlive === false) {
          // 超时未响应，关闭连接
          this.logger.debug('心跳超时，关闭连接', 'WsServer');
          return socket.terminate();
        }

        // 标记为非活跃，等待 pong
        (socket as any).isAlive = false;
        socket.ping();
      });
    }, pingInterval);
  }

  /**
   * 停止心跳检测
   */
  private stopHeartbeat(): void {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  /**
   * 获取 socket ID
   */
  private getSocketId(socket: WebSocket): string {
    const wsSocket = socket as any;
    return `${wsSocket._socket?.remoteAddress || 'unknown'}:${wsSocket._socket?.remotePort || 'unknown'}`;
  }

  /**
   * 发送消息给指定 Session
   */
  public sendToSession(session: Session, data: Buffer | string): boolean {
    return session.send(data);
  }

  /**
   * 发送消息给指定 WebSocket（兼容旧接口）
   */
  public sendTo(socket: WebSocket, data: Buffer | string): boolean {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(data);
      return true;
    }
    return false;
  }

  /**
   * 广播消息给所有 Session
   */
  public broadcast(data: Buffer | string, exclude?: Session | WebSocket): void {
    this.sessions.forEach((session) => {
      if (exclude instanceof Session) {
        if (session !== exclude && session.isConnected()) {
          session.send(data);
        }
      } else if (exclude instanceof WebSocket) {
        if (session.getWebSocket() !== exclude && session.isConnected()) {
          session.send(data);
        }
      } else {
        if (session.isConnected()) {
          session.send(data);
        }
      }
    });
  }

  /**
   * 获取 Session 数量
   */
  public getSessionCount(): number {
    return this.sessions.size;
  }

  /**
   * 获取所有 Session
   */
  public getSessions(): Map<number | string, Session> {
    return new Map(this.sessions);
  }

  /**
   * 根据 sessionId 获取 Session
   */
  public getSessionById(sessionId: number | string): Session | undefined {
    return this.sessions.get(sessionId);
  }

  /**
   * 根据 WebSocket 获取 Session
   */
  public getSessionBySocket(socket: WebSocket): Session | undefined {
    for (const session of this.sessions.values()) {
      if (session.getWebSocket() === socket) {
        return session;
      }
    }
    return undefined;
  }

  /**
   * 关闭指定 Session
   */
  public closeSession(session: Session, code?: number, reason?: string): void {
    session.close(code, reason);
    this.sessions.delete(session.getSessionId());
  }

  /**
   * 关闭指定客户端（兼容旧接口）
   */
  public closeClient(socket: WebSocket, code?: number, reason?: string): void {
    const session = this.getSessionBySocket(socket);
    if (session) {
      this.closeSession(session, code, reason);
    }
  }

  /**
   * 事件映射
   */
  private eventHandlers: Map<string, Set<Function>> = new Map();

  /**
   * 注册事件监听
   */
  public on(event: 'connection', handler: (data: ConnectionEvent) => void): void;
  public on(event: 'message', handler: (data: MessageEvent) => void): void;
  public on(event: 'close', handler: (data: CloseEvent) => void): void;
  public on(event: 'error', handler: (data: ErrorEvent) => void): void;
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
   * 检查服务器是否运行中
   */
  public isServerRunning(): boolean {
    return this.isRunning;
  }

  /**
   * 关闭服务器
   */
  public stop(): Promise<void> {
    return new Promise((resolve) => {
      this.stopHeartbeat();
      this.isRunning = false;

      // 关闭所有客户端连接
      this.sessions.forEach((session) => {
        session.close(1001, 'Server shutting down');
      });
      this.sessions.clear();

      if (this.server) {
        this.server.close(() => {
          this.server = null;
          this.logger.info('WebSocket 服务器已关闭', 'WsServer');
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}
