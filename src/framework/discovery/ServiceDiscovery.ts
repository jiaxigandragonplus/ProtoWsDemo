/**
 * 服务发现模块
 * 基于 Redis zSet 实现，定时轮询服务列表
 */

import { RedisClient } from '../db/RedisClient';
import { Logger } from '../logger/Logger';

/**
 * 服务实例信息
 */
export interface ServiceInstance {
  id: number;
  name: string;
  host: string;
  port: number;
  weight?: number; // 权重，用于负载均衡
  metadata?: Record<string, any>; // 元数据
  lastHeartbeat: number; // 最后心跳时间戳
}

/**
 * 服务发现配置
 */
export interface DiscoveryConfig {
  serviceName: string;
  instanceId: number;
  host: string;
  port: number;
  weight?: number;
  metadata?: Record<string, any>;
  heartbeatInterval: number; // 心跳间隔（毫秒）
  discoveryInterval: number; // 服务发现轮询间隔（毫秒）
  instanceTimeout: number; // 实例超时时间（毫秒）
}

/**
 * 服务变化事件
 */
export interface ServiceChangeEvent {
  serviceName: string;
  instances: ServiceInstance[];
}

/**
 * 服务发现类
 */
export class ServiceDiscovery {
  private redisClient: RedisClient;
  private logger: Logger;
  private config: DiscoveryConfig;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private discoveryTimer: NodeJS.Timeout | null = null;
  private isRunning: boolean = false;
  private currentInstances: ServiceInstance[] = [];

  // Redis key 前缀
  private static readonly SERVICE_KEY_PREFIX = 'services';
  private static readonly SERVICE_INSTANCE_KEY = 'instance';

  constructor(redisClient: RedisClient, config: DiscoveryConfig, logger?: Logger) {
    this.redisClient = redisClient;
    this.config = config;
    this.logger = logger || new Logger();
  }

  /**
   * 生成服务 zSet 的 key
   */
  private getServiceKey(): string {
    return `${ServiceDiscovery.SERVICE_KEY_PREFIX}`;
  }

  /**
   * 生成服务实例数据的 key
   */
  private getInstanceKey(instanceId: number): string {
    return `${this.getServiceKey()}:${ServiceDiscovery.SERVICE_INSTANCE_KEY}:${instanceId}`;
  }

  private getDiscoveryKey() : string {
    return 'discovery:';
  }

  /**
   * 启动服务发现
   */
  public start(): void {
    if (this.isRunning) {
      this.logger.warn('服务发现已在运行中', 'ServiceDiscovery');
      return;
    }

    this.isRunning = true;
    this.logger.info(`启动服务发现：${this.config.serviceName}`, 'ServiceDiscovery');

    // 注册自己
    this.registerSelf();

    // 启动心跳
    this.startHeartbeat();

    // 启动服务发现轮询
    this.startDiscovery();
  }

  /**
   * 注册自己到服务列表
   */
  private async registerSelf(): Promise<void> {
    const serviceKey = this.getServiceKey();
    const instanceKey = this.getInstanceKey(this.config.instanceId);
    const now = Date.now();

    // 存储实例详细信息
    const instanceData: Omit<ServiceInstance, 'lastHeartbeat'> = {
      id: this.config.instanceId,
      name: this.config.serviceName,
      host: this.config.host,
      port: this.config.port,
      weight: this.config.weight || 1,
      metadata: this.config.metadata || {},
    };

    await this.redisClient.set(instanceKey, JSON.stringify(instanceData));

    // 添加到服务 zSet，分数为当前时间戳
    await this.redisClient.zadd(serviceKey, now, this.config.instanceId.toString());

    this.logger.info(
      `注册服务实例：${this.config.serviceName}/${this.config.instanceId} @ ${this.config.host}:${this.config.port}`,
      'ServiceDiscovery'
    );
  }

  /**
   * 启动心跳
   */
  private startHeartbeat(): void {
    const interval = this.config.heartbeatInterval || 5000;

    this.heartbeatTimer = setInterval(async () => {
      try {
        await this.heartbeat();
      } catch (error) {
        this.logger.error('心跳失败', error as Error, 'ServiceDiscovery');
      }
    }, interval);

    this.logger.debug(`心跳定时器启动，间隔 ${interval}ms`, 'ServiceDiscovery');
  }

  /**
   * 心跳
   */
  private async heartbeat(): Promise<void> {
    const serviceKey = this.getServiceKey();
    const now = Date.now();

    // 更新 zSet 中的分数
    await this.redisClient.zadd(serviceKey, now, this.config.instanceId.toString());

    // 更新实例信息中的最后心跳时间
    const instanceKey = this.getInstanceKey(this.config.instanceId);
    const instanceData = await this.redisClient.get(instanceKey);
    
    if (instanceData) {
      const data = JSON.parse(instanceData);
      data.lastHeartbeat = now;
      await this.redisClient.set(instanceKey, JSON.stringify(data));
    }

    this.logger.debug(`心跳：${this.config.serviceName}/${this.config.instanceId}`, 'ServiceDiscovery');
  }

  /**
   * 启动服务发现轮询
   */
  private startDiscovery(): void {
    const interval = this.config.discoveryInterval || 10000;

    this.discoveryTimer = setInterval(async () => {
      try {
        await this.discoverServices();
      } catch (error) {
        this.logger.error('服务发现失败', error as Error, 'ServiceDiscovery');
      }
    }, interval);

    this.logger.debug(`服务发现定时器启动，间隔 ${interval}ms`, 'ServiceDiscovery');
  }

