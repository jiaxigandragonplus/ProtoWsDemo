/**
 * 测试客户端
 * 用于测试 Gate 服务器的登录协议和回显协议
 * 使用 WebsocketMessage 格式发送消息
 */

import WebSocket from 'ws';
import * as path from 'path';
import * as commonProto from '../protobuf/js/common/common';
import * as gameProto from '../protobuf/js/game/game';

class TestClient {
    private ws: WebSocket;

    constructor(url: string) {
        this.ws = new WebSocket(url);
        this.setupHandlers();
    }

    /**
     * 设置 WebSocket 事件处理
     */
    private setupHandlers(): void {
        this.ws.on('open', () => {
            console.log('已连接到服务器');
        });

        this.ws.on('message', (data: Buffer) => {
            this.handleMessage(data);
        });

        this.ws.on('close', () => {
            console.log('连接已关闭');
        });

        this.ws.on('error', (error: Error) => {
            console.error('连接错误:', error);
        });
    }

    /**
     * 处理服务器消息
     * 使用 PBPackage 格式解析
     */
    private handleMessage(data: Buffer): void {
        try {
            const uint8Data = new Uint8Array(data);
            
            // 使用 PBPackage 解析
            const pbPackage = commonProto.common.PBPackage.decode(uint8Data) as any;
            
            const messageType = pbPackage.messageType as string;
            const messagePayload = new Uint8Array(pbPackage.messagePayload as ArrayBuffer);
            
            console.log(`收到消息 - messageType: ${messageType}`);
            
            // 再次解析 WebsocketMessage
            const wsMessage = commonProto.common.WebsocketMessage.decode(messagePayload) as any;
            
            const innerMessageType = wsMessage.messageType as string;
            const innerPayload = new Uint8Array(wsMessage.messagePayload as ArrayBuffer);
            
            console.log(`WebsocketMessage - messageType: ${innerMessageType}`);
            
            // 根据消息类型处理
            switch (innerMessageType) {
                case 'SLogin':
                    const loginResponse = gameProto.game.SLogin.decode(innerPayload) as any;
                    console.log(`收到登录响应 - 玩家 ID: ${loginResponse.playerId}`);
                    
                    // 登录成功后发送回显消息
                    setTimeout(() => this.sendEcho('Hello, Gate Server!'), 1000);
                    break;

                case 'SEcho':
                    const echoResponse = gameProto.game.SEcho.decode(innerPayload) as any;
                    console.log(`收到回显响应 - 消息：${echoResponse.msg}`);
                    
                    // 测试完成，关闭连接
                    setTimeout(() => this.close(), 1000);
                    break;

                default:
                    console.warn(`未知消息类型：${innerMessageType}`);
                    break;
            }
        } catch (error) {
            console.error('处理消息时出错:', error);
        }
    }

    /**
     * 发送登录请求
     * 使用 WebsocketMessage 格式
     */
    sendLogin(name: string, password: string): void {
        // 编码 CLogin 消息
        const loginRequest = gameProto.game.CLogin.create({ name, password });
        const loginEncoded = gameProto.game.CLogin.encode(loginRequest).finish();

        // 创建 WebsocketMessage
        const wsMessage = commonProto.common.WebsocketMessage.create({
            uri: '/game/game/login',
            method: 'POST',
            messageType: 'CLogin',
            messagePayload: loginEncoded,
            uuid: '',
            errno: 0,
            errmsg: ''
        });
        const wsEncoded = commonProto.common.WebsocketMessage.encode(wsMessage).finish();

        // 使用 PBPackage 包装
        const pbPackage = commonProto.common.PBPackage.create({
            messageType: 'CLogin',
            messagePayload: wsEncoded
        });
        const pbEncoded = commonProto.common.PBPackage.encode(pbPackage).finish();

        this.ws.send(pbEncoded);
        console.log(`发送登录请求 - 用户名：${name}`);
    }

    /**
     * 发送回显请求
     * 使用 WebsocketMessage 格式
     */
    sendEcho(msg: string): void {
        // 编码 CEcho 消息
        const echoRequest = gameProto.game.CEcho.create({ msg });
        const echoEncoded = gameProto.game.CEcho.encode(echoRequest).finish();

        // 创建 WebsocketMessage
        const wsMessage = commonProto.common.WebsocketMessage.create({
            uri: '/game/game/echo',
            method: 'POST',
            messageType: 'CEcho',
            messagePayload: echoEncoded,
            uuid: '',
            errno: 0,
            errmsg: ''
        });
        const wsEncoded = commonProto.common.WebsocketMessage.encode(wsMessage).finish();

        // 使用 PBPackage 包装
        const pbPackage = commonProto.common.PBPackage.create({
            messageType: 'CEcho',
            messagePayload: wsEncoded
        });
        const pbEncoded = commonProto.common.PBPackage.encode(pbPackage).finish();

        this.ws.send(pbEncoded);
        console.log(`发送回显请求 - 消息：${msg}`);
    }

    /**
     * 关闭连接
     */
    close(): void {
        this.ws.close();
    }
}

/**
 * 启动测试
 */
async function startTest(): Promise<void> {
    const client = new TestClient('ws://localhost:8080');
    
    // 等待连接建立
    setTimeout(() => {
        console.log('连接建立，开始测试...');
        // 发送登录请求
        client.sendLogin('testUser', 'testPassword123');
    }, 1000);
}

startTest().catch(console.error);
