import { ClientSession } from './ClientSession';
import { ProtoLoader } from '../framework/network/ProtoLoader';
import { MessageRegistry } from './MessageRegistry';
import * as protobuf from 'protobufjs';
import { ClientManager } from './ClientManager';
import WebSocket from 'ws';

/**
 * 消息 ID 定义（保留用于向后兼容）
 */
export enum MessageId {
    CLogin = 1,
    SLogin = 2,
    CEcho = 3,
    SEcho = 4
}

/**
 * 消息处理器
 * 负责处理各种协议消息
 * 
 * 使用约定：
 * - 客户端消息类名以 C 开头（如 CLogin, CEcho）
 * - 处理器方法名为 handle + 去掉首字母的消息名（如 handleLogin, handleEcho）
 * - 新增协议只需添加对应的 handleXxx 方法，无需修改 handleMessage
 */
export class MessageHandler {
    private static playerIdCounter: number = 10000;

    /**
     * 初始化消息注册表
     * 必须在服务器启动时调用
     */
    static init(): void {
        MessageRegistry.autoRegisterFromProto(ProtoLoader, this);
        console.log(`[MessageHandler] 消息注册完成，共注册 ${MessageRegistry.getAllMessageIds().length} 条消息`);
    }

    /**
     * 处理 WebsocketMessage 格式的消息
     * 根据 uri 前缀判断消息发往哪个服务器
     */
    static handleWebsocketMessage(session: ClientSession, data: Uint8Array, onForwardToGame: (wsMessage: any) => void): void {
        try {
            // 使用 WebsocketMessage 解压
            const wsMessageType = ProtoLoader.WebsocketMessage;
            const wsMessage = wsMessageType.decode(data) as any;
            
            const uri = wsMessage.uri as string;
            const messageType = wsMessage.message_type as string;
            const messagePayload = new Uint8Array(wsMessage.message_payload as ArrayBuffer);
            
            console.log(`[MessageHandler] 收到 WebsocketMessage - uri: ${uri}, messageType: ${messageType}`);
            
            // 根据 uri 判断目标服务器
            const targetServer = ProtoLoader.getTargetServer(uri);
            
            if (targetServer === 'gate') {
                // 发给 gate 服的消息，根据 message_type 查找处理函数
                const handlerInfo = MessageRegistry.getHandlerByTypeName(messageType);
                if (handlerInfo) {
                    const { handler, protoType } = handlerInfo;
                    handler(session, messagePayload, protoType);
                } else {
                    console.warn(`[MessageHandler] 未找到 gate 消息类型处理器：${messageType}`);
                }
            } else {
                // 发给 game 服的消息，统一转发
                console.log(`[MessageHandler] 转发消息到 Game 服务器 - uri: ${uri}, messageType: ${messageType}`);
                onForwardToGame(wsMessage);
            }
        } catch (error) {
            console.error('[MessageHandler] 处理 WebsocketMessage 时出错:', error);
        }
    }

    static handleServerMessage(ws: WebSocket, data: Buffer): void { 
        try {
            // 使用 WebsocketMessage 解压
            const wsMessageType = ProtoLoader.WebsocketMessage;
            const wsMessage = wsMessageType.decode(data) as any;
            
            const uri = wsMessage.uri as string;
            const messageType = wsMessage.message_type as string;
            const messagePayload = new Uint8Array(wsMessage.message_payload as ArrayBuffer);

            // 根据 message_type 获取对应的协议，并解析messagePayload

        } catch (error) {
            console.error('[handleServerMessage] 处理 WebsocketMessage 时出错:', error);
        }
    }