  /**
   * 发现服务
   */
  private async discoverServices(): Promise<void> {
    const serviceKey = this.getServiceKey();
    const now = Date.now();
    const timeout = this.config.instanceTimeout || 30000;

    // 获取所有服务实例（按分数排序，最新的在前）
    const instances = await this.redisClient.zrevrangebyscore(serviceKey, '+inf', '-inf', true);
    
    const validInstances: ServiceInstance[] = [];
    const expiredInstanceIds: string[] = [];

    // 解析实例信息
    for (let i = 0; i < instances.length; i += 2) {
      const instanceId = instances[i];
      const score = parseInt(instances[i + 1], 10);
      
      // 检查是否超时
      if (now - score > timeout) {
        expiredInstanceIds.push(instanceId);
        continue;
      }

      // 获取实例详细信息
      const instanceKey = this.getInstanceKey(parseInt(instanceId));
      const instanceData = await this.redisClient.get(instanceKey);
      
      if (instanceData) {
        const data = JSON.parse(instanceData) as ServiceInstance;
        data.lastHeartbeat = score;
        validInstances.push(data);
      }
    }

    // 清理超时实例
    for (const instanceId of expiredInstanceIds) {
      await this.redisClient.zrem(serviceKey, instanceId);
      const instanceKey = this.getInstanceKey(parseInt(instanceId));
      await this.redisClient.del(instanceKey);
      this.logger.info(`移除超时服务实例：${instanceId}`, 'ServiceDiscovery');
    }

    // 检查服务列表是否变化
    const hasChanged = this.hasInstancesChanged(validInstances);
    if (hasChanged) {
      this.currentInstances = validInstances;
      this.emit('change', {
        serviceName: this.config.serviceName,
        instances: validInstances,
      });
      this.logger.debug(
        `服务列表更新：${this.config.serviceName}, 实例数：${validInstances.length}`,
        'ServiceDiscovery'
      );
    }
  }

  /**
   * 检查实例列表是否变化
   */
  private hasInstancesChanged(newInstances: ServiceInstance[]): boolean {
    if (newInstances.length !== this.currentInstances.length) {
      return true;
    }

    const oldIds = new Set(this.currentInstances.map(i => i.id));
    const newIds = new Set(newInstances.map(i => i.id));

    if (oldIds.size !== newIds.size) {
      return true;
    }

    for (const id of newIds) {
      if (!oldIds.has(id)) {
        return true;
      }
    }

    return false;
  }

  /**
   * 获取当前服务实例列表
   */
  public getInstances(): ServiceInstance[] {
    return [...this.currentInstances];
  }

  /**
   * 获取健康的实例数量
   */
  public getInstanceCount(): number {
    return this.currentInstances.length;
  }

  /**
   * 选择一个实例（轮询）
   */
  public selectInstance(): ServiceInstance | null {
    if (this.currentInstances.length === 0) {
      return null;
    }

    // 简单的轮询选择
    const index = Math.floor(Math.random() * this.currentInstances.length);
    return this.currentInstances[index];
  }

  /**
   * 选择一个实例（加权轮询）
   */
  public selectInstanceByWeight(): ServiceInstance | null {
    if (this.currentInstances.length === 0) {
      return null;
    }

    // 计算总权重
    const totalWeight = this.currentInstances.reduce((sum, inst) => sum + (inst.weight || 1), 0);
    let random = Math.random() * totalWeight;

    for (const inst of this.currentInstances) {
      random -= (inst.weight || 1);
      if (random <= 0) {
        return inst;
      }
    }

    return this.currentInstances[this.currentInstances.length - 1];
  }

  /**
   * 事件映射
   */
  private eventHandlers: Map<string, Set<Function>> = new Map();

  /**
   * 注册事件监听
   */
  public on(event: 'change', handler: (data: ServiceChangeEvent) => void): void {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, new Set());
    }
    this.eventHandlers.get(event)!.add(handler);
  }

  /**
   * 移除事件监听
   */
  public off(event: string, handler: Function): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  /**
   * 触发事件
   */
  private emit(event: string, data?: any): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach((handler) => handler(data));
    }
  }

  /**
   * 检查是否在运行
   */
  public isServiceRunning(): boolean {
    return this.isRunning;
  }

  /**
   * 停止服务发现
   */
  public async stop(): Promise<void> {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;

    // 停止定时器
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }

    if (this.discoveryTimer) {
      clearInterval(this.discoveryTimer);
      this.discoveryTimer = null;
    }

    // 注销自己
    await this.unregisterSelf();

    this.logger.info('服务发现已停止', 'ServiceDiscovery');
  }

  /**
   * 注销自己
   */
  private async unregisterSelf(): Promise<void> {
    try {
      const serviceKey = this.getServiceKey();
      const instanceKey = this.getInstanceKey(this.config.instanceId);

      await this.redisClient.zrem(serviceKey, this.config.instanceId.toString());
      await this.redisClient.del(instanceKey);

      this.logger.info(
        `注销服务实例：${this.config.serviceName}/${this.config.instanceId}`,
        'ServiceDiscovery'
      );
    } catch (error) {
      this.logger.error('注销服务实例失败', error as Error, 'ServiceDiscovery');
    }
  }
}
