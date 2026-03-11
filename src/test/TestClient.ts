/**
 * 测试客户端
 * 用于测试 Gate 服务器的登录协议和回显协议
 * 使用 WebsocketMessage 格式发送消息
 * 基于 framework/network/WsClient 实现
 */

import { WsClient, WsClientConfig } from '../framework/network/WsClient';
import { ProtoLoader } from '../framework/network/ProtoLoader';
import { generateUUID } from '../framework/utils/uuid';

class TestClient {
    private client: WsClient;

    constructor(url: string) {
        const config: WsClientConfig = {
            url,
            reconnectInterval: 3000,
            maxReconnectAttempts: 3,
            pingInterval: 30000
        };
        this.client = new WsClient(config);
        this.setupHandlers();
    }

    /**
     * 设置事件处理
     */
    private setupHandlers(): void {
        this.client.on('open', () => {
            console.log('已连接到服务器');
        });

        this.client.on('message', (data: Buffer) => {
            this.handleMessage(data);
        });

        this.client.on('close', () => {
            console.log('连接已关闭');
        });

        this.client.on('error', (error: Error) => {
            console.error('连接错误:', error);
        });
    }

    /**
     * 连接到服务器
     */
    async connect(): Promise<void> {
        await this.client.connect();
    }

    /**
     * 处理服务器消息
     * 使用 PBPackage 格式解析
     */
    private handleMessage(data: Buffer): void {
        try {
            const uint8Data = new Uint8Array(data);
            
            // 使用 PBPackage 解析
            const pbPackageType = ProtoLoader.PBPackage;
            const pbPackage = pbPackageType.decode(uint8Data) as any;
            
            const messageType = pbPackage.message_type as string;
            const messagePayload = new Uint8Array(pbPackage.message_payload as ArrayBuffer);
            
            console.log(`收到消息 - messageType: ${messageType}`);
            
            // 再次解析 WebsocketMessage
            const wsMessageType = ProtoLoader.WebsocketMessage;
            const wsMessage = wsMessageType.decode(messagePayload) as any;
            
            const innerMessageType = wsMessage.message_type as string;
            const innerPayload = new Uint8Array(wsMessage.message_payload as ArrayBuffer);
            
            console.log(`WebsocketMessage - messageType: ${innerMessageType}`);
            
            // 根据消息类型处理
            switch (innerMessageType) {
                case 'SLogin':
                    const loginResponseType = ProtoLoader.getType("SLogin");
                    const loginResponse = loginResponseType.decode(innerPayload) as any;
                    console.log(`收到登录响应 - 玩家 ID: ${loginResponse.player_id}`);
                    
                    // 登录成功后发送回显消息
                    setTimeout(() => this.sendEcho('Hello, Gate Server!'), 1000);
                    break;

                case 'SEcho':
                    const echoResponseType = ProtoLoader.getType("SEcho");
                    const echoResponse = echoResponseType.decode(innerPayload) as any;
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
        const cloginType = ProtoLoader.getType("CLogin");
        const loginRequest = cloginType.create({ name, password });
        const loginEncoded = cloginType.encode(loginRequest).finish();

        // 创建 WebsocketMessage
        const wsMessageType = ProtoLoader.WebsocketMessage;
        const wsMessage = wsMessageType.create({
            uri: '/game/game/login',
            method: 'POST',
            message_type: 'CLogin',
            message_payload: loginEncoded,
            uuid: generateUUID(),
            errno: 0,
            errmsg: ''
        });
        const wsEncoded = wsMessageType.encode(wsMessage).finish();

        this.client.send(Buffer.from(wsEncoded));
        console.log(`发送登录请求 - 用户名：${name}`);
    }

    /**
     * 发送回显请求
     * 使用 WebsocketMessage 格式
     */
    sendEcho(msg: string): void {
        // 编码 CEcho 消息
        const cechoType = ProtoLoader.getType("CEcho");
        const echoRequest = cechoType.create({ msg });
        const echoEncoded = cechoType.encode(echoRequest).finish();

        // 创建 WebsocketMessage
        const wsMessageType = ProtoLoader.WebsocketMessage;
        const wsMessage = wsMessageType.create({
            uri: '/game/game/echo',
            method: 'POST',
            message_type: 'CEcho',
            message_payload: echoEncoded,
            uuid: generateUUID(),
            errno: 0,
            errmsg: ''
        });
        const wsEncoded = wsMessageType.encode(wsMessage).finish();

        this.client.send(Buffer.from(wsEncoded));
        console.log(`发送回显请求 - 消息：${msg}`);
    }

    /**
     * 关闭连接
     */
    async close(): Promise<void> {
        await this.client.close();
    }
}

/**
 * 启动测试
 */
async function startTest(): Promise<void> {
    // 先加载 proto 文件
    ProtoLoader.loadProtoSync();
    
    // 连接到 Gate 服务器（端口 = 配置端口 8080 + SERVER_ID 1 = 8081）
    const client = new TestClient('ws://localhost:8081');
    
    await client.connect();
    
    // 等待连接建立
    setTimeout(() => {
        console.log('连接建立，开始测试...');
        // 发送登录请求
        client.sendLogin('testUser', 'testPassword123');
    }, 1000);
}

startTest().catch(console.error);
