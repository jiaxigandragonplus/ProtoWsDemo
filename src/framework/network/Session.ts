/**
 * Session 基类
 * 用于管理 WebSocket 连接会话
 * 服务器之间的连接直接使用 Session，客户端连接使用 ClientSession
 */

import WebSocket from 'ws';
import { Logger } from '../logger/Logger';

/**
 * 会话类型枚举
 */
export enum SessionType {
    /** 服务器间会话 */
    SERVER = 'server',
    /** 客户端会话 */
    CLIENT = 'client',
}

/**
 * 会话配置接口
 */
export interface SessionConfig {
    /** 会话类型 */
    type: SessionType;
    /** 会话 ID */
    id?: number | string;
    /** 服务器类型（gate/game 等） */
    serverType?: string;
    /** 服务器实例 ID */
    serverId?: number;
}

/**
 * Session 基类
 * 负责管理 WebSocket 连接的基本功能
 */
export class Session {
    protected ws: WebSocket;
    protected sessionType: SessionType;
    protected sessionId: number | string;
    protected serverType?: string;
    protected serverId?: number;
    protected connectTime: number;
    protected isActive: boolean = true;
    protected logger: Logger;

    constructor(ws: WebSocket, config: SessionConfig, logger?: Logger) {
        this.ws = ws;
        this.sessionType = config.type;
        this.sessionId = config.id ?? this.generateSessionId();
        this.serverType = config.serverType;
        this.serverId = config.serverId;
        this.connectTime = Date.now();
        this.logger = logger ?? new Logger();
    }

    /**
     * 生成唯一的会话 ID
     */
    protected generateSessionId(): number {
        return Math.floor(Date.now() + Math.random() * 1000000);
    }

    /**
     * 获取会话 ID
     */
    public getSessionId(): number | string {
        return this.sessionId;
    }

    /**
     * 获取会话类型
     */
    public getSessionType(): SessionType {
        return this.sessionType;
    }

    /**
     * 获取服务器类型
     */
    public getServerType(): string | undefined {
        return this.serverType;
    }

    /**
     * 获取服务器实例 ID
     */
    public getServerId(): number | undefined {
        return this.serverId;
    }

    /**
     * 获取连接时长（毫秒）
     */
    public getConnectDuration(): number {
        return Date.now() - this.connectTime;
    }

    /**
     * 获取连接时间戳
     */
    public getConnectTime(): number {
        return this.connectTime;
    }

    /**
     * 检查会话是否活跃
     */
    public getIsActive(): boolean {
        return this.isActive;
    }

    /**
     * 设置会话活跃状态
     */
    public setActive(active: boolean): void {
        this.isActive = active;
    }

    /**
     * 检查 WebSocket 连接是否打开
     */
    public isConnected(): boolean {
        return this.ws.readyState === WebSocket.OPEN;
    }

    /**
     * 发送消息
     * @param data - 要发送的数据
     * @returns 是否发送成功
     */
    public send(data: Uint8Array | Buffer | string): boolean {
        if (this.isConnected()) {
            this.ws.send(data);
            return true;
        }
        this.logger.warn(`Session [${this.sessionId}] 未连接，无法发送消息`, 'Session');
        return false;
    }

    /**
     * 关闭连接
     * @param code - 关闭码
     * @param reason - 关闭原因
     */
    public close(code?: number, reason?: string): void {
        this.isActive = false;
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.close(code, reason);
        }
    }

    /**
     * 获取 WebSocket 实例
     */
    public getWebSocket(): WebSocket {
        return this.ws;
    }

    /**
     * 获取远程地址
     */
    public getRemoteAddress(): string {
        const socket = (this.ws as any)._socket;
        if (socket) {
            return `${socket.remoteAddress || 'unknown'}:${socket.remotePort || 'unknown'}`;
        }
        return 'unknown';
    }
}
