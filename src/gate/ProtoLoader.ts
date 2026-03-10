/**
 * Proto 加载器
 * 在 Node.js 环境中使用 protobufjs 动态加载 proto 文件
 */

import * as protobuf from 'protobufjs';
import * as path from 'path';
import * as fs from 'fs';

/**
 * 协议映射配置
 */
export interface ProtocolMapEntry {
    method: string;
    uri: string;
}

/**
 * Proto 加载器类
 */
export class ProtoLoader {
    private static root: protobuf.Root | null = null;
    private static gameProtoPath: string;
    private static gateGameProtoPath: string;
    private static commonProtoPath: string;
    private static protocolMapPath: string;
    private static protocolMap: Record<string, ProtocolMapEntry> = {};
    private static protoRootDir: string;

    /**
     * 获取 proto 文件路径
     */
    private static getProtoPaths(): { game: string, common: string, protocolMap: string } {
        if (!this.gameProtoPath) {
            this.gameProtoPath = path.join(__dirname, '../protobuf/proto/game/game.proto');
        }
        if (!this.commonProtoPath) {
            this.commonProtoPath = path.join(__dirname, '../protobuf/proto/common/common.proto');
        }
        if (!this.protocolMapPath) {
            this.protocolMapPath = path.join(__dirname, '../protobuf/proto/protocol_map.json');
        }
        return { 
            game: this.gameProtoPath, 
            common: this.commonProtoPath,
            protocolMap: this.protocolMapPath
        };
    }

    /**
     * 设置 resolvePath 函数
     */
    private static setupResolvePath(root: protobuf.Root): void {
        // 获取 proto 根目录（protobuf/proto）
        if (!this.protoRootDir) {
            this.protoRootDir = path.join(__dirname, '../protobuf/proto');
        }
        root.resolvePath = (origin, target) => {
            if (path.isAbsolute(target)) return target;
            // 首先尝试从 proto 根目录解析
            const fromProtoRoot = path.join(this.protoRootDir, target);
            if (fs.existsSync(fromProtoRoot)) {
                return fromProtoRoot;
            }
            // 如果从 proto 根目录找不到，再尝试从当前文件目录解析
            return path.join(path.dirname(origin), target);
        };
    }

    /**
     * 获取 root，如果未加载则同步加载
     */
    static getRoot(): protobuf.Root {
        if (!this.root) {
            const paths = this.getProtoPaths();
            this.root = new protobuf.Root();
            this.setupResolvePath(this.root);
            this.root.loadSync(paths.common);
            this.root.loadSync(paths.game);
        }
        return this.root;
    }

    /**
     * 加载 protocol_map.json
     */
    static loadProtocolMap(): void {
        if (Object.keys(this.protocolMap).length === 0) {
            const paths = this.getProtoPaths();
            try {
                const content = fs.readFileSync(paths.protocolMap, 'utf-8');
                this.protocolMap = JSON.parse(content);
                console.log(`[ProtoLoader] 协议映射加载完成，共 ${Object.keys(this.protocolMap).length} 条协议`);
            } catch (error) {
                console.error('[ProtoLoader] 加载协议映射失败:', error);
            }
        }
    }

    /**
     * 根据消息类型名获取协议信息
     */
    static getProtocolInfo(messageType: string): ProtocolMapEntry | null {
        if (Object.keys(this.protocolMap).length === 0) {
            this.loadProtocolMap();
        }
        return this.protocolMap[messageType] || null;
    }

    /**
     * 根据 URI 前缀判断目标服务器
     * @param uri URI 路径
     * @returns 服务器类型：'gate' 或 'game'
     */
    static getTargetServer(uri: string): 'gate' | 'game' {
        if (uri.startsWith('/gate/')) {
            return 'gate';
        }
        return 'game';
    }

    /**
     * 获取所有消息类型名称
     */
    static getAllMessageTypes(): string[] {
        const root = this.getRoot();
        const types: string[] = [];
        for (const [name, type] of Object.entries(root.nested!)) {
            if (type instanceof protobuf.Type) {
                types.push(name);
            }
        }
        return types;
    }

    /**
     * 异步加载 proto 文件
     */
    static async loadProto(): Promise<void> {
        if (!this.root) {
            const paths = this.getProtoPaths();
            this.root = new protobuf.Root();
            this.setupResolvePath(this.root);
            await this.root.load(paths.common);
            await this.root.load(paths.game);
        }
        this.loadProtocolMap();
    }

    /**
     * 同步加载 proto 文件
     */
    static loadProtoSync(): void {
        if (!this.root) {
            const paths = this.getProtoPaths();
            this.root = new protobuf.Root();
            this.setupResolvePath(this.root);
            this.root.loadSync(paths.common);
            this.root.loadSync(paths.game);
        }
        this.loadProtocolMap();
    }

    /**
     * 获取消息类型
     */
    static getType(typeName: string): protobuf.Type {
        return this.getRoot().lookupType(typeName);
    }

    /**
     * 获取 CLogin 类型
     */
    static get CLogin(): protobuf.Type {
        return this.getType('CLogin');
    }

    /**
     * 获取 SLogin 类型
     */
    static get SLogin(): protobuf.Type {
        return this.getType('SLogin');
    }

    /**
     * 获取 CEcho 类型
     */
    static get CEcho(): protobuf.Type {
        return this.getType('CEcho');
    }

    /**
     * 获取 SEcho 类型
     */
    static get SEcho(): protobuf.Type {
        return this.getType('SEcho');
    }

    /**
     * 获取 WebsocketMessage 类型
     */
    static get WebsocketMessage(): protobuf.Type {
        return this.getType('WebsocketMessage');
    }

    /**
     * 获取 PBPackage 类型
     */
    static get PBPackage(): protobuf.Type {
        return this.getType('PBPackage');
    }
}
