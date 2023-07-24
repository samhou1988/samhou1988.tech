# samhou1988.tech

> 该项目是一个基于 React 和 Node.js 的博客系统，包括前端和后端两部分。

## 技术栈

- 前端：React、Redux、React Router、Axios、Ant Design
- 后端：Node.js、Express
- 数据库：MySQL、Sequelize
- 构建工具：Webpack
- 其他工具：ESLint、Prettier

## 安装和运行

### 前端

1. 进入 `frontend/` 目录：`cd frontend`
2. 安装依赖：`pnpm install`
3. 运行开发服务器：`pnpm start`

### 后端

1. 进入 `backend/` 目录：`cd backend`
2. 安装依赖：`pnpm install`
3. 配置 MySQL 数据库连接：在 `backend/src/config/db.js` 文件中配置 Sequelize 的连接字符串。
4. 运行后端服务器：`pnpm start`

## 功能

- 用户注册和登录
- 创建、编辑和删除博客文章
- 查看博客列表和详情
- 点赞和收藏博客文章
- 后台管理系统：博客内容审核和管理

## 接口文档

详细的前后端接口文档可以查看 [API 文档](backend/api-docs)。

## 代码规范

- 使用 ESLint 进行代码检查和格式化。

## 测试

- 前端单元测试：使用 Vitest 和 Testing Library 编写前端组件的单元测试。
- 后端单元测试：使用 Mocha 编写后端接口的单元测试。

## 部署

- 该项目支持 Docker 部署。可以使用 Docker 容器化应用程序，并通过负载均衡实现高可用性。使用 nginx 作为反向代理。

## 贡献

欢迎贡献代码和提出建议！请查看 [贡献指南](CONTRIBUTING.md) 获取更多信息。

## 版权

该项目采用 MIT 许可证。请查阅 [LICENSE](LICENSE) 获取更多信息。
