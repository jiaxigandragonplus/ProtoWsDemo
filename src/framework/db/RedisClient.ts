/**
 * Redis 客户端封装
 */

import Redis from 'ioredis';
import { Logger } from '../logger/Logger';

/**
 * Redis 配置接口
 */
export interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  db?: number;
  keyPrefix?: string;
}

/**
 * Redis 客户端封装类
 */
export class RedisClient {
  private client: Redis | null = null;
  private config: RedisConfig;
  private logger: Logger;
  private connected: boolean = false;

  constructor(config: RedisConfig, logger?: Logger) {
    this.config = config;
    this.logger = logger || new Logger();
  }

  /**
   * 连接到 Redis
   */
  public async connect(): Promise<void> {
    if (this.connected) {
      this.logger.debug('Redis 已连接，跳过连接', 'RedisClient');
      return;
    }

    try {
      this.client = new Redis({
        host: this.config.host,
        port: this.config.port,
        password: this.config.password,
        db: this.config.db || 0,
        keyPrefix: this.config.keyPrefix || '',
        retryStrategy: (times: number) => {
            if (times > 10) {
              this.logger.error('Redis 重连次数过多，停止重连', new Error('Max retries reached'), 'RedisClient');
              return null;
            }
            const delay = Math.min(times * 50, 2000);
            return delay;
          },
      });

      this.client.on('connect', () => {
        this.connected = true;
        this.logger.info('Redis 连接成功', 'RedisClient');
      });

      this.client.on('error', (err) => {
        this.logger.error('Redis 连接错误', err, 'RedisClient');
      });

      this.client.on('close', () => {
        this.connected = false;
        this.logger.warn('Redis 连接关闭', 'RedisClient');
      });

      // 等待连接
      await new Promise<void>((resolve, reject) => {
        if (this.client?.status === 'ready') {
          resolve();
        } else {
          const timeout = setTimeout(() => {
            reject(new Error('Redis 连接超时'));
          }, 5000);

          this.client?.once('ready', () => {
            clearTimeout(timeout);
            resolve();
          });

          this.client?.once('error', (err) => {
            clearTimeout(timeout);
            reject(err);
          });
        }
      });
    } catch (error) {
      this.logger.error('Redis 连接失败', error as Error, 'RedisClient');
      throw error;
    }
  }

  /**
   * 获取 Redis 客户端实例
   */
  public getClient(): Redis {
    if (!this.client) {
      throw new Error('Redis 未连接，请先调用 connect()');
    }
    return this.client;
  }

  /**
   * 设置字符串值
   */
  public async set(key: string, value: string, expireSeconds?: number): Promise<void> {
    const client = this.getClient();
    if (expireSeconds) {
      await client.setex(key, expireSeconds, value);
    } else {
      await client.set(key, value);
    }
  }

  /**
   * 获取字符串值
   */
  public async get(key: string): Promise<string | null> {
    const client = this.getClient();
    return await client.get(key);
  }

  /**
   * 删除键
   */
  public async del(key: string): Promise<number> {
    const client = this.getClient();
    return await client.del(key);
  }

  /**
   * 检查键是否存在
   */
  public async exists(key: string): Promise<boolean> {
    const client = this.getClient();
    const result = await client.exists(key);
    return result === 1;
  }

  /**
   * 设置过期时间
   */
  public async expire(key: string, seconds: number): Promise<boolean> {
    const client = this.getClient();
    const result = await client.expire(key, seconds);
    return result === 1;
  }

  /**
   * 获取键的剩余过期时间（秒）
   */
  public async ttl(key: string): Promise<number> {
    const client = this.getClient();
    return await client.ttl(key);
  }

  /**
   * 自增
   */
  public async incr(key: string): Promise<number> {
    const client = this.getClient();
    return await client.incr(key);
  }

  /**
   * 自减
   */
  public async decr(key: string): Promise<number> {
    const client = this.getClient();
    return await client.decr(key);
  }

  /**
   * 哈希 - 设置字段值
   */
  public async hset(key: string, field: string, value: string): Promise<number> {
    const client = this.getClient();
    return await client.hset(key, field, value);
  }

  /**
   * 哈希 - 获取字段值
   */
  public async hget(key: string, field: string): Promise<string | null> {
    const client = this.getClient();
    return await client.hget(key, field);
  }

  /**
   * 哈希 - 获取所有字段和值
   */
  public async hgetall(key: string): Promise<Record<string, string>> {
    const client = this.getClient();
    return await client.hgetall(key);
  }

  /**
   * 哈希 - 删除字段
   */
  public async hdel(key: string, field: string): Promise<number> {
    const client = this.getClient();
    return await client.hdel(key, field);
  }

  /**
   * 哈希 - 获取所有字段名
   */
  public async hkeys(key: string): Promise<string[]> {
    const client = this.getClient();
    return await client.hkeys(key);
  }

  /**
   * 列表 - 左侧推入
   */
  public async lpush(key: string, value: string): Promise<number> {
    const client = this.getClient();
    return await client.lpush(key, value);
  }

  /**
   * 列表 - 右侧推入
   */
  public async rpush(key: string, value: string): Promise<number> {
    const client = this.getClient();
    return await client.rpush(key, value);
  }

