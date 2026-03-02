import * as protobuf from 'protobufjs';
import { SessionManager } from './SessionManager';
import { ProtoLoader } from './ProtoLoader';
import WebSocket, { WebSocketServer } from 'ws';

/**
 * 消息 ID 定义（Gate-Game 内部通信）
 */
export enum GameMessageId {
    GateToGame = 101,  // Gate 发送给 Game 的消息
    GameToGate = 102   // Game 发送给 Gate 的消息
}

/**
 * Game 消息处理器
 * 负责处理从 Gate 转发过来的业务逻辑
 */
export class GameMessageHandler {
    private static gateWs: WebSocket | null = null;

    /**
     * 处理来自 Gate 的消息
     */
    static handleMessage(data: Uint8Array, wss: WebSocketServer): void {
        const reader = new Uint8Array(data);
        
        // 读取消息 ID（第一个字节是消息 ID）
        const messageId = reader[0];
        
        // 读取消息体
        const messageBody = data.slice(1);

        console.log(`[GameMessageHandler] 收到消息 - MessageId: ${messageId}`);

        // 根据消息 ID 路由到不同的处理器
        switch (messageId) {
            case GameMessageId.GateToGame:
                this.handleGateToGame(messageBody, wss);
                break;
            default:
                console.warn(`[GameMessageHandler] 未知消息 ID: ${messageId}`);
        }
    }

    /**
     * 处理 GateToGame 消息
     */
    private static handleGateToGame(data: Uint8Array, wss: WebSocketServer): void {
        try {
            const gateToGameType = ProtoLoader.GateToGame;
            const gateToGame = gateToGameType.decode(data) as any;
            
            const sessionId = gateToGame.sessionId as number;
            const messageId = gateToGame.messageId as number;
            const payload = new Uint8Array(gateToGame.payload as ArrayBuffer);

            console.log(`[GameMessageHandler] GateToGame - SessionId: ${sessionId}, MessageId: ${messageId}`);

            // 根据内部消息 ID 路由到具体的业务处理器
            switch (messageId) {
                case 1: // CLogin
                    this.handleLogin(sessionId, payload, wss);
                    break;
                case 3: // CEcho
                    this.handleEcho(sessionId, payload, wss);
                    break;
                default:
                    console.warn(`[GameMessageHandler] 未处理的业务消息 ID: ${messageId}`);
            }
        } catch (error) {
            console.error('[GameMessageHandler] 处理 GateToGame 消息时出错:', error);
        }
    }

    /**
     * 处理登录请求
     */
    private static handleLogin(gateSessionId: number, data: Uint8Array, wss: WebSocketServer): void {
        try {
            const cLoginType = ProtoLoader.CLogin;
            const loginRequest = cLoginType.decode(data) as any;
            
            console.log(`[GameMessageHandler] 处理登录 - Name: ${loginRequest.name}, Password: ${loginRequest.password}`);

            // 简单的登录验证
            if (loginRequest.name && loginRequest.password) {
                // 创建会话
                const sessionInfo = SessionManager.createSession(gateSessionId, loginRequest.name);
                
                // 发送登录响应
                this.sendToGate(gateSessionId, 2, { playerId: sessionInfo.playerId }, 'SLogin', wss);
                
                console.log(`[GameMessageHandler] 登录成功 - PlayerId: ${sessionInfo.playerId}`);
            } else {
                console.warn('[GameMessageHandler] 登录失败 - 用户名或密码为空');
            }
        } catch (error) {
            console.error('[GameMessageHandler] 处理登录请求时出错:', error);
        }
    }

    /**
     * 处理回显请求
     */
    private static handleEcho(gateSessionId: number, data: Uint8Array, wss: WebSocketServer): void {
        try {
            // 检查会话是否存在
            const session = SessionManager.getSessionByGateId(gateSessionId);
            if (!session) {
                console.warn('[GameMessageHandler] 未找到会话，无法处理回显请求');
                return;
            }

            const cEchoType = ProtoLoader.CEcho;
            const echoRequest = cEchoType.decode(data) as any;
            
            console.log(`[GameMessageHandler] 处理回显 - PlayerId: ${session.playerId}, Msg: ${echoRequest.msg}`);

            // 发送回显响应
            this.sendToGate(gateSessionId, 4, { msg: echoRequest.msg }, 'SEcho', wss);
            
            console.log(`[GameMessageHandler] 回显响应已发送 - PlayerId: ${session.playerId}`);
        } catch (error) {
            console.error('[GameMessageHandler] 处理回显请求时出错:', error);
        }
    }

    /**
     * 发送消息到 Gate
     */
    private static sendToGate(
        gateSessionId: number, 
        messageId: number, 
        data: Record<string, any>, 
        protoTypeName: string,
        wss: WebSocketServer
    ): void {
        // 获取第一个连接的 Gate
        const gateClient = wss.clients.values().next().value;
        if (!gateClient || gateClient.readyState !== WebSocket.OPEN) {
            console.error('[GameMessageHandler] Gate 连接不可用');
            return;
        }

        try {
            const protoType = ProtoLoader.getType(protoTypeName);
            const message = protoType.create(data);
            const encoded = protoType.encode(message).finish();

            // 构建 GameToGate 消息
            const gameToGateType = ProtoLoader.GameToGate;
            const gameToGate = gameToGateType.create({
                sessionId: gateSessionId,
                messageId: messageId,
                payload: encoded
            });
            const gameToGateEncoded = gameToGateType.encode(gameToGate).finish();

            // 发送：消息 ID + 数据
            const response = new Uint8Array(1 + gameToGateEncoded.length);
            response[0] = GameMessageId.GameToGate;
            response.set(gameToGateEncoded, 1);

            gateClient.send(response);
        } catch (error) {
            console.error('[GameMessageHandler] 发送消息到 Gate 时出错:', error);
        }
    }
}
