# 微前端框架对比

本项目是一个用于对比不同微前端框架的 monorepo 仓库，包含以下框架的实现示例：

- [qiankun](https://qiankun.umijs.org/)
- [MicroApp](https://micro-zoe.github.io/micro-app/)
- [无极](https://wujie-micro.github.io/doc/)

## 项目结构

```
micro-frontend-comparison/
├── packages/           # 共享包
├── examples/          # 示例应用
│   ├── qiankun/      # qiankun 示例
│   ├── micro-app/    # MicroApp 示例
│   └── wujie/        # 无极示例
└── pnpm-workspace.yaml
```

## 开发环境要求

- Node.js >= 16
- pnpm >= 8

## 安装

```bash
pnpm install
```

## 开发

```bash
# 启动所有项目
pnpm dev

# 构建所有项目
pnpm build

# 清理构建文件
pnpm clean
```

## 示例说明

每个示例都包含以下内容：

1. 主应用（Main）
2. 子应用 A（Vue3）
3. 子应用 B（React）

通过这种方式，我们可以直观地对比不同框架在处理相同场景时的差异。

## License

MIT