  /**
   * 列表 - 左侧弹出
   */
  public async lpop(key: string): Promise<string | null> {
    const client = this.getClient();
    return await client.lpop(key);
  }

  /**
   * 列表 - 右侧弹出
   */
  public async rpop(key: string): Promise<string | null> {
    const client = this.getClient();
    return await client.rpop(key);
  }

  /**
   * 列表 - 获取指定范围的元素
   */
  public async lrange(key: string, start: number, stop: number): Promise<string[]> {
    const client = this.getClient();
    return await client.lrange(key, start, stop);
  }

  /**
   * 列表 - 获取列表长度
   */
  public async llen(key: string): Promise<number> {
    const client = this.getClient();
    return await client.llen(key);
  }

  /**
   * 集合 - 添加成员
   */
  public async sadd(key: string, member: string | string[]): Promise<number> {
    const client = this.getClient();
    if (Array.isArray(member)) {
      return await client.sadd(key, ...member);
    }
    return await client.sadd(key, member);
  }

  /**
   * 集合 - 移除成员
   */
  public async srem(key: string, member: string): Promise<number> {
    const client = this.getClient();
    return await client.srem(key, member);
  }

  /**
   * 集合 - 获取所有成员
   */
  public async smembers(key: string): Promise<string[]> {
    const client = this.getClient();
    return await client.smembers(key);
  }

  /**
   * 集合 - 判断成员是否存在
   */
  public async sismember(key: string, member: string): Promise<boolean> {
    const client = this.getClient();
    const result = await client.sismember(key, member);
    return result === 1;
  }

  /**
   * 有序集合 - 添加成员
   */
  public async zadd(key: string, score: number, member: string): Promise<number> {
    const client = this.getClient();
    return await client.zadd(key, score, member);
  }

  /**
   * 有序集合 - 批量添加成员
   */
  public async zaddBatch(key: string, members: { score: number; member: string }[]): Promise<number> {
    const client = this.getClient();
    const args: (number | string)[] = [];
    for (const m of members) {
      args.push(m.score, m.member);
    }
    return await client.zadd(key, ...args);
  }

  /**
   * 有序集合 - 移除成员
   */
  public async zrem(key: string, member: string): Promise<number> {
    const client = this.getClient();
    return await client.zrem(key, member);
  }

  /**
   * 有序集合 - 获取成员的分数
   */
  public async zscore(key: string, member: string): Promise<string | null> {
    const client = this.getClient();
    return await client.zscore(key, member);
  }

  /**
   * 有序集合 - 获取排名（从低到高）
   */
  public async zrank(key: string, member: string): Promise<number | null> {
    const client = this.getClient();
    return await client.zrank(key, member);
  }

  /**
   * 有序集合 - 获取排名（从高到低）
   */
  public async zrevrank(key: string, member: string): Promise<number | null> {
    const client = this.getClient();
    return await client.zrevrank(key, member);
  }

  /**
   * 有序集合 - 获取指定分数范围的成员
   */
  public async zrangebyscore(
    key: string,
    min: number | string,
    max: number | string,
    withScores?: boolean
  ): Promise<string[]> {
    const client = this.getClient();
    if (withScores) {
      return await client.zrangebyscore(key, min, max, 'WITHSCORES');
    }
    return await client.zrangebyscore(key, min, max);
  }

  /**
   * 有序集合 - 按分数从高到低获取指定范围的成员
   */
  public async zrevrange(
    key: string,
    start: number,
    stop: number,
    withScores?: boolean
  ): Promise<string[]> {
    const client = this.getClient();
    if (withScores) {
      return await client.zrevrange(key, start, stop, 'WITHSCORES');
    }
    return await client.zrevrange(key, start, stop);
  }

  /**
   * 有序集合 - 获取集合大小
   */
  public async zcard(key: string): Promise<number> {
    const client = this.getClient();
    return await client.zcard(key);
  }

  /**
   * 有序集合 - 获取指定排名范围的成员（从高到低）
   */
  public async zrevrangebyscore(
    key: string,
    max: number | string,
    min: number | string,
    withScores?: boolean
  ): Promise<string[]> {
    const client = this.getClient();
    if (withScores) {
      return await client.zrevrangebyscore(key, max, min, 'WITHSCORES');
    }
    return await client.zrevrangebyscore(key, max, min);
  }

  /**
   * 发布消息
   */
  public async publish(channel: string, message: string): Promise<number> {
    const client = this.getClient();
    return await client.publish(channel, message);
  }

  /**
   * 订阅频道
   */
  public subscribe(channel: string, callback: (message: string) => void): void {
    const client = this.getClient();
    client.subscribe(channel);
    client.on('message', (ch, message) => {
      if (ch === channel) {
        callback(message);
      }
    });
  }

  /**
   * 检查连接状态
   */
  public isConnected(): boolean {
    return this.connected;
  }

  /**
   * 关闭连接
   */
  public async close(): Promise<void> {
    if (this.client) {
      await this.client.quit();
      this.client = null;
      this.connected = false;
      this.logger.info('Redis 连接已关闭', 'RedisClient');
    }
  }
}
