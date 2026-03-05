import * as protobuf from 'protobufjs';
import { SessionManager } from './SessionManager';
import { ProtoLoader } from './ProtoLoader';
import WebSocket from 'ws';
import { NetworkManager } from '../framework/network/NetworkManager';

/**
 * 消息 ID 定义（Gate-Game 内部通信，保留用于向后兼容）
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
    /**
     * 处理来自 Gate 的消息
     * 使用 PBPackage 格式解析，然后根据 message_type 路由
     */
    static handleMessage(data: Uint8Array, networkManager: NetworkManager): void {
        try {
            // 使用 PBPackage 解析
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.decode(data) as any;
            
            const messageType = pbPackage.message_type as string;
            const messagePayload = new Uint8Array(pbPackage.message_payload as ArrayBuffer);
            
            console.log(`[GameMessageHandler] 收到消息 - messageType: ${messageType}`);
            
            // 根据 messageType 路由
            if (messageType === 'GateToGame') {
                this.handleGateToGame(messagePayload, networkManager);
            } else {
                console.warn(`[GameMessageHandler] 未知消息类型：${messageType}`);
            }
        } catch (error) {
            console.error('[GameMessageHandler] 处理消息时出错:', error);
        }
    }

    /**
     * 处理 GateToGame 消息
     * 解析 WebsocketMessage 然后根据 message_type 路由到具体处理器
     */
    private static handleGateToGame(data: Uint8Array, networkManager: NetworkManager): void {
        try {
            // 解析 GateToGame 消息
            const gateToGameType = ProtoLoader.GateToGame;
            const gateToGame = gateToGameType.decode(data) as any;
            
            const sessionId = gateToGame.sessionId as number;
            const payload = new Uint8Array(gateToGame.payload as ArrayBuffer);
            const messageType = gateToGame.message_type as string || '';
            
            console.log(`[GameMessageHandler] GateToGame - SessionId: ${sessionId}, MessageType: ${messageType}`);
            
            // 使用 PBPackage 再次解析 payload 获取 WebsocketMessage
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.decode(payload) as any;
            
            const wsMessagePayload = new Uint8Array(pbPackage.message_payload as ArrayBuffer);
            
            // 解析 WebsocketMessage
            const wsMessageType = ProtoLoader.WebsocketMessage;
            const wsMessage = wsMessageType.decode(wsMessagePayload) as any;
            
            const uri = wsMessage.uri as string;
            const innerMessageType = wsMessage.message_type as string;
            const messagePayload = new Uint8Array(wsMessage.message_payload as ArrayBuffer);
            
            console.log(`[GameMessageHandler] WebsocketMessage - uri: ${uri}, messageType: ${innerMessageType}`);
            
            // 根据 message_type 路由到具体的业务处理器
            switch (innerMessageType) {
                case 'CLogin':
                    this.handleLogin(sessionId, messagePayload, networkManager);
                    break;
                case 'CEcho':
                    this.handleEcho(sessionId, messagePayload, networkManager);
                    break;
                default:
                    console.warn(`[GameMessageHandler] 未处理的业务消息类型：${innerMessageType}`);
            }
        } catch (error) {
            console.error('[GameMessageHandler] 处理 GateToGame 消息时出错:', error);
        }
    }

    /**
     * 处理登录请求
     */
    private static handleLogin(gateSessionId: number, data: Uint8Array, networkManager: NetworkManager): void {
        try {
            const cLoginType = ProtoLoader.CLogin;
            const loginRequest = cLoginType.decode(data) as any;
            
            console.log(`[GameMessageHandler] 处理登录 - Name: ${loginRequest.name}, Password: ${loginRequest.password}`);

            // 简单的登录验证
            if (loginRequest.name && loginRequest.password) {
                // 创建会话
                const sessionInfo = SessionManager.createSession(gateSessionId, loginRequest.name);
                
                // 发送登录响应（使用 WebsocketMessage 格式）
                this.sendWebsocketToGate(gateSessionId, 'SLogin', '/game/game/login', { playerId: sessionInfo.playerId }, networkManager);
                
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
    private static handleEcho(gateSessionId: number, data: Uint8Array, networkManager: NetworkManager): void {
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

            // 发送回显响应（使用 WebsocketMessage 格式）
            this.sendWebsocketToGate(gateSessionId, 'SEcho', '/game/game/echo', { msg: echoRequest.msg }, networkManager);
            
            console.log(`[GameMessageHandler] 回显响应已发送 - PlayerId: ${session.playerId}`);
        } catch (error) {
            console.error('[GameMessageHandler] 处理回显请求时出错:', error);
        }
    }

    /**
     * 发送 WebsocketMessage 到 Gate
     */
    private static sendWebsocketToGate(
        gateSessionId: number, 
        messageType: string,
        uri: string,
        data: Record<string, any>, 
        networkManager: NetworkManager
    ): void {
        // 获取 WebSocket 服务器
        const wsServer = networkManager.getServer();
        if (!wsServer) {
            console.error('[GameMessageHandler] WebSocket 服务器不可用');
            return;
        }

        // 获取第一个连接的 Gate 客户端
        const clients = wsServer.getClients();
        const gateClient = clients.values().next().value;
        if (!gateClient || gateClient.readyState !== WebSocket.OPEN) {
            console.error('[GameMessageHandler] Gate 连接不可用');
            return;
        }

        try {
            // 获取 proto 类型并编码消息
            const protoType = ProtoLoader.getType(messageType);
            const message = protoType.create(data);
            const encoded = protoType.encode(message).finish();

            // 创建 WebsocketMessage
            const wsMessageType = ProtoLoader.WebsocketMessage;
            const wsMessage = wsMessageType.create({
                uri: uri,
                method: 'POST',
                message_type: messageType,
                message_payload: encoded,
                uuid: '',
                errno: 0,
                errmsg: ''
            });
            const wsEncoded = wsMessageType.encode(wsMessage).finish();

            // 用 PBPackage 包装 WebsocketMessage
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.create({
                message_type: messageType,
                message_payload: wsEncoded
            });
            const pbEncoded = pbPackageType.encode(pbPackage).finish();

            // 创建 GameToGate 消息
            const gameToGateType = ProtoLoader.GameToGate;
            const gameToGate = gameToGateType.create({
                sessionId: gateSessionId,
                messageId: 0, // 不再使用
                payload: pbEncoded,
                message_type: messageType
            });
            const gameToGateEncoded = gameToGateType.encode(gameToGate).finish();

            // 用 PBPackage 包装 GameToGate 消息
            const outerPbPackage = pbPackageType.create({
                message_type: 'GameToGate',
                message_payload: gameToGateEncoded
            });
            const outerEncoded = pbPackageType.encode(outerPbPackage).finish();

            gateClient.send(outerEncoded);
        } catch (error) {
            console.error('[GameMessageHandler] 发送消息到 Gate 时出错:', error);
        }
    }
}
