/**
 * 测试客户端
 * 用于测试 Gate 服务器的登录协议和回显协议
 */

import WebSocket from 'ws';
import * as protobuf from 'protobufjs';
import * as path from 'path';

/**
 * 消息 ID 定义
 */
enum MessageId {
    CLogin = 1,
    SLogin = 2,
    CEcho = 3,
    SEcho = 4
}

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
        const protoPath = path.join(__dirname, '../../../protobuf/proto/game.proto');
        this.root = await protobuf.load(protoPath);
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
     */
    private handleMessage(data: Buffer): void {
        if (!this.root) {
            console.error('Proto 文件未加载');
            return;
        }

        const uint8Data = new Uint8Array(data);
        const messageId = uint8Data[0];
        const messageBody = uint8Data.slice(1);

        switch (messageId) {
            case MessageId.SLogin:
                const sLoginType = this.root.lookupType('SLogin');
                const loginResponse = sLoginType.decode(messageBody) as any;
                console.log(`收到登录响应 - 玩家 ID: ${loginResponse.playerId}`);
                
                // 登录成功后发送回显消息
                setTimeout(() => this.sendEcho('Hello, Gate Server!'), 1000);
                break;

            case MessageId.SEcho:
                const sEchoType = this.root.lookupType('SEcho');
                const echoResponse = sEchoType.decode(messageBody) as any;
                console.log(`收到回显响应 - 消息：${echoResponse.msg}`);
                
                // 测试完成，关闭连接
                setTimeout(() => this.close(), 1000);
                break;

            default:
                console.warn(`未知消息 ID: ${messageId}`);
                break;
        }
    }

    /**
     * 发送登录请求
     */
    sendLogin(name: string, password: string): void {
        if (!this.root) {
            console.error('Proto 文件未加载');
            return;
        }

        const cLoginType = this.root.lookupType('CLogin');
        const loginRequest = cLoginType.create({ name, password });
        const encoded = cLoginType.encode(loginRequest).finish();

        this.sendMessage(MessageId.CLogin, encoded);
        console.log(`发送登录请求 - 用户名：${name}`);
    }

    /**
     * 发送回显请求
     */
    sendEcho(msg: string): void {
        if (!this.root) {
            console.error('Proto 文件未加载');
            return;
        }

        const cEchoType = this.root.lookupType('CEcho');
        const echoRequest = cEchoType.create({ msg });
        const encoded = cEchoType.encode(echoRequest).finish();

        this.sendMessage(MessageId.CEcho, encoded);
        console.log(`发送回显请求 - 消息：${msg}`);
    }

    /**
     * 发送消息
     */
    private sendMessage(messageId: MessageId, data: Uint8Array): void {
        const message = new Uint8Array(1 + data.length);
        message[0] = messageId;
        message.set(data, 1);
        
        this.ws.send(message);
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
