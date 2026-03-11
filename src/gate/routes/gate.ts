import { Session } from "../../framework/network";
import { ProtoLoader } from "../../framework/network/ProtoLoader";
import * as protobuf from "protobufjs";

export class GateRouter {
    /**
     * 踢出单个玩家
     */
    static CKickPlayer(session: Session, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            const request = protoType.decode(data) as any;
            console.log(`[GateRouter] 踢出玩家 - PlayerId: ${request.player_id}, Reason: ${request.reason}`);
            
            // TODO: 实现踢出玩家的逻辑
            // 1. 找到玩家会话
            // 2. 发送踢出通知
            // 3. 关闭连接
            
            // 发送响应
            const sKickPlayerType = ProtoLoader.getType('SKickPlayer');
            const response = sKickPlayerType.create({});
            const encoded = sKickPlayerType.encode(response).finish();
            
            // TODO: 发送响应给调用者
        } catch (error) {
            console.error('[GateRouter] CKickPlayer 处理出错:', error);
        }
    }

    /**
     * 踢出指定服务器的玩家
     */
    static CKickGamePlayers(session: Session, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            const request = protoType.decode(data) as any;
            console.log(`[GateRouter] 踢出服务器玩家 - ServerId: ${request.server_id}, Reason: ${request.reason}`);
            
            // TODO: 实现踢出服务器所有玩家的逻辑
        } catch (error) {
            console.error('[GateRouter] CKickGamePlayers 处理出错:', error);
        }
    }

    /**
     * 广播消息给当前 gate 上的所有玩家
     */
    static CBroadcastMessage(session: Session, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            const request = protoType.decode(data) as any;
            console.log(`[GateRouter] 广播消息 - MsgType: ${request.msg_type}`);
            
            // TODO: 实现广播消息的逻辑
        } catch (error) {
            console.error('[GateRouter] CBroadcastMessage 处理出错:', error);
        }
    }

    /**
     * 广播指定服务器的消息
     */
    static CBroadcastGameMessage(session: Session, data: Uint8Array, protoType: protobuf.Type): void {
        try {
            const request = protoType.decode(data) as any;
            console.log(`[GateRouter] 广播服务器消息 - ServerId: ${request.server_id}, MsgType: ${request.msg_type}`);
            
            // TODO: 实现广播服务器消息的逻辑
        } catch (error) {
            console.error('[GateRouter] CBroadcastGameMessage 处理出错:', error);
        }
    }
}