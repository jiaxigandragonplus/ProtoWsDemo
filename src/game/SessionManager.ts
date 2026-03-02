/**
 * 会话信息接口
 */
export interface SessionInfo {
    playerId: number;
    name: string;
    gateSessionId: number;
    loginTime: number;
}

/**
 * 会话管理器
 * 管理 Gate 会话 ID 与玩家信息的映射关系
 */
export class SessionManager {
    private static sessions = new Map<number, SessionInfo>();
    private static playerIdCounter: number = 10000;

    /**
     * 创建会话
     */
    static createSession(gateSessionId: number, name: string): SessionInfo {
        const playerId = this.playerIdCounter++;
        const sessionInfo: SessionInfo = {
            playerId,
            name,
            gateSessionId,
            loginTime: Date.now()
        };
        
        this.sessions.set(playerId, sessionInfo);
        console.log(`[SessionManager] 创建会话 - PlayerId: ${playerId}, Name: ${name}, GateSessionId: ${gateSessionId}`);
        
        return sessionInfo;
    }

    /**
     * 获取会话信息
     */
    static getSession(playerId: number): SessionInfo | null {
        return this.sessions.get(playerId) || null;
    }

    /**
     * 通过 Gate 会话 ID 获取会话
     */
    static getSessionByGateId(gateSessionId: number): SessionInfo | null {
        for (const session of this.sessions.values()) {
            if (session.gateSessionId === gateSessionId) {
                return session;
            }
        }
        return null;
    }

    /**
     * 移除会话
     */
    static removeSession(playerId: number): void {
        const session = this.sessions.get(playerId);
        if (session) {
            console.log(`[SessionManager] 移除会话 - PlayerId: ${playerId}, Name: ${session.name}`);
            this.sessions.delete(playerId);
        }
    }

    /**
     * 获取在线玩家数量
     */
    static getOnlineCount(): number {
        return this.sessions.size;
    }

    /**
     * 获取所有会话
     */
    static getAllSessions(): Map<number, SessionInfo> {
        return new Map(this.sessions);
    }
}
