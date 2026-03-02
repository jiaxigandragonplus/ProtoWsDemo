import * as protobuf from 'protobufjs';
import * as path from 'path';

/**
 * Proto 加载器
 * 负责加载和管理 protobuf 协议文件
 */
export class ProtoLoader {
    private static root: protobuf.Root | null = null;
    private static gameProtoPath: string;
    private static gateGameProtoPath: string;

    /**
     * 获取 proto 文件路径
     */
    private static getProtoPaths(): { game: string, gateGame: string } {
        if (!this.gameProtoPath) {
            // __dirname 在编译后是 dist/src/game，需要向上三层到项目根目录
            this.gameProtoPath = path.join(__dirname, '../../../protobuf/proto/game.proto');
        }
        if (!this.gateGameProtoPath) {
            this.gateGameProtoPath = path.join(__dirname, '../../../protobuf/proto/gate_game.proto');
        }
        return { game: this.gameProtoPath, gateGame: this.gateGameProtoPath };
    }

    /**
     * 获取 root，如果未加载则同步加载
     */
    static getRoot(): protobuf.Root {
        if (!this.root) {
            const paths = this.getProtoPaths();
            this.root = new protobuf.Root();
            this.root.loadSync(paths.game);
            this.root.loadSync(paths.gateGame);
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
            const paths = this.getProtoPaths();
            this.root = new protobuf.Root();
            await this.root.load(paths.game);
            await this.root.load(paths.gateGame);
        }
    }

    /**
     * 同步加载 proto 文件
     */
    static loadProtoSync(): void {
        if (!this.root) {
            const paths = this.getProtoPaths();
            this.root = new protobuf.Root();
            this.root.loadSync(paths.game);
            this.root.loadSync(paths.gateGame);
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

    /**
     * 获取 GateToGame 类型
     */
    static get GateToGame(): protobuf.Type {
        return this.getType('GateToGame');
    }

    /**
     * 获取 GameToGate 类型
     */
    static get GameToGate(): protobuf.Type {
        return this.getType('GameToGate');
    }
}
