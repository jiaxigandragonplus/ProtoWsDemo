/**
 * 会话管理器
 * 负责管理服务器之间的连接会话
 * Gate/ClientManager 只管理客户端的连接
 */

import { Session } from './Session';
import { Logger } from '../logger/Logger';
import WebSocket from 'ws';

/**
 * 服务器会话信息接口
 */
export interface ServerSessionInfo {
    /** 服务器类型 (gate/game 等) */
    serverType: string;
    /** 服务器实例 ID */
    serverId: number;
    /** 会话实例 */
    session: Session;
    /** 连接时间戳 */
    connectTime: number;
    /** 最后活跃时间戳 */
    lastActiveTime: number;
}

/**
 * 会话管理器类
 * 单例模式，管理所有服务器之间的 Session 连接
 */
export class SessionManager {
    private static instance: SessionManager;
    
    /** 服务器会话映射：serverType -> serverId -> ServerSessionInfo */
    private sessions: Map<string, Map<number, ServerSessionInfo>> = new Map();
    
    /** 通过 Session ID 查找会话 */
    private sessionById: Map<number | string, ServerSessionInfo> = new Map();

    private sessionMap: Map<WebSocket, ServerSessionInfo> = new Map();
    
    private logger: Logger;

    private constructor() {
        this.logger = new Logger();
    }

    /**
     * 获取单例实例
     */
    public static getInstance(): SessionManager {
        if (!SessionManager.instance) {
            SessionManager.instance = new SessionManager();
        }
        return SessionManager.instance;
    }

    /**
     * 设置日志器
     */
    public setLogger(logger: Logger): void {
        this.logger = logger;
    }

    /**
     * 注册服务器会话
     * @param serverType - 服务器类型 (gate/game 等)
     * @param serverId - 服务器实例 ID
     * @param session - 会话实例
     */
    public registerSession(serverType: string, serverId: number, session: Session): void {
        // 获取或创建服务器类型映射
        let typeMap = this.sessions.get(serverType);
        if (!typeMap) {
            typeMap = new Map();
            this.sessions.set(serverType, typeMap);
        }

        const sessionInfo: ServerSessionInfo = {
            serverType,
            serverId,
            session,
            connectTime: Date.now(),
            lastActiveTime: Date.now(),
        };

        typeMap.set(serverId, sessionInfo);
        this.sessionById.set(session.getSessionId(), sessionInfo);

        this.sessionMap.set(session.getWebSocket(), sessionInfo);

        this.logger.info(
            `注册服务器会话 - serverType: ${serverType}, serverId: ${serverId}, sessionId: ${session.getSessionId()}`,
            'SessionManager'
        );
    }

    /**
     * 移除服务器会话
     * @param serverType - 服务器类型
     * @param serverId - 服务器实例 ID
     */
    public removeSession(serverType: string, serverId: number): void {
        const typeMap = this.sessions.get(serverType);
        if (typeMap) {
            const sessionInfo = typeMap.get(serverId);
            if (sessionInfo) {
                this.sessionById.delete(sessionInfo.session.getSessionId());
                typeMap.delete(serverId);
                
                // 如果该类型下没有会话了，删除类型映射
                if (typeMap.size === 0) {
                    this.sessions.delete(serverType);
                }

                this.logger.info(
                    `移除服务器会话 - serverType: ${serverType}, serverId: ${serverId}`,
                    'SessionManager'
                );
            }
        }
    }

    /**
     * 通过 Session 对象移除会话
     * @param session - 会话实例
     */
    public removeSessionBySession(session: Session): void {
        const sessionInfo = this.sessionById.get(session.getSessionId());
        if (sessionInfo) {
            this.removeSession(sessionInfo.serverType, sessionInfo.serverId);
        }
    }

    /**
     * 获取服务器会话
     * @param serverType - 服务器类型
     * @param serverId - 服务器实例 ID
     */
    public getSession(serverType: string, serverId: number): Session | null {
        const typeMap = this.sessions.get(serverType);
        const sessionInfo = typeMap?.get(serverId);
        return sessionInfo?.session || null;
    }

    public getSessionByWs(ws: WebSocket) : Session | null{
        return this.sessionMap.get(ws).session;
    }

    /**
     * 通过 Session ID 获取会话
     * @param sessionId - 会话 ID
     */
    public getSessionById(sessionId: number | string): Session | null {
        const sessionInfo = this.sessionById.get(sessionId);
        return sessionInfo?.session || null;
    }

    /**
     * 获取服务器会话信息
     * @param serverType - 服务器类型
     * @param serverId - 服务器实例 ID
     */
    public getSessionInfo(serverType: string, serverId: number): ServerSessionInfo | null {
        const typeMap = this.sessions.get(serverType);
        return typeMap?.get(serverId) || null;
    }

    /**
     * 获取指定类型的所有会话
     * @param serverType - 服务器类型
     */
    public getSessionsByType(serverType: string): Map<number, ServerSessionInfo> | null {
        return this.sessions.get(serverType) || null;
    }

    /**
     * 获取所有服务器会话
     * @returns 深拷贝的会话映射
     */
    public getAllSessions(): Map<string, Map<number, ServerSessionInfo>> {
        const result = new Map<string, Map<number, ServerSessionInfo>>();
        for (const [type, typeMap] of this.sessions.entries()) {
            result.set(type, new Map(typeMap));
        }
        return result;
    }

    /**
     * 获取所有会话的 Session 实例
     */
    public getAllSessionInstances(): Session[] {
        const sessions: Session[] = [];
        for (const [, typeMap] of this.sessions.entries()) {
            for (const [, sessionInfo] of typeMap.entries()) {
                sessions.push(sessionInfo.session);
            }
        }
        return sessions;
    }

    /**
     * 更新会话活跃时间
     * @param session - 会话实例
     */
    public updateSessionActiveTime(session: Session): void {
        const sessionInfo = this.sessionById.get(session.getSessionId());
        if (sessionInfo) {
            sessionInfo.lastActiveTime = Date.now();
        }
    }

    /**
     * 获取在线服务器数量
     * @param serverType - 可选的服务器类型，不传则返回所有类型总数
     */
    public getOnlineCount(serverType?: string): number {
        if (serverType) {
            const typeMap = this.sessions.get(serverType);
            return typeMap?.size || 0;
        }
        
        let count = 0;
        for (const [, typeMap] of this.sessions.entries()) {
            count += typeMap.size;
        }
        return count;
    }

    /**
     * 检查是否存在指定服务器的会话
     * @param serverType - 服务器类型
     * @param serverId - 服务器实例 ID
     */
    public hasSession(serverType: string, serverId: number): boolean {
        const typeMap = this.sessions.get(serverType);
        return typeMap?.has(serverId) || false;
    }

    /**
     * 关闭所有会话
     */
    public async closeAll(): Promise<void> {
        const promises: Promise<void>[] = [];
        
        for (const [, typeMap] of this.sessions.entries()) {
            for (const [, sessionInfo] of typeMap.entries()) {
                sessionInfo.session.close();
            }
        }
        
        this.sessions.clear();
        this.sessionById.clear();
        
        this.logger.info('所有服务器会话已关闭', 'SessionManager');
    }
}
