# 微前端框架对比分析

本项目是一个用于对比不同微前端框架的 monorepo 仓库，包含以下框架的实现示例：

- [qiankun](https://qiankun.umijs.org/)
- [MicroApp](https://micro-zoe.github.io/micro-app/)
- [无极](https://wujie-micro.github.io/doc/)
- [Garfish](https://www.garfishjs.org/)

## 项目结构

```tree
micro-frontend-comparison/
├── configs/                    # 共享配置
│   ├── rsbuild/                # Rsbuild 配置
│   │   ├── base.ts           # 基础配置
│   │   ├── child.ts          # 子应用配置
│   │   └── main.ts           # 主应用配置
│   └── typescript/            # TypeScript 配置
│       ├── base.json         # 基础配置
│       ├── react.json        # React 项目配置
│       └── vue.json          # Vue 项目配置
├── examples/                   # 示例应用
│   ├── apps/                  # 公共子应用
│   │   ├── react-app/        # React 子应用
│   │   │   ├── src/
│   │   │   ├── package.json
│   │   │   └── rsbuild.config.ts
│   │   └── vue-app/          # Vue 子应用
│   │       ├── src/
│   │       ├── package.json
│   │       └── rsbuild.config.ts
│   ├── shared/               # shared 模块
│   │   └───
│   │       ├── src/  # 声明文件 辅助函数
│   │       └── package.json
│   ├── qiankun/              # qiankun 示例
│   │   └── main/             # 主应用
│   │       ├── src/
│   │       ├── package.json
│   │       └── rsbuild.config.ts
│   ├── micro-app/            # micro-app 示例
│   │   └── main/             # 主应用
│   │       ├── src/
│   │       ├── package.json
│   │       └── rsbuild.config.ts
│   ├── wujie/                # wujie 示例
│   │   └── main/             # 主应用
│   │       ├── src/
│   │       ├── package.json
│   │       └── rsbuild.config.ts
│   └── garfish/              # Garfish 示例
│       └── main/             # 主应用
│           ├── src/
│           ├── package.json
│           └── rsbuild.config.ts
├── pnpm-workspace.yaml       # 工作空间配置
├── package.json             # 项目配置
└── README.md               # 项目说明
```

## 开发环境要求

- Node.js >= 18
- pnpm >= 8

## 安装

```bash
# 安装所有依赖
pnpm install
```

## 开发命令

### 启动开发环境

```bash
# 启动所有项目
pnpm dev

# 启动 qiankun 示例
pnpm dev:qiankun

# 启动 micro-app 示例
pnpm dev:micro-app

# 启动 wujie 示例
pnpm dev:wujie

# 启动 garfish 示例
pnpm dev:garfish

# 单独启动子应用
pnpm dev:react-app    # 启动 React 子应用
pnpm dev:vue-app      # 启动 Vue 子应用
```

### 构建命令

```bash
# 构建所有项目
pnpm build

# 构建 qiankun 示例
pnpm build:qiankun

# 构建 micro-app 示例
pnpm build:micro-app

# 构建 wujie 示例
pnpm build:wujie

# 构建 garfish 示例
pnpm build:garfish

# 构建子应用
pnpm build:react-app  # 构建 React 子应用
pnpm build:vue-app    # 构建 Vue 子应用
```

### 其他命令

```bash
# 清理所有构建文件
pnpm clean

# 代码格式化
pnpm format

# 代码检查
pnpm lint

# 类型检查
pnpm type-check
```

### 开发端口说明

- React 子应用：8081
- Vue 子应用：8082
- qiankun 主应用：8083
- micro-app 主应用：8084
- wujie 主应用：8085
- garfish 主应用：8086

## 示例说明

每个示例都包含以下内容：

1. 主应用（Main）- 基于 Vue3 + Rsbuild
2. 子应用 A（Vue3）
3. 子应用 B（React）

通过这种方式，我们可以直观地对比不同框架在处理相同场景时的差异。

## 框架对比分析

### 1. 基础信息对比

| 框架      | 开发商   | GitHub Stars | 首次发布 | 最新版本    | 更新频率 | 最近更新时间 |
| --------- | -------- | ------------ | -------- | ----------- | -------- | ------------ |
| qiankun   | 蚂蚁金服 | 16.2k+       | 2019年   | 2.10.16     | 较低     | 1 年前       |
| micro-app | 京东     | 6k+          | 2021年   | 1.0.0-rc.26 | 活跃     | 1 个月前     |
| wujie     | 腾讯     | 4.6k+        | 2022年   | 1.0.28      | 活跃     | 2 个月前     |
| Garfish   | 字节跳动 | 2.7k+        | 2021年   | 1.19.4      | 活跃     | 4 个月前     |

### 2. 技术特性对比

#### 2.1 隔离方案

- **qiankun**
  - 基于 single-spa
  - 采用 CSS 沙箱和 JS 沙箱
  - 提供 snapshotSandbox、proxySandbox、legacySandbox 三种沙箱模式

- **micro-app**
  - 自研框架，基于 Web Components
  - 完整的 JS 沙箱
  - CSS 采用 Shadow DOM 隔离

- **wujie**
  - 基于 Web Components
  - 使用 iframe 沙箱隔离，但解决了 iframe 的通信和性能问题
  - 完全隔离的 JS 运行环境

- **Garfish**
  - 自研框架
  - 提供 VM 沙箱和 Snapshot 沙箱
  - CSS 提供 ShadowDOM 和 Scoped 两种隔离方式

#### 2.2 通信机制

- **qiankun**
  - Actions 通信方式
  - Global State
  - Props 传递

- **micro-app**
  - 基于 CustomEvent
  - 数据持久化
  - Props 传递

- **wujie**
  - 原生 window.parent 通信
  - Props 传递
  - 发布订阅模式

- **Garfish**
  - Props 传递
  - 提供 Channel 通信
  - Global State

### 3. 性能对比

| 框架      | 首次加载性能 | 二次加载性能 | 内存占用 | 沙箱性能 |
| --------- | ------------ | ------------ | -------- | -------- |
| qiankun   | 中等         | 较好         | 中等     | 中等     |
| micro-app | 较好         | 好           | 低       | 好       |
| wujie     | 较慢         | 极好         | 较高     | 极好     |
| Garfish   | 好           | 好           | 低       | 好       |

### 4. 使用体验对比

#### 4.1 开发友好度

- **qiankun**
  - 📝 文档完善
  - 🔧 配置较多
  - 💡 社区活跃
  - ⚙️ 主应用改造成本中等

- **micro-app**
  - 📝 文档清晰
  - 🔧 配置简单
  - 💡 社区一般
  - ⚙️ 主应用改造成本低

- **wujie**
  - 📝 文档一般
  - 🔧 配置适中
  - 💡 社区成长中
  - ⚙️ 主应用改造成本低

- **Garfish**
  - 📝 文档完善
  - 🔧 配置灵活
  - 💡 社区较小
  - ⚙️ 主应用改造成本低

#### 4.2 应用场景适应性

| 框架      | 老项目改造 | 新项目集成 | 多框架共存 | 预加载支持 |
| --------- | ---------- | ---------- | ---------- | ---------- |
| qiankun   | ★★★★☆      | ★★★★☆      | ★★★★☆      | ★★★☆☆      |
| micro-app | ★★★★★      | ★★★★★      | ★★★★★      | ★★★★☆      |
| wujie     | ★★★☆☆      | ★★★★★      | ★★★★★      | ★★★★★      |
| Garfish   | ★★★★☆      | ★★★★☆      | ★★★★☆      | ★★★★☆      |

## 5. 方案选择建议

### 5.1 推荐使用 micro-app 的场景

- 新项目从零开始
- 对性能和内存占用要求较高
- 需要简单的接入方式
- 对 CSS 和 JS 隔离要求高

优势：

- 接入成本最低
- 性能表现优秀
- 隔离效果好
- 配置简单直观

### 5.2 推荐使用 wujie 的场景

- 对运行时隔离要求极高
- 子应用之间需要完全隔离
- 对二次加载性能要求高
- 需要完善的预加载能力

优势：

- 完全隔离
- 预加载性能好
- 运行时沙箱可靠

### 5.3 推荐使用 qiankun 的场景

- 大型企业级应用
- 需要成熟稳定的方案
- 对社区支持要求高
- 需要丰富的生态系统

优势：

- 社区最成熟
- 方案稳定可靠
- 生态最完善

### 5.4 推荐使用 Garfish 的场景

- 需要灵活的配置能力
- 对性能有较高要求
- 需要简单易用的方案

优势：

- 配置灵活
- 性能表现好
- 使用简单

## 6. 综合建议

综合考虑各方面因素，对于大多数项目场景，推荐选择 **micro-app** 作为首选方案：

1. **技术优势**
   - 基于 Web Components，实现更标准
   - 简单易用，学习成本低
   - 性能表现优秀
   - 隔离效果好

2. **实践优势**
   - 改造成本最低
   - 接入方式简单
   - 主应用无需改造
   - 子应用无需改造

3. **生态优势**
   - 持续活跃更新
   - 问题修复及时
   - 社区反馈良好

4. **企业背书**
   - 京东团队维护
   - 生产环境验证
   - 应用案例丰富

如果项目有以下特殊需求，可以考虑其他方案：

- 需要完全隔离：选择 wujie
- 需要成熟社区：选择 qiankun
- 需要灵活配置：选择 Garfish

## License

MIT
