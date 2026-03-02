const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
// 颜色输出
const colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    reset: '\x1b[0m'
};

// 日志输出函数
function cclog(text, color = 'white') {
    console.log(`${colors[color]}${text}${colors.reset}`);
}

// 执行命令函数
function executeCommon(command) {
    try {
        console.log(`执行命令：${command}`);
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        cclog(`命令执行失败：${command}`, 'red');
        process.exit(1);
    }
}

function modifyProtoJS(jsPath) {
    cclog("修改 js 文件");
    const content = fs.readFileSync(jsPath, "utf-8");
    // 使用 var $protobuf = protobuf; 替换掉 var $protobuf = require("protobufjs/minimal");
    const newContent = content.replace(`var $protobuf = require("protobufjs/minimal");`, "var $protobuf = protobuf;");
    fs.writeFileSync(jsPath, newContent);
    cclog("修改 protojs 完成");
}

/**
 * 简化 .d.ts 文件，只保留必要的类型定义
 * 移除多余的方法，只保留 interface、class、constructor、encode、decode
 */
function simplifyDtsFile(filePath) {
    cclog('简化 .d.ts 文件...', 'cyan');
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 移除 create, encodeDelimited, decodeDelimited, verify, fromObject, toObject, toJSON, getTypeUrl 等方法
    // 只保留 interface, class, constructor, encode, decode
    
    // 按行处理
    const lines = content.split('\n');
    const keepPatterns = [
        /^export interface I\w+/,
        /^export class \w+/,
        /constructor\(/,
        /public static encode\(/,
        /public static decode\(/,
        /public \w+: /,  // 属性声明
        /^\}/,  // 结束大括号
        /^$/,   // 空行
        /import/,
        /Long = require/
    ];
    
    const result = [];
    let currentClass = '';
    let inClass = false;
    
    for (const line of lines) {
        // 检测 class 开始
        const classMatch = line.match(/^export class (\w+)/);
        if (classMatch) {
            currentClass = classMatch[1];
            inClass = true;
            result.push(line);
            continue;
        }
        
        // 检测 class 结束
        if (inClass && line.trim() === '}') {
            inClass = false;
            result.push(line);
            continue;
        }
        
        // 在 class 内部，只保留特定行
        if (inClass) {
            let shouldKeep = false;
            for (const pattern of keepPatterns) {
                if (pattern.test(line)) {
                    shouldKeep = true;
                    break;
                }
            }
            if (shouldKeep) {
                result.push(line);
            }
        } else {
            // 不在 class 内部，保留所有行
            result.push(line);
        }
    }
    
    // 移除连续的空行
    let prevEmpty = false;
    const finalResult = [];
    for (const line of result) {
        if (line.trim() === '') {
            if (!prevEmpty) {
                finalResult.push(line);
            }
            prevEmpty = true;
        } else {
            finalResult.push(line);
            prevEmpty = false;
        }
    }
    
    fs.writeFileSync(filePath, finalResult.join('\n'));
    cclog('简化 .d.ts 文件完成', 'green');
}

/**
 * 解析 proto 文件，提取所有消息类型
 */
function parseProtoFile(protoPath) {
    const content = fs.readFileSync(protoPath, 'utf-8');
    const messages = [];
    
    // 匹配 message 定义
    const messageRegex = /message\s+(\w+)\s*\{/g;
    let match;
    while ((match = messageRegex.exec(content)) !== null) {
        messages.push(match[1]);
    }
    
    return messages;
}

/**
 * 生成 MessageRegistry.ts 文件
 */
function generateMessageRegistry(messages, outputPath) {
    // 过滤出客户端消息（以 C 开头）
    const clientMessages = messages.filter(name => name.startsWith('C') && name.length > 1);
    
    // 生成 MESSAGE_ID_CONFIG
    const configEntries = clientMessages.map((name, index) => {
        // 使用奇数作为客户端消息 ID（1, 3, 5, 7...）
        const messageId = index * 2 + 1;
        return `    '${name}': ${messageId}`;
    }).join(',\n');
    
    const content = `import { PlayerSession } from './PlayerSession';
import * as protobuf from 'protobufjs';

/**
 * 消息处理器类型定义
 */
export type MessageHandlerFn = (session: PlayerSession, data: Uint8Array, protoType: protobuf.Type) => void;

/**
 * 消息 ID 配置
 * 在这里定义所有客户端消息的 ID
 * 命名约定：客户端消息以 C 开头，处理器方法名为 handle + 去掉首字母的消息名
 *
 * 此文件由 AutoExport.js 自动生成，请勿手动修改！
 */
const MESSAGE_ID_CONFIG: Record<string, number> = {
${configEntries}
};

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
    private static handlerMap = new Map<number, { handler: MessageHandlerFn, protoType: protobuf.Type }>();
    private static messageIdMap = new Map<string, number>();

    /**
     * 注册消息处理器
     * @param messageId 消息 ID
     * @param protoTypeName Proto 消息类型名（如 'CLogin'）
     * @param protoType Proto 类型对象
     * @param handler 处理函数
     */
    static register(
        messageId: number,
        protoTypeName: string,
        protoType: protobuf.Type,
        handler: MessageHandlerFn
    ): void {
        this.handlerMap.set(messageId, { handler, protoType });
        this.messageIdMap.set(protoTypeName, messageId);
        console.log(\`[MessageRegistry] 注册消息：\${protoTypeName} -> ID:\${messageId}\`);
    }

    /**
     * 根据消息 ID 获取处理器
     */
    static getHandler(messageId: number): { handler: MessageHandlerFn, protoType: protobuf.Type } | null {
        return this.handlerMap.get(messageId) || null;
    }

    /**
     * 根据 Proto 类型名获取消息 ID
     */
    static getMessageId(protoTypeName: string): number | undefined {
        return this.messageIdMap.get(protoTypeName);
    }

    /**
     * 从 ProtoLoader 自动发现并注册所有 C* 开头的消息
     * @param protoLoader ProtoLoader 类
     * @param handlerClass MessageHandler 类
     */
    static autoRegisterFromProto(
        protoLoader: typeof import('./ProtoLoader').ProtoLoader,
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
                const handlerMethodName = \`handle\${messageName}\`;
                
                const handlerMethod = (handlerClass as any)[handlerMethodName];
                if (handlerMethod) {
                    const protoType = protoLoader.getType(typeName);
                    
                    // 从配置中获取消息 ID
                    const messageId = MESSAGE_ID_CONFIG[typeName];
                    
                    if (messageId !== undefined) {
                        this.register(messageId, typeName, protoType, handlerMethod.bind(handlerClass));
                    } else {
                        console.warn(\`[MessageRegistry] 消息 \${typeName} 未在 MESSAGE_ID_CONFIG 中定义 ID\`);
                    }
                } else {
                    console.warn(\`[MessageRegistry] 未找到处理器方法：\${handlerMethodName}，消息：\${typeName}\`);
                }
            }
        }
    }

    /**
     * 获取所有已注册的消息 ID
     */
    static getAllMessageIds(): number[] {
        return Array.from(this.handlerMap.keys());
    }

    /**
     * 清空注册表（主要用于测试）
     */
    static clear(): void {
        this.handlerMap.clear();
        this.messageIdMap.clear();
    }
}
`;

    fs.writeFileSync(outputPath, content);
    cclog(`生成 MessageRegistry.ts 成功`, 'green');
}

// 主函数
function main() {
    // 修改当前工作目录为脚本所在目录
    process.chdir(__dirname);

    // 设置路径
    const absPath = process.cwd();
    const jsOutputDir = path.join(absPath, 'js');
    const tsOutputDir = path.join(absPath, 'ts');
    const protoDir = path.join(absPath, 'proto');
    
    // 确保输出目录存在
    if (!fs.existsSync(jsOutputDir)) {
        fs.mkdirSync(jsOutputDir, { recursive: true });
        cclog(`创建 JS 输出目录：${jsOutputDir}`, 'cyan');
    }
    if (!fs.existsSync(tsOutputDir)) {
        fs.mkdirSync(tsOutputDir, { recursive: true });
        cclog(`创建 TS 输出目录：${tsOutputDir}`, 'cyan');
    }
    
    const jsPath = path.join(jsOutputDir, 'proto.js');
    const tsPath = path.join(tsOutputDir, 'proto.d.ts');
    const protoPath = '*.proto';
    
    // 临时文件路径（用于生成完整的类型定义）
    const tempJsPath = path.join(jsOutputDir, 'proto_temp.js');

    // 1. 先生成完整的 js 文件（用于生成类型定义，保留注释）
    // 使用 proto 目录而不是通配符，确保路径正确
    const protoFilesList = fs.readdirSync(protoDir).filter(f => f.endsWith('.proto')).map(f => path.join(protoDir, f)).join(' ');
    const fullJsCommand = `npx pbjs -t static-module -w commonjs -o ${tempJsPath} ${protoFilesList}`;
    executeCommon(fullJsCommand);
    cclog('生成完整 js 文件成功', 'green');
    
    // 2. 生成.d.ts 文件（使用 --no-comments 生成简洁版本）
    // 使用绝对路径
    const tsCommand = `npx pbts --no-comments -o ${tsPath} ${tempJsPath}`;
    executeCommon(tsCommand);
    cclog('生成.d.ts 文件成功', 'green');
    
    // 验证 .d.ts 文件是否生成成功
    if (!fs.existsSync(tsPath) || fs.statSync(tsPath).size === 0) {
        cclog('错误：.d.ts 文件未生成或为空', 'red');
        process.exit(1);
    }
    
    // 3. 简化 .d.ts 文件，只保留必要的类型定义
    simplifyDtsFile(tsPath);
    
    // 删除临时文件
    fs.unlinkSync(tempJsPath);

    // 3. 生成精简版 js 文件（用于服务器端运行时）
    const jsCommand = `npx pbjs -t static-module -w commonjs -o ${jsPath} --no-verify --no-convert --no-delimited --no-beautify --no-create --no-typeurl --force-number ${protoPath}`;
    executeCommon(jsCommand);
    cclog('生成精简 js 文件成功', 'green');

    modifyProtoJS(jsPath);
    
    // 4. 压缩 proto.js 文件
    const uglifyCommand = `npx uglifyjs ${jsPath} -o ${jsPath}`;
    executeCommon(uglifyCommand);
    cclog('proto 文件转换完成', 'green');

    // 5. 解析 proto 文件并生成 MessageRegistry.ts
    cclog('生成 MessageRegistry.ts...', 'cyan');
    const protoFiles = fs.readdirSync(protoDir).filter(f => f.endsWith('.proto'));
    const allMessages = [];
    for (const protoFile of protoFiles) {
        const messages = parseProtoFile(path.join(protoDir, protoFile));
        allMessages.push(...messages);
    }
    
    // 生成 MessageRegistry.ts 到 src/gate 目录
    const registryPath = path.join(absPath, '../src/gate/MessageRegistry.ts');
    generateMessageRegistry(allMessages, registryPath);
}

// 执行主函数
main();
