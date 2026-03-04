import { PlayerSession } from './PlayerSession';
import * as protobuf from 'protobufjs';

/**
 * 消息处理器类型定义
 */
export type MessageHandlerFn = (session: PlayerSession, data: Uint8Array, protoType: protobuf.Type) => void;

/**
 * 消息 ID 配置
 * 在这里定义所有客户端消息的 ID
 * 命名约定：客户端消息以 C 开头，处理器方法名为 handle + 去掉首字母的消息名
 *
 * 此文件由 AutoExport.js 自动生成，请勿手动修改！
 */
const MESSAGE_ID_CONFIG: Record<string, number> = {
    'CLogin': 1,
    'CEcho': 3
};

/**
 * 消息注册表
 * 通过命名约定自动注册消息处理器
 *
 * 命名约定：
 * - 客户端消息：C + 消息名 (如 CLogin, CEcho)
 * - 服务端消息：S + 消息名 (如 SLogin, SEcho)
 * - 处理器方法：handle + 消息名 (如 handleLogin, handleEcho)
 */
export class MessageRegistry {
    private static handlerMap = new Map<number, { handler: MessageHandlerFn, protoType: protobuf.Type }>();
    private static messageIdMap = new Map<string, number>();
    private static messageNameHandlerMap = new Map<string, { handler: MessageHandlerFn, protoType: protobuf.Type }>();

    /**
     * 注册消息处理器
     * @param messageId 消息 ID
     * @param protoTypeName Proto 消息类型名（如 'CLogin'）
     * @param protoType Proto 类型对象
     * @param handler 处理函数
     */
    static register(
        messageId: number,
        protoTypeName: string,
        protoType: protobuf.Type,
        handler: MessageHandlerFn
    ): void {
        this.handlerMap.set(messageId, { handler, protoType });
        this.messageIdMap.set(protoTypeName, messageId);
        this.messageNameHandlerMap.set(protoTypeName, { handler, protoType });
        console.log(`[MessageRegistry] 注册消息：${protoTypeName} -> ID:${messageId}`);
    }

    /**
     * 根据消息 ID 获取处理器
     */
    static getHandler(messageId: number): { handler: MessageHandlerFn, protoType: protobuf.Type } | null {
        return this.handlerMap.get(messageId) || null;
    }

    /**
     * 根据消息类型名获取处理器（用于 WebsocketMessage）
     */
    static getHandlerByTypeName(typeName: string): { handler: MessageHandlerFn, protoType: protobuf.Type } | null {
        return this.messageNameHandlerMap.get(typeName) || null;
    }

    /**
     * 根据 Proto 类型名获取消息 ID
     */
    static getMessageId(protoTypeName: string): number | undefined {
        return this.messageIdMap.get(protoTypeName);
    }

    /**
     * 从 ProtoLoader 自动发现并注册所有 C* 开头的消息
     * @param protoLoader ProtoLoader 类
     * @param handlerClass MessageHandler 类
     */
    static autoRegisterFromProto(
        protoLoader: typeof import('./ProtoLoader').ProtoLoader,
        handlerClass: typeof import('./MessageHandler').MessageHandler
    ): void {
        // 获取所有消息类型名称
        const typeNames = protoLoader.getAllMessageTypes();
        
        // 遍历所有消息类型
        for (const typeName of typeNames) {
            // 只处理客户端消息（以 C 开头）
            if (typeName.startsWith('C') && typeName.length > 1) {
                // 根据命名约定查找对应的处理器方法
                // 例如：CLogin -> handleLogin
                const messageName = typeName.slice(1); // 去掉 'C' 前缀
                const handlerMethodName = `handle${messageName}`;
                
                const handlerMethod = (handlerClass as any)[handlerMethodName];
                if (handlerMethod) {
                    const protoType = protoLoader.getType(typeName);
                    
                    // 从配置中获取消息 ID
                    const messageId = MESSAGE_ID_CONFIG[typeName];
                    
                    if (messageId !== undefined) {
                        this.register(messageId, typeName, protoType, handlerMethod.bind(handlerClass));
                    } else {
                        console.warn(`[MessageRegistry] 消息 ${typeName} 未在 MESSAGE_ID_CONFIG 中定义 ID`);
                    }
                } else {
                    console.warn(`[MessageRegistry] 未找到处理器方法：${handlerMethodName}，消息：${typeName}`);
                }
            }
        }
    }

    /**
     * 获取所有已注册的消息 ID
     */
    static getAllMessageIds(): number[] {
        return Array.from(this.handlerMap.keys());
    }

    /**
     * 清空注册表（主要用于测试）
     */
    static clear(): void {
        this.handlerMap.clear();
        this.messageIdMap.clear();
        this.messageNameHandlerMap.clear();
    }
}
