/**
 * 测试客户端
 * 用于测试 Gate 服务器的登录协议和回显协议
 * 使用 WebsocketMessage 格式发送消息
 */

import WebSocket from 'ws';
import * as protobuf from 'protobufjs';
import * as path from 'path';

class TestClient {
    private ws: WebSocket;
    private root: protobuf.Root | null = null;

    constructor(url: string) {
        this.ws = new WebSocket(url);
        this.setupHandlers();
    }

    /**
     * 加载 proto 文件
     */
    async loadProto(): Promise<void> {
        // __dirname 在编译后是 dist/src/test，需要向上三层到项目根目录
        const commonProtoPath = path.join(__dirname, '../../../protobuf/proto/common/common.proto');
        const gameProtoPath = path.join(__dirname, '../../../protobuf/proto/game/game.proto');
        this.root = await protobuf.load(commonProtoPath);
        await this.root.load(gameProtoPath);
        console.log('Proto 文件加载完成');
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
        if (!this.root) {
            console.error('Proto 文件未加载');
            return;
        }

        try {
            const uint8Data = new Uint8Array(data);
            
            // 使用 PBPackage 解析
            const pbPackageType = this.root.lookupType('PBPackage');
            const pbPackage = pbPackageType.decode(uint8Data) as any;
            
            const messageType = pbPackage.message_type as string;
            const messagePayload = new Uint8Array(pbPackage.message_payload as ArrayBuffer);
            
            console.log(`收到消息 - messageType: ${messageType}`);
            
            // 再次解析 WebsocketMessage
            const wsMessageType = this.root.lookupType('WebsocketMessage');
            const wsMessage = wsMessageType.decode(messagePayload) as any;
            
            const innerMessageType = wsMessage.message_type as string;
            const innerPayload = new Uint8Array(wsMessage.message_payload as ArrayBuffer);
            
            console.log(`WebsocketMessage - messageType: ${innerMessageType}`);
            
            // 根据消息类型处理
            switch (innerMessageType) {
                case 'SLogin':
                    const sLoginType = this.root.lookupType('SLogin');
                    const loginResponse = sLoginType.decode(innerPayload) as any;
                    console.log(`收到登录响应 - 玩家 ID: ${loginResponse.playerId}`);
                    
                    // 登录成功后发送回显消息
                    setTimeout(() => this.sendEcho('Hello, Gate Server!'), 1000);
                    break;

                case 'SEcho':
                    const sEchoType = this.root.lookupType('SEcho');
                    const echoResponse = sEchoType.decode(innerPayload) as any;
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
        if (!this.root) {
            console.error('Proto 文件未加载');
            return;
        }

        // 编码 CLogin 消息
        const cLoginType = this.root.lookupType('CLogin');
        const loginRequest = cLoginType.create({ name, password });
        const loginEncoded = cLoginType.encode(loginRequest).finish();

        // 创建 WebsocketMessage
        const wsMessageType = this.root.lookupType('WebsocketMessage');
        const wsMessage = wsMessageType.create({
            uri: '/game/game/login',
            method: 'POST',
            message_type: 'CLogin',
            message_payload: loginEncoded,
            uuid: '',
            errno: 0,
            errmsg: ''
        });
        const wsEncoded = wsMessageType.encode(wsMessage).finish();

        // 使用 PBPackage 包装
        const pbPackageType = this.root.lookupType('PBPackage');
        const pbPackage = pbPackageType.create({
            message_type: 'CLogin',
            message_payload: wsEncoded
        });
        const pbEncoded = pbPackageType.encode(pbPackage).finish();

        this.ws.send(pbEncoded);
        console.log(`发送登录请求 - 用户名：${name}`);
    }

    /**
     * 发送回显请求
     * 使用 WebsocketMessage 格式
     */
    sendEcho(msg: string): void {
        if (!this.root) {
            console.error('Proto 文件未加载');
            return;
        }

        // 编码 CEcho 消息
        const cEchoType = this.root.lookupType('CEcho');
        const echoRequest = cEchoType.create({ msg });
        const echoEncoded = cEchoType.encode(echoRequest).finish();

        // 创建 WebsocketMessage
        const wsMessageType = this.root.lookupType('WebsocketMessage');
        const wsMessage = wsMessageType.create({
            uri: '/game/game/echo',
            method: 'POST',
            message_type: 'CEcho',
            message_payload: echoEncoded,
            uuid: '',
            errno: 0,
            errmsg: ''
        });
        const wsEncoded = wsMessageType.encode(wsMessage).finish();

        // 使用 PBPackage 包装
        const pbPackageType = this.root.lookupType('PBPackage');
        const pbPackage = pbPackageType.create({
            message_type: 'CEcho',
            message_payload: wsEncoded
        });
        const pbEncoded = pbPackageType.encode(pbPackage).finish();

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
    
    await client.loadProto();
    
    // 等待连接建立
    setTimeout(() => {
        console.log('连接建立，开始测试...');
        // 发送登录请求
        client.sendLogin('testUser', 'testPassword123');
    }, 1000);
}

startTest().catch(console.error);
