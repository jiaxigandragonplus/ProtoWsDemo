# Gate-Game 服务器架构说明

## 架构概述

本项目采用 Gate-Game 分离的服务器架构：

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────▶│   Gate   │────▶│   Game   │
│          │◀────│  Server  │◀────│  Server  │
└──────────┘     └──────────┘     └──────────┘
   WebSocket        WebSocket         内部处理
```

- **Gate 服务器**：负责处理客户端的 WebSocket 连接，转发请求到 Game 服务器，并将响应返回给客户端
- **Game 服务器**：负责处理具体的业务逻辑

## 文件结构

```
src/
├── gate/                    # Gate 服务器模块
│   ├── GateServer.ts        # Gate 服务器主类
│   ├── GameConnector.ts     # Gate 到 Game 的连接器
│   ├── MessageHandler.ts    # 消息处理器
│   ├── MessageRegistry.ts   # 消息注册表
│   ├── PlayerManager.ts     # 玩家会话管理器
│   ├── PlayerSession.ts     # 玩家会话类
│   └── ProtoLoader.ts       # Proto 文件加载器
│
├── game/                    # Game 服务器模块
│   ├── GameServer.ts        # Game 服务器主类
│   ├── GateConnector.ts     # Game 到 Gate 的连接器
│   ├── MessageHandler.ts    # 游戏消息处理器
│   ├── SessionManager.ts    # 会话管理器
│   └── ProtoLoader.ts       # Proto 文件加载器
│
└── test/                    # 测试客户端
    └── TestClient.ts        # 测试客户端

protobuf/
└── proto/
    ├── game.proto           # 游戏协议定义
    └── gate_game.proto      # Gate-Game 内部通信协议
```

## 通信协议

### 客户端协议 (game.proto)

| 消息名 | 消息 ID | 方向 | 说明 |
|--------|---------|------|------|
| CLogin | 1 | C→S | 客户端登录请求 |
| SLogin | 2 | S→C | 服务端登录响应 |
| CEcho | 3 | C→S | 客户端回显请求 |
| SEcho | 4 | S→C | 服务端回显响应 |

### Gate-Game 内部协议 (gate_game.proto)

| 消息名 | 消息 ID | 方向 | 说明 |
|--------|---------|------|------|
| GateToGame | 101 | Gate→Game | Gate 转发给 Game 的消息 |
| GameToGate | 102 | Game→Gate | Game 响应给 Gate 的消息 |

## 消息流程

### 1. 客户端登录流程

```
Client                    Gate                    Game
  │                        │                       │
  │──CLogin (msgId=1)──▶  │                       │
  │                        │──GateToGame (101)──▶ │
  │                        │                       │ 处理登录逻辑
  │                        │◀─GameToGate (102)────│
  │◀─SLogin (msgId=2)─────│                       │
```

### 2. 客户端回显流程

```
Client                    Gate                    Game
  │                        │                       │
  │──CEcho (msgId=3)──▶   │                       │
  │                        │──GateToGame (101)──▶ │
  │                        │                       │ 处理回显逻辑
  │                        │◀─GameToGate (102)────│
  │◀─SEcho (msgId=4)─────│                       │
```

## 启动说明

### 1. 构建项目

```bash
npm run build
```

### 2. 启动 Gate 服务器

```bash
npm run start:gate
# 或
node dist/src/gate/GateServer.js
```

Gate 服务器监听端口：8080

### 3. 启动 Game 服务器

```bash
npm run start:game
# 或
node dist/src/game/GameServer.js
```

Game 服务器会主动连接到 Gate 服务器（端口 8080）

### 4. 运行测试客户端

```bash
npm run test-client
# 或
node dist/src/test/TestClient.js
```

## 配置说明

### Gate 服务器配置

在 [`src/gate/GateServer.ts`](src/gate/GateServer.ts:155) 中修改：

```typescript
const config: GateConfig = {
    port: 8080  // Gate 服务器监听端口
};
```

在 [`src/gate/GameConnector.ts`](src/gate/GameConnector.ts:15) 中修改 Game 服务器地址：

```typescript
this.gameConnector = new GameConnector('127.0.0.1', 9000);
```

### Game 服务器配置

在 [`src/game/GameServer.ts`](src/game/GameServer.ts:76) 中修改 Gate 服务器地址：

```typescript
const config: GameConfig = {
    gateHost: '127.0.0.1',
    gatePort: 8080
};
```

## 扩展新协议

### 1. 在 game.proto 中添加消息

```protobuf
message CNewMessage {
    string data = 1;
}

message SNewMessage {
    string result = 1;
}
```

### 2. 在 MessageRegistry.ts 中注册消息 ID

```typescript
const MESSAGE_ID_CONFIG: Record<string, number> = {
    'CLogin': 1,
    'CEcho': 3,
    'CNewMessage': 5  // 新增
};
```

### 3. 在 Gate 的 MessageHandler.ts 中添加处理器

```typescript
static handleNewMessage(session: PlayerSession, data: Uint8Array, protoType: protobuf.Type): void {
    // 处理逻辑
}
```

### 4. 在 Game 的 MessageHandler.ts 中添加处理器

```typescript
private static handleNewMessage(gateSessionId: number, data: Uint8Array): void {
    // 业务逻辑
}
```

## 注意事项

1. **启动顺序**：先启动 Gate 服务器，再启动 Game 服务器
2. **重连机制**：Game 服务器会自动重连 Gate 服务器（3 秒后重试）
3. **消息队列**：Game 连接未建立时，Gate 会将消息加入待处理队列
