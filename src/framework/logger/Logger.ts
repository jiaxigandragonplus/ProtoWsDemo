/**
 * 日志模块
 * 支持输出到文件和控制台，有清晰的日志等级，支持文件切分
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * 日志等级枚举
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
}

/**
 * 日志等级字符串映射
 */
const LogLevelString: Record<LogLevel, string> = {
  [LogLevel.DEBUG]: 'DEBUG',
  [LogLevel.INFO]: 'INFO',
  [LogLevel.WARN]: 'WARN',
  [LogLevel.ERROR]: 'ERROR',
  [LogLevel.FATAL]: 'FATAL',
};

/**
 * 解析日志等级字符串
 */
export function parseLogLevel(level: string): LogLevel {
  const upper = level.toUpperCase();
  switch (upper) {
    case 'DEBUG': return LogLevel.DEBUG;
    case 'INFO': return LogLevel.INFO;
    case 'WARN': return LogLevel.WARN;
    case 'ERROR': return LogLevel.ERROR;
    case 'FATAL': return LogLevel.FATAL;
    default: return LogLevel.INFO;
  }
}

/**
 * 日志条目接口
 */
export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  module?: string;
  error?: Error;
}

/**
 * 日志配置接口
 */
export interface LoggerConfig {
  level: LogLevel | string;
  console: boolean;
  file: {
    enabled: boolean;
    path: string;
    maxSize: number;
    maxFiles: number;
  };
}

/**
 * 日志记录器类
 */
export class Logger {
  private config: LoggerConfig;
  private parsedLevel: LogLevel = LogLevel.INFO;
  private currentFileSize: number = 0;
  private currentLogStream: fs.WriteStream | null = null;
  private currentFileName: string = '';
  private writeQueue: Array<{ content: string; callback?: () => void }> = [];
  private isWriting: boolean = false;

  constructor(config?: Partial<LoggerConfig>) {
    this.config = {
      level: LogLevel.INFO,
      console: true,
      file: {
        enabled: false,
        path: './logs',
        maxSize: 10 * 1024 * 1024, // 10MB
        maxFiles: 10,
      },
      ...config,
    };
  }

  /**
   * 初始化日志器
   */
  public init(config: Partial<LoggerConfig>): void {
    this.config = {
      ...this.config,
      ...config,
    };
    // 解析 level
    if (typeof this.config.level === 'string') {
      this.parsedLevel = parseLogLevel(this.config.level);
    } else {
      this.parsedLevel = this.config.level ?? LogLevel.INFO;
    }
  }

  /**
   * 设置日志等级
   */
  public setLevel(level: LogLevel | string): void {
    if (typeof level === 'string') {
      this.parsedLevel = parseLogLevel(level);
    } else {
      this.parsedLevel = level;
    }
  }

  /**
   * 获取当前日志等级
   */
  public getLevel(): LogLevel {
    return this.parsedLevel;
  }

  /**
   * 生成日志文件名
   */
  private generateLogFileName(): string {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
    return `server-${dateStr}-${timeStr}.log`;
  }

  /**
   * 获取当前日志文件路径
   */
  private getLogFilePath(): string {
    return path.join(this.config.file.path, this.currentFileName);
  }

  /**
   * 检查并切换日志文件
   */
  private checkAndRotateLog(): void {
    if (!this.config.file.enabled) return;

    if (this.currentFileSize >= this.config.file.maxSize) {
      this.closeLogStream();
      this.currentFileName = this.generateLogFileName();
      this.currentFileSize = 0;
      this.cleanOldLogFiles();
    }
  }

  /**
   * 清理旧的日志文件
   */
  private cleanOldLogFiles(): void {
    const logDir = this.config.file.path;
    if (!fs.existsSync(logDir)) return;

    const files = fs.readdirSync(logDir)
      .filter(f => f.startsWith('server-') && f.endsWith('.log'))
      .map(f => ({
        name: f,
        time: fs.statSync(path.join(logDir, f)).mtime.getTime(),
      }))
      .sort((a, b) => b.time - a.time);

    // 删除超出数量的旧文件
    for (let i = this.config.file.maxFiles; i < files.length; i++) {
      fs.unlinkSync(path.join(logDir, files[i].name));
    }
  }

