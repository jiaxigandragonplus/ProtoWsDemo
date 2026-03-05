/**
 * MongoDB 数据库客户端封装
 */

import { MongoClient as MongoDriverClient, Db, Collection, Document, ObjectId } from 'mongodb';
import { Logger } from '../logger/Logger';

/**
 * MongoDB 配置接口
 */
export interface MongoConfig {
  uri: string;
  dbName?: string;
  options?: Record<string, any>;
}

/**
 * MongoDB 客户端封装类
 */
export class MongoClient {
  private client: MongoDriverClient | null = null;
  private db: Db | null = null;
  private config: MongoConfig;
  private logger: Logger;
  private connected: boolean = false;

  constructor(config: MongoConfig, logger?: Logger) {
    this.config = config;
    this.logger = logger || new Logger();
  }

  /**
   * 连接到 MongoDB
   */
  public async connect(): Promise<void> {
    if (this.connected) {
      this.logger.debug('MongoDB 已连接，跳过连接', 'MongoClient');
      return;
    }

    try {
      const options = {
        maxPoolSize: 10,
        minPoolSize: 5,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        ...this.config.options,
      };

      this.client = new MongoDriverClient(this.config.uri, options);
      
      // 连接客户端
      await this.client.connect();
      this.db = this.client.db(this.config.dbName);
      this.connected = true;

      this.logger.info(`MongoDB 连接成功：${this.config.uri}`, 'MongoClient');
    } catch (error) {
      this.logger.error('MongoDB 连接失败', error as Error, 'MongoClient');
      throw error;
    }
  }

  /**
   * 获取数据库实例
   */
  public getDb(): Db {
    if (!this.db) {
      throw new Error('MongoDB 未连接，请先调用 connect()');
    }
    return this.db;
  }

  /**
   * 获取集合
   */
  public getCollection<T extends Document = Document>(name: string): Collection<T> {
    return this.getDb().collection<T>(name);
  }

  /**
   * 插入文档
   */
  public async insert<T extends Document = Document>(
    collection: string,
    doc: T
  ): Promise<ObjectId> {
    const col = this.getCollection<T>(collection);
    const result = await col.insertOne(doc as any);
    return result.insertedId;
  }

  /**
   * 批量插入文档
   */
  public async insertMany<T extends Document = Document>(
    collection: string,
    docs: T[]
  ): Promise<ObjectId[]> {
    const col = this.getCollection<T>(collection);
    const result = await col.insertMany(docs as any);
    return Object.values(result.insertedIds);
  }

  /**
   * 查询单个文档
   */
  public async findOne<T extends Document = Document>(
    collection: string,
    filter: Record<string, any>,
    options?: Record<string, any>
  ): Promise<T | null> {
    const col = this.getCollection<T>(collection);
    return await col.findOne<T>(filter, options);
  }

  /**
   * 查询多个文档
   */
  public async find<T extends Document = Document>(
    collection: string,
    filter: Record<string, any>,
    options?: Record<string, any>
  ): Promise<T[]> {
    const col = this.getCollection<T>(collection);
    return await col.find<T>(filter, options).toArray();
  }

  /**
   * 更新文档
   */
  public async updateOne(
    collection: string,
    filter: Record<string, any>,
    update: Record<string, any>
  ): Promise<boolean> {
    const col = this.getCollection(collection);
    const result = await col.updateOne(filter, { $set: update });
    return result.matchedCount > 0;
  }

  /**
   * 更新或插入文档
   */
  public async upsertOne(
    collection: string,
    filter: Record<string, any>,
    update: Record<string, any>
  ): Promise<void> {
    const col = this.getCollection(collection);
    await col.updateOne(filter, { $set: update }, { upsert: true });
  }

  /**
   * 删除文档
   */
  public async deleteOne(
    collection: string,
    filter: Record<string, any>
  ): Promise<boolean> {
    const col = this.getCollection(collection);
    const result = await col.deleteOne(filter);
    return result.deletedCount > 0;
  }

  /**
   * 批量删除文档
   */
  public async deleteMany(
    collection: string,
    filter: Record<string, any>
  ): Promise<number> {
    const col = this.getCollection(collection);
    const result = await col.deleteMany(filter);
    return result.deletedCount;
  }

  /**
   * 计数
   */
  public async count(
    collection: string,
    filter?: Record<string, any>
  ): Promise<number> {
    const col = this.getCollection(collection);
    return await col.countDocuments(filter || {});
  }

  /**
   * 聚合查询
   */
  public async aggregate<T = any>(
    collection: string,
    pipeline: any[]
  ): Promise<T[]> {
    const col = this.getCollection(collection);
    return await col.aggregate<T>(pipeline).toArray();
  }

  /**
   * 创建索引
   */
  public async createIndex(
    collection: string,
    keys: Record<string, 1 | -1 | '2d' | '2dsphere' | 'hashed' | 'text'>,
    options?: Record<string, any>
  ): Promise<string> {
    const col = this.getCollection(collection);
    return await col.createIndex(keys, options);
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
      await this.client.close();
      this.client = null;
      this.db = null;
      this.connected = false;
      this.logger.info('MongoDB 连接已关闭', 'MongoClient');
    }
  }
}
