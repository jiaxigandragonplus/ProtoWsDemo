import WebSocket from 'ws';

/**
 * 客户端会话类
 * 负责管理单个客户端的连接状态和玩家信息
 */
export class ClientSession {
    private ws: WebSocket;
    private playerId: number = 0;
    private isLoggedIn: boolean = false;
    private name: string = '';
    private connectTime: number;
    private gateSessionId: number;

    constructor(ws: WebSocket) {
        this.ws = ws;
        this.connectTime = Date.now();
        // 生成唯一的 Gate 会话 ID
        this.gateSessionId = this.generateSessionId();
    }

    /**
     * 生成唯一的会话 ID
     */
    private generateSessionId(): number {
        return Math.floor(Date.now() + Math.random() * 1000000);
    }

    /**
     * 设置登录状态
     */
    setLogin(playerId: number, name: string): void {
        this.playerId = playerId;
        this.name = name;
        this.isLoggedIn = true;
    }

    /**
     * 获取玩家 ID
     */
    getPlayerId(): number {
        return this.playerId;
    }

    /**
     * 获取 Gate 会话 ID
     */
    getGateSessionId(): number {
        return this.gateSessionId;
    }

    /**
     * 获取玩家名称
     */
    getName(): string {
        return this.name;
    }

    /**
     * 检查是否已登录
     */
    isLogin(): boolean {
        return this.isLoggedIn;
    }

    /**
     * 获取连接时长（毫秒）
     */
    getConnectDuration(): number {
        return Date.now() - this.connectTime;
    }

    /**
     * 发送消息给客户端
     */
    send(data: Uint8Array): void {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(data);
        }
    }

    /**
     * 关闭连接
     */
    close(): void {
        this.ws.close();
    }

    /**
     * 获取 WebSocket 实例
     */
    getWebSocket(): WebSocket {
        return this.ws;
    }
}
