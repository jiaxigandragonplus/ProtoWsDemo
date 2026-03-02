/**
 * Proto 加载器
 * 在 Node.js 环境中使用 protobufjs 动态加载 proto 文件
 */

import * as protobuf from 'protobufjs';
import * as path from 'path';

/**
 * Proto 加载器类
 */
export class ProtoLoader {
    private static root: protobuf.Root | null = null;
    private static protoPath: string;

    /**
     * 获取 proto 文件路径
     */
    private static getProtoPath(): string {
        if (!this.protoPath) {
            // __dirname 在编译后是 dist/src/gate，需要向上三层到项目根目录
            this.protoPath = path.join(__dirname, '../../../protobuf/proto/test.proto');
        }
        return this.protoPath;
    }

    /**
     * 获取 root，如果未加载则同步加载
     */
    static getRoot(): protobuf.Root {
        if (!this.root) {
            this.root = protobuf.loadSync(this.getProtoPath());
        }
        return this.root;
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
            this.root = await protobuf.load(this.getProtoPath());
        }
    }

    /**
     * 同步加载 proto 文件
     */
    static loadProtoSync(): void {
        if (!this.root) {
            this.root = protobuf.loadSync(this.getProtoPath());
        }
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
}
