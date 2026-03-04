import WebSocket from 'ws';
import { MessageHandler } from './MessageHandler';
import { ProtoLoader } from './ProtoLoader';

/**
 * Game 连接器
 * 负责与 Game 服务器建立 WebSocket 长连接
 */
export class GameConnector {
    private ws: WebSocket | null = null;
    private host: string;
    private port: number;
    private reconnectDelay: number = 3000;
    private isReconnecting: boolean = false;
    private pendingMessages: Uint8Array[] = [];

    constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
    }

    /**
     * 连接到 Game 服务器
     */
    connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            const url = `ws://${this.host}:${this.port}`;
            console.log(`[GameConnector] 正在连接到 Game 服务器：${url}`);

            this.ws = new WebSocket(url);

            this.ws.on('open', () => {
                console.log('[GameConnector] 已连接到 Game 服务器');
                this.isReconnecting = false;
                
                // 发送待处理的消息
                this.flushPendingMessages();
                
                resolve();
            });

            this.ws.on('message', (data: Buffer) => {
                this.handleMessage(data);
            });

            this.ws.on('close', () => {
                console.log('[GameConnector] 与 Game 服务器的连接已关闭');
                this.ws = null;
                this.scheduleReconnect();
            });

            this.ws.on('error', (error: Error) => {
                console.error('[GameConnector] Game 连接错误:', error);
                if (!this.isReconnecting) {
                    reject(error);
                }
            });
        });
    }

    /**
     * 处理来自 Game 的消息
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
            
            console.log(`[GameConnector] 收到 Game 消息 - messageType: ${messageType}`);
            
            // 根据 messageType 路由
            if (messageType === 'GameToGate') {
                // 解析 GameToGate 消息
                const gameToGateType = ProtoLoader.GameToGate;
                const gameToGate = gameToGateType.decode(messagePayload) as any;
                
                // 调用 MessageHandler 处理
                MessageHandler.handleGameToGameMessage(messagePayload);
            } else {
                console.warn(`[GameConnector] 未知消息类型：${messageType}`);
            }
        } catch (error) {
            console.error('[GameConnector] 处理 Game 消息时出错:', error);
        }
    }

    /**
     * 发送消息到 Game
     */
    send(data: Uint8Array): void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(data);
        } else {
            // 将消息加入待处理队列
            this.pendingMessages.push(data);
            console.warn(`[GameConnector] 连接未建立，消息已加入待处理队列 - 队列长度：${this.pendingMessages.length}`);
        }
    }

    /**
     * 发送待处理的消息
     */
    private flushPendingMessages(): void {
        if (this.pendingMessages.length === 0) return;
        
        console.log(`[GameConnector] 正在发送 ${this.pendingMessages.length} 条待处理消息`);
        
        for (const message of this.pendingMessages) {
            this.ws!.send(message);
        }
        
        this.pendingMessages = [];
    }

    /**
     * 安排重连
     */
    private scheduleReconnect(): void {
        if (this.isReconnecting) return;
        
        this.isReconnecting = true;
        console.log(`[GameConnector] 将在 ${this.reconnectDelay}ms 后尝试重连...`);
        
        setTimeout(() => {
            if (!this.ws) {
                this.connect().catch((error) => {
                    console.error('[GameConnector] 重连失败:', error);
                });
            }
        }, this.reconnectDelay);
    }

    /**
     * 检查是否已连接
     */
    isConnected(): boolean {
        return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
    }

    /**
     * 关闭连接
     */
    close(): void {
        this.isReconnecting = false;
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
}
