# 使用官方 Node.js 镜像作为基础镜像
FROM node:16

# 设置工作目录
WORKDIR /app

# 复制项目文件到镜像中
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制其他项目文件
COPY . .

# 暴露服务端口
EXPOSE 3000

# 启动 Node.js 服务器
CMD ["node", "src/server.js"]
