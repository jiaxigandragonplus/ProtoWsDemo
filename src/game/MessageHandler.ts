import * as protobuf from 'protobufjs';
import { SessionManager } from './SessionManager';
import { ProtoLoader } from '../framework/network/ProtoLoader';
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
                //this.handleGateToGame(messagePayload, networkManager);
            } else {
                console.warn(`[GameMessageHandler] 未知消息类型：${messageType}`);
            }
        } catch (error) {
            console.error('[GameMessageHandler] 处理消息时出错:', error);
        }
    }

    /**
     * 处理登录请求
     */
    private static handleLogin(gateSessionId: number, data: Uint8Array, networkManager: NetworkManager): void {
        try {
            const cLoginType = ProtoLoader.getType('CLogin');
            const loginRequest = cLoginType.decode(data) as any;
            
            console.log(`[GameMessageHandler] 处理登录 - Name: ${loginRequest.name}, Password: ${loginRequest.password}`);

            // 简单的登录验证
            if (loginRequest.name && loginRequest.password) {
                // 创建会话
                const sessionInfo = SessionManager.createSession(gateSessionId, loginRequest.name);
                
                // 发送登录响应（使用 WebsocketMessage 格式）
                // this.sendWebsocketToGate(gateSessionId, 'SLogin', '/game/game/login', { playerId: sessionInfo.playerId }, networkManager);
                
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

            const cEchoType = ProtoLoader.getType('CEcho');
            const echoRequest = cEchoType.decode(data) as any;
            
            console.log(`[GameMessageHandler] 处理回显 - PlayerId: ${session.playerId}, Msg: ${echoRequest.msg}`);

            // 发送回显响应（使用 WebsocketMessage 格式）
            // this.sendWebsocketToGate(gateSessionId, 'SEcho', '/game/game/echo', { msg: echoRequest.msg }, networkManager);
            
            console.log(`[GameMessageHandler] 回显响应已发送 - PlayerId: ${session.playerId}`);
        } catch (error) {
            console.error('[GameMessageHandler] 处理回显请求时出错:', error);
        }
    }
}
