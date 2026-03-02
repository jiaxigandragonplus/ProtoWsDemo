import { PlayerSession } from './PlayerSession';
import { ProtoLoader } from './ProtoLoader';

/**
 * 消息 ID 定义
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
 */
export class MessageHandler {
    private static playerIdCounter: number = 10000;

    /**
     * 处理客户端消息
     */
    static handleMessage(session: PlayerSession, data: Uint8Array): void {
        const reader = new Uint8Array(data);
        
        // 读取消息 ID（假设第一个字节是消息 ID）
        const messageId = reader[0];
        
        // 读取消息体
        const messageBody = data.slice(1);

        switch (messageId) {
            case MessageId.CLogin:
                this.handleLogin(session, messageBody);
                break;
            case MessageId.CEcho:
                this.handleEcho(session, messageBody);
                break;
            default:
                console.warn(`未知消息 ID: ${messageId}`);
                break;
        }
    }

    /**
     * 处理登录请求
     */
    private static handleLogin(session: PlayerSession, data: Uint8Array): void {
        try {
            const loginType = ProtoLoader.CLogin;
            const loginRequest = loginType.decode(data) as any;
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
    private static handleEcho(session: PlayerSession, data: Uint8Array): void {
        try {
            // 检查是否已登录
            if (!session.isLogin()) {
                console.warn('未登录客户端尝试发送回显请求');
                return;
            }

            const echoType = ProtoLoader.CEcho;
            const echoRequest = echoType.decode(data) as any;
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
}
