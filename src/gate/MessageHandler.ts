import { PlayerSession } from './PlayerSession';
import { ProtoLoader } from './ProtoLoader';
import { MessageRegistry } from './MessageRegistry';
import * as protobuf from 'protobufjs';
import { PlayerManager } from './PlayerManager';

/**
 * 消息 ID 定义（保留用于发送响应）
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
     * 处理客户端消息
     * 通过注册表自动路由到对应的处理器
     */
    static handleMessage(session: PlayerSession, data: Uint8Array): void {
        const reader = new Uint8Array(data);
        
        // 读取消息 ID（第一个字节是消息 ID）
        const messageId = reader[0];
        
        // 读取消息体
        const messageBody = data.slice(1);

        // 从注册表获取处理器
        const handlerInfo = MessageRegistry.getHandler(messageId);
        if (handlerInfo) {
            const { handler, protoType } = handlerInfo;
            handler(session, messageBody, protoType);
        } else {
            console.warn(`未知消息 ID: ${messageId}`);
        }
    }

    /**
     * 处理登录请求
     */
    static handleLogin(session: PlayerSession, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            const loginRequest = protoType.decode(data) as any;
            console.log(`收到登录请求 - 用户名：${loginRequest.name}, 密码：${loginRequest.password}`);

            // 简单的登录验证（实际项目中应该验证数据库）
            if (loginRequest.name && loginRequest.password) {
                const playerId = this.generatePlayerId();
                
                // 设置会话登录状态
                session.setLogin(playerId, loginRequest.name);

                // 发送登录响应
                const sLoginType = ProtoLoader.SLogin;
                const loginResponse = sLoginType.create({ playerId });
                const encoded = sLoginType.encode(loginResponse).finish();
                
                // 发送响应（消息 ID + 数据）
                this.sendResponse(session, MessageId.SLogin, encoded);
                
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
    static handleEcho(session: PlayerSession, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            // 检查是否已登录
            if (!session.isLogin()) {
                console.warn('未登录客户端尝试发送回显请求');
                return;
            }

            const echoRequest = protoType.decode(data) as any;
            console.log(`收到回显请求 - 消息：${echoRequest.msg}, 玩家：${session.getName()}`);

            // 发送回显响应
            const sEchoType = ProtoLoader.SEcho;
            const echoResponse = sEchoType.create({ msg: echoRequest.msg });
            const encoded = sEchoType.encode(echoResponse).finish();
            
            // 发送响应
            this.sendResponse(session, MessageId.SEcho, encoded);
            
            console.log(`回显响应已发送 - 玩家：${session.getName()}`);
        } catch (error) {
            console.error('处理回显请求时出错:', error);
        }
    }

    /**
     * 发送响应给客户端
     */
    private static sendResponse(session: PlayerSession, messageId: MessageId, data: Uint8Array): void {
        // 组合消息：消息 ID(1 字节) + 消息体
        const response = new Uint8Array(1 + data.length);
        response[0] = messageId;
        response.set(data, 1);
        
        session.send(response);
    }

    /**
     * 生成玩家 ID
     */
    private static generatePlayerId(): number {
        return this.playerIdCounter++;
    }

    /**
     * 处理来自 Game 服务器的消息（GameToGate）
     */
    static handleGameToGameMessage(data: Uint8Array): void {
        try {
            const gameToGateType = ProtoLoader.GameToGate;
            const gameToGate = gameToGateType.decode(data) as any;
            
            const sessionId = gameToGate.sessionId as number;
            const messageId = gameToGate.messageId as number;
            const payload = new Uint8Array(gameToGate.payload as ArrayBuffer);

            console.log(`[MessageHandler] GameToGate - SessionId: ${sessionId}, MessageId: ${messageId}`);

            // 获取玩家会话
            const session = PlayerManager.getSessionByGateId(sessionId);
            if (!session) {
                console.warn(`[MessageHandler] 未找到会话 - SessionId: ${sessionId}`);
                return;
            }

            // 创建响应消息
            const response = new Uint8Array(1 + payload.length);
            response[0] = messageId;
            response.set(payload, 1);

            // 发送给客户端
            session.send(response);
            console.log(`[MessageHandler] 消息已转发给客户端 - PlayerId: ${session.getPlayerId()}`);
        } catch (error) {
            console.error('[MessageHandler] 处理 GameToGate 消息时出错:', error);
        }
    }
}