    /**
     * 处理登录请求
     */
    static handleLogin(session: ClientSession, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            const loginRequest = protoType.decode(data) as any;
            console.log(`收到登录请求 - 用户名：${loginRequest.name}, 密码：${loginRequest.password}`);

            // 简单的登录验证（实际项目中应该验证数据库）
            if (loginRequest.name && loginRequest.password) {
                const playerId = this.generatePlayerId();
                
                // 设置会话登录状态
                session.setLogin(playerId, loginRequest.name);

                // 发送登录响应
                const sLoginType = ProtoLoader.getType('SLogin');
                const loginResponse = sLoginType.create({ playerId });
                const encoded = sLoginType.encode(loginResponse).finish();
                
                // 发送响应（使用 WebsocketMessage 格式）
                this.sendWebsocketResponse(session, 'SLogin', '/gate/gate/login', encoded);
                
                console.log(`玩家登录成功 - ID: ${playerId}, 名称：${loginRequest.name}`);
            } else {
                console.warn('登录失败 - 用户名或密码为空');
            }
        } catch (error) {
            console.error('处理登录请求时出错:', error);
        }
    }

    /**
     * 处理回显请求
     */
    static handleEcho(session: ClientSession, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            // 检查是否已登录
            if (!session.isLogin()) {
                console.warn('未登录客户端尝试发送回显请求');
                return;
            }

            const echoRequest = protoType.decode(data) as any;
            console.log(`收到回显请求 - 消息：${echoRequest.msg}, 玩家：${session.getName()}`);

            // 发送回显响应
            const sEchoType = ProtoLoader.getType('SEcho');
            const echoResponse = sEchoType.create({ msg: echoRequest.msg });
            const encoded = sEchoType.encode(echoResponse).finish();
            
            // 发送响应（使用 WebsocketMessage 格式）
            this.sendWebsocketResponse(session, 'SEcho', '/gate/gate/echo', encoded);
            
            console.log(`回显响应已发送 - 玩家：${session.getName()}`);
        } catch (error) {
            console.error('处理回显请求时出错:', error);
        }
    }

    /**
     * 发送响应给客户端（使用 WebsocketMessage 格式）
     */
    private static sendWebsocketResponse(session: ClientSession, messageType: string, uri: string, payload: Uint8Array): void {
        try {
            const wsMessageType = ProtoLoader.WebsocketMessage;
            const wsMessage = wsMessageType.create({
                uri: uri,
                method: 'POST',
                message_type: messageType,
                message_payload: payload,
                uuid: '',
                errno: 0,
                errmsg: ''
            });
            const encoded = wsMessageType.encode(wsMessage).finish();
            
            // 使用 PBPackage 包装
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.create({
                message_type: messageType,
                message_payload: encoded
            });
            const pbEncoded = pbPackageType.encode(pbPackage).finish();
            
            session.send(pbEncoded);
        } catch (error) {
            console.error('发送 WebsocketMessage 响应时出错:', error);
        }
    }

    /**
     * 生成玩家 ID
     */
    private static generatePlayerId(): number {
        return this.playerIdCounter++;
    }

    /**
     * 处理来自 Game 服务器的消息（GameToGate）
     * 使用 WebsocketMessage 格式发送
     */
    static handleGameToGameMessage(gameToGate: any): void {
        try {
            const sessionId = gameToGate.sessionId as number;
            const messageId = gameToGate.messageId as number;
            const payload = new Uint8Array(gameToGate.payload as ArrayBuffer);
            const messageType = gameToGate.message_type as string || '';

            console.log(`[MessageHandler] GameToGate - SessionId: ${sessionId}, MessageId: ${messageId}, MessageType: ${messageType}`);

            // 获取玩家会话
            const session = ClientManager.getSessionByGateId(sessionId);
            if (!session) {
                console.warn(`[MessageHandler] 未找到会话 - SessionId: ${sessionId}`);
                return;
            }

            // 使用 WebsocketMessage 格式发送给客户端
            const wsMessageType = ProtoLoader.WebsocketMessage;
            const wsMessage = wsMessageType.create({
                uri: '/gate/gate/response',
                method: 'POST',
                message_type: messageType,
                message_payload: payload,
                uuid: '',
                errno: 0,
                errmsg: ''
            });
            const wsEncoded = wsMessageType.encode(wsMessage).finish();
            
            // 使用 PBPackage 包装
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.create({
                message_type: messageType,
                message_payload: wsEncoded
            });
            const pbEncoded = pbPackageType.encode(pbPackage).finish();
            
            // 发送给客户端
            session.send(pbEncoded);
            console.log(`[MessageHandler] 消息已转发给客户端 - PlayerId: ${session.getPlayerId()}`);
        } catch (error) {
            console.error('[MessageHandler] 处理 GameToGate 消息时出错:', error);
        }
    }
}
