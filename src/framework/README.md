# Framework 框架文档

这是一个精简的 TypeScript 服务器框架，包含以下核心模块：

## 模块说明

### 1. Config 模块 (`config/ConfigManager.ts`)

负责读取和解析 JSON 配置文件。

```typescript
import { ConfigManager } from './framework/config/ConfigManager';

const configManager = ConfigManager.getInstance();
configManager.load('./config/config.json');

// 获取配置值
const port = configManager.get<number>('server.port');
const serverConfig = configManager.getServerConfig();
```

### 2. Logger 模块 (`logger/Logger.ts`)

日志模块，支持：
- 输出到文件和控制台
- 5 个日志等级：DEBUG, INFO, WARN, ERROR, FATAL
- 文件自动切分，避免单个文件过大

```typescript
import { Logger, LogLevel } from './framework/logger/Logger';

const logger = new Logger();
logger.init({
  level: LogLevel.DEBUG,
  console: true,
  file: {
    enabled: true,
    path: './logs',
    maxSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 10,
  }
});

logger.info('服务器启动', 'Server');
logger.error('连接失败', error, 'Network');
```

### 3. DB 模块 (`db/`)

数据库连接模块，包含：
- `MongoClient.ts`: MongoDB 封装
- `RedisClient.ts`: Redis 封装
- `DatabaseManager.ts`: 统一管理

```typescript
import { DatabaseManager } from './framework/db/DatabaseManager';

const dbManager = DatabaseManager.getInstance();
await dbManager.init({
  mongo: { uri: 'mongodb://localhost:27017', dbName: 'game_db' },
  redis: { host: 'localhost', port: 6379 }
});

// 获取客户端
const mongoClient = dbManager.getMongoClient();
const redisClient = dbManager.getRedisClient();

// MongoDB 操作
await mongoClient.insert('users', { name: 'John', age: 25 });
const user = await mongoClient.findOne('users', { name: 'John' });

// Redis 操作
await redisClient.set('key', 'value', 3600);
const value = await redisClient.get('key');
```

### 4. Network 模块 (`network/`)

WebSocket 网络模块，包含：
- `WsServer.ts`: WebSocket 服务器
- `WsClient.ts`: WebSocket 客户端
- `NetworkManager.ts`: 统一管理

```typescript
import { NetworkManager } from './framework/network/NetworkManager';

const networkManager = NetworkManager.getInstance();

// 创建服务器
const server = await networkManager.createServer({
  host: '0.0.0.0',
  port: 8080,
});

server.on('connection', ({ socket, request }) => {
  console.log('新连接');
});

server.on('message', ({ socket, data }) => {
  server.sendTo(socket, 'Hello');
});

// 创建客户端
const client = await networkManager.createClient('game-server', {
  url: 'ws://localhost:9090',
  reconnectInterval: 3000,
});

client.on('message', (data) => {
  console.log('收到消息:', data.toString());
});
```

### 5. Discovery 模块 (`discovery/ServiceDiscovery.ts`)

服务发现模块，基于 Redis zSet 实现：
- 定时心跳注册
- 定时轮询服务列表
- 自动清理超时实例
- 支持加权负载均衡

```typescript
import { ServiceDiscovery } from './framework/discovery/ServiceDiscovery';
import { DatabaseManager } from './framework/db/DatabaseManager';

const dbManager = DatabaseManager.getInstance();
const redisClient = dbManager.getRedisClient();

const discovery = new ServiceDiscovery(
  redisClient,
  {
    serviceName: 'gate-server',
    instanceId: 'instance-1',
    host: 'localhost',
    port: 8080,
    heartbeatInterval: 5000,
    discoveryInterval: 10000,
    instanceTimeout: 30000,
  }
);

discovery.on('change', ({ serviceName, instances }) => {
  console.log(`服务 ${serviceName} 列表变化，实例数：${instances.length}`);
});

discovery.start();

// 选择实例
const instance = discovery.selectInstanceByWeight();
```

## 框架主类

使用 `Framework` 类可以统一管理所有模块：

```typescript
import { Framework } from './framework/Framework';

const framework = Framework.getInstance();

// 初始化
await framework.init({
  configPath: './config/config.json'
});

// 启动
await framework.start();

// 获取各模块
const logger = framework.getLogger();
const dbManager = framework.getDatabaseManager();
const networkManager = framework.getNetworkManager();
const discovery = framework.getServiceDiscovery();

// 关闭
await framework.shutdown();
```

## 配置文件示例

```json
{
  "server": {
    "name": "gate-server",
    "host": "0.0.0.0",
    "port": 8080
  },
  "database": {
    "mongo": {
      "uri": "mongodb://localhost:27017",
      "dbName": "game_db"
    },
    "redis": {
      "host": "localhost",
      "port": 6379
    }
  },
  "logger": {
    "level": "debug",
    "console": true,
    "file": {
      "enabled": true,
      "path": "./logs",
      "maxSize": 10485760,
      "maxFiles": 10
    }
  },
  "discovery": {
    "enabled": true,
    "serviceName": "gate-server",
    "heartbeatInterval": 5000,
    "discoveryInterval": 10000
  }
}
```