  /**
   * 获取或创建日志流
   */
  private getLogStream(): fs.WriteStream | null {
    if (!this.config.file.enabled) return null;

    if (!this.currentLogStream) {
      const logDir = this.config.file.path;
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }

      if (!this.currentFileName) {
        this.currentFileName = this.generateLogFileName();
        // 检查是否有当天的日志文件
        const dateStr = new Date().toISOString().split('T')[0];
        const files = fs.readdirSync(logDir)
          .filter(f => f.startsWith('server-') && f.startsWith(`server-${dateStr}`));
        
        if (files.length > 0) {
          // 使用最新的当天文件
          const latestFile = files[files.length - 1];
          const stats = fs.statSync(path.join(logDir, latestFile));
          this.currentFileSize = stats.size;
          this.currentFileName = latestFile;
        } else {
          this.currentFileSize = 0;
        }
      }

      this.currentLogStream = fs.createWriteStream(this.getLogFilePath(), { flags: 'a' });
      this.currentLogStream.on('error', (err) => {
        console.error('日志文件写入错误:', err);
      });
    }

    return this.currentLogStream;
  }

  /**
   * 关闭日志流
   */
  private closeLogStream(): void {
    if (this.currentLogStream) {
      this.currentLogStream.end();
      this.currentLogStream = null;
    }
  }

  /**
   * 写入日志到文件
   */
  private writeToFile(content: string): void {
    if (!this.config.file.enabled) return;

    const stream = this.getLogStream();
    if (!stream) return;

    this.checkAndRotateLog();

    // 重新获取流（可能已经切换）
    const currentStream = this.getLogStream();
    if (!currentStream) return;

    this.writeQueue.push({ content });
    this.processWriteQueue();
  }

  /**
   * 处理写入队列
   */
  private processWriteQueue(): void {
    if (this.isWriting || this.writeQueue.length === 0) return;

    this.isWriting = true;
    const stream = this.getLogStream();

    if (!stream) {
      this.isWriting = false;
      return;
    }

    const item = this.writeQueue.shift();
    if (!item) {
      this.isWriting = false;
      return;
    }

    const buffer = Buffer.from(item.content);
    this.currentFileSize += buffer.length;

    stream.write(buffer, (err) => {
      if (err) {
        console.error('日志写入错误:', err);
      }
      this.isWriting = false;
      if (this.writeQueue.length > 0) {
        this.processWriteQueue();
      }
    });
  }

  /**
   * 格式化日志消息
   */
  private formatLog(entry: LogEntry): string {
    const levelStr = LogLevelString[entry.level];
    const timestamp = entry.timestamp.toISOString();
    const module = entry.module ? `[${entry.module}]` : '';
    let message = entry.message;

    if (entry.error) {
      message += `\n${entry.error.stack || entry.error.message}`;
    }

    return `[${timestamp}] [${levelStr}] ${module}${message}\n`;
  }

  /**
   * 输出日志
   */
  private log(entry: LogEntry): void {
    if (entry.level < this.parsedLevel) return;

    const content = this.formatLog(entry);

    // 输出到控制台
    if (this.config.console) {
      const output = entry.level >= LogLevel.ERROR ? console.error : console.log;
      output(content.trim());
    }

    // 输出到文件
    if (this.config.file.enabled) {
      this.writeToFile(content);
    }
  }

  /**
   * DEBUG 级别日志
   */
  public debug(message: string, module?: string): void {
    this.log({
      level: LogLevel.DEBUG,
      message,
      timestamp: new Date(),
      module,
    });
  }

  /**
   * INFO 级别日志
   */
  public info(message: string, module?: string): void {
    this.log({
      level: LogLevel.INFO,
      message,
      timestamp: new Date(),
      module,
    });
  }

  /**
   * WARN 级别日志
   */
  public warn(message: string, module?: string): void {
    this.log({
      level: LogLevel.WARN,
      message,
      timestamp: new Date(),
      module,
    });
  }

  /**
   * ERROR 级别日志
   */
  public error(message: string, error?: Error, module?: string): void {
    this.log({
      level: LogLevel.ERROR,
      message,
      timestamp: new Date(),
      module,
      error,
    });
  }

  /**
   * FATAL 级别日志
   */
  public fatal(message: string, error?: Error, module?: string): void {
    this.log({
      level: LogLevel.FATAL,
      message,
      timestamp: new Date(),
      module,
      error,
    });
  }

  /**
   * 关闭日志器
   */
  public close(): void {
    // 等待队列写入完成
    const waitForQueue = () => {
      if (this.writeQueue.length > 0 || this.isWriting) {
        setTimeout(waitForQueue, 100);
        return;
      }
      this.closeLogStream();
    };
    waitForQueue();
  }
}

/**
 * 默认日志器实例
 */
export const defaultLogger = new Logger();
