import WebSocket from 'ws';
import { Session, SessionType, SessionConfig } from '../framework/network/Session';

/**
 * Gate 客户端会话配置接口
 */
export interface GateClientSessionConfig extends Omit<SessionConfig, 'type'> {
    /** Gate 会话 ID */
    gateSessionId?: number;
}

/**
 * 客户端会话类
 * 继承自 Framework 的 Session，负责管理单个客户端的连接状态和玩家信息
 */
export class ClientSession extends Session {
    protected playerId: number = 0;
    protected isLoggedIn: boolean = false;
    protected name: string = '';
    protected gateSessionId: number;

    constructor(ws: WebSocket, config?: GateClientSessionConfig) {
        super(ws, {
            type: SessionType.CLIENT,
            id: config?.gateSessionId,
            serverType: 'gate',
            serverId: config?.serverId,
        });
        
        // 生成唯一的 Gate 会话 ID
        this.gateSessionId = config?.gateSessionId ?? this.getSessionId() as number;
    }

    /**
     * 设置登录状态
     */
    public setLogin(playerId: number, name: string): void {
        this.playerId = playerId;
        this.name = name;
        this.isLoggedIn = true;
    }

    /**
     * 获取玩家 ID
     */
    public getPlayerId(): number {
        return this.playerId;
    }

    /**
     * 获取 Gate 会话 ID
     */
    public getGateSessionId(): number {
        return this.gateSessionId;
    }

    /**
     * 获取玩家名称
     */
    public getName(): string {
        return this.name;
    }

    /**
     * 检查是否已登录
     */
    public isLogin(): boolean {
        return this.isLoggedIn;
    }

    /**
     * 获取连接时长（毫秒）
     */
    public getConnectDuration(): number {
        return Date.now() - this.getConnectTime();
    }

    /**
     * 登出
     */
    public logout(): void {
        this.playerId = 0;
        this.name = '';
        this.isLoggedIn = false;
    }

    /**
     * 获取会话信息（用于日志或调试）
     */
    public getInfo(): string {
        const status = this.isLoggedIn ? `Player(${this.playerId}:${this.name})` : 'Guest';
        return `ClientSession[id=${this.gateSessionId}, ${status}]`;
    }
}
