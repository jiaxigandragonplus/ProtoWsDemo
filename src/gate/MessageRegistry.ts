import * as protobuf from 'protobufjs';
import WebSocket from 'ws';
import { Session } from '../framework/network';

/**
 * 消息处理器类型定义
 */
export type MessageHandlerFn = (session: Session, data: Uint8Array, protoType: protobuf.Type) => void;

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
    private static handlerMap = new Map<string, MessageHandlerFn>();
    private static messageNameHandlerMap = new Map<string, { handler: MessageHandlerFn, protoType: protobuf.Type }>();

    /**
     * 注册消息处理器
     * @param messageId 消息 ID
     * @param protoTypeName Proto 消息类型名（如 'CLogin'）
     * @param protoType Proto 类型对象
     * @param handler 处理函数
     */
    static register(
        protoTypeName: string,
        protoType: protobuf.Type,
        handler: MessageHandlerFn
    ): void {
        this.handlerMap.set(protoTypeName, handler);
        this.messageNameHandlerMap.set(protoTypeName, { handler, protoType });
        console.log(`[MessageRegistry] 注册消息：${protoTypeName}`);
    }

    /**
     * 根据消息类型名获取处理器
     */
    static getHandler(messageType: string): MessageHandlerFn | null {
        return this.handlerMap.get(messageType) || null;
    }

    /**
     * 根据消息类型名获取处理器（用于 WebsocketMessage）
     */
    static getHandlerByTypeName(typeName: string): { handler: MessageHandlerFn, protoType: protobuf.Type } | null {
        return this.messageNameHandlerMap.get(typeName) || null;
    }

    /**
     * 从 ProtoLoader 自动发现并注册所有 C* 开头的消息
     * @param protoLoader ProtoLoader 类
     * @param handlerClass MessageHandler 类
     */
    static autoRegisterFromProto(
        protoLoader: typeof import('../framework/network/ProtoLoader').ProtoLoader,
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
                    this.register(typeName, protoType, handlerMethod.bind(handlerClass));
                } else {
                    console.warn(`[MessageRegistry] 未找到处理器方法：${handlerMethodName}，消息：${typeName}`);
                }
            }
        }
    }

    /**
     * 从 Router 类自动注册消息处理器
     * Router 类中的静态方法名与 proto 消息类型名相同（如 CKickPlayer）
     * @param protoLoader ProtoLoader 类
     * @param routerClass Router 类（如 GateRouter）
     */
    static registerRouter(
        protoLoader: typeof import('../framework/network/ProtoLoader').ProtoLoader,
        routerClass: any
    ): void {
        // 获取所有消息类型名称
        const typeNames = protoLoader.getAllMessageTypes();
        
        // 遍历所有消息类型
        for (const typeName of typeNames) {
            // 只处理客户端消息（以 C 开头）
            if (typeName.startsWith('C') && typeName.length > 1) {
                // 直接使用方法名与 proto 名相同的方式
                // 例如：CKickPlayer -> CKickPlayer
                const routerMethod = routerClass[typeName];
                
                if (routerMethod) {
                    const protoType = protoLoader.getType(typeName);
                    this.register(typeName, protoType, routerMethod.bind(routerClass));
                }
                // 注意：Router 中可能只处理部分消息，所以不存在的消息不警告
            }
        }
    }

    /**
     * 获取所有已注册的消息类型名
     */
    static getAllMessageTypes(): string[] {
        return Array.from(this.handlerMap.keys());
    }

    /**
     * 清空注册表（主要用于测试）
     */
    static clear(): void {
        this.handlerMap.clear();
        this.messageNameHandlerMap.clear();
    }
}
