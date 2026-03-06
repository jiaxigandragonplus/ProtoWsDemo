import { ClientSession } from './ClientSession';
import WebSocket from 'ws';

/**
 * 客户端管理器
 * 管理 Gate 会话与客户端会话的映射关系
 */
export class ClientManager {
    private static sessions = new Map<WebSocket, ClientSession>();
    private static gateSessionIdMap = new Map<number, ClientSession>(); // gateSessionId -> ClientSession

    /**
     * 注册会话
     */
    static registerSession(ws: WebSocket, session: ClientSession): void {
        this.sessions.set(ws, session);
        this.gateSessionIdMap.set(session.getGateSessionId(), session);
        console.log(`[ClientManager] 会话已注册 - GateSessionId: ${session.getGateSessionId()}`);
    }

    /**
     * 移除会话
     */
    static removeSession(ws: WebSocket): void {
        const session = this.sessions.get(ws);
        if (session) {
            this.gateSessionIdMap.delete(session.getGateSessionId());
            this.sessions.delete(ws);
        }
    }

    /**
     * 获取会话
     */
    static getSession(ws: WebSocket): ClientSession | null {
        return this.sessions.get(ws) || null;
    }

    /**
     * 通过 Gate 会话 ID 获取会话
     */
    static getSessionByGateId(gateSessionId: number): ClientSession | null {
        console.log(`[ClientManager] 查找会话 - GateSessionId: ${gateSessionId}, Map 大小：${this.gateSessionIdMap.size}`);
        console.log(`[ClientManager] Map 中的所有键：${Array.from(this.gateSessionIdMap.keys()).join(', ')}`);
        const session = this.gateSessionIdMap.get(gateSessionId);
        console.log(`[ClientManager] 查找结果：${session ? '找到' : '未找到'}`);
        return session || null;
    }

    /**
     * 获取所有会话
     */
    static getAllSessions(): Map<WebSocket, ClientSession> {
        return new Map(this.sessions);
    }

    /**
     * 获取在线玩家数量
     */
    static getOnlineCount(): number {
        return this.sessions.size;
    }
}
