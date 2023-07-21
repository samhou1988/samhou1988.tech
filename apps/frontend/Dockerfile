# Stage 1: 构建应用程序
# 使用Node.js官方镜像作为基础镜像
FROM node:16 as builder

# 设置工作目录
WORKDIR /app

# 拷贝package.json和package-lock.json文件，并安装依赖
COPY package*.json ./

# 使用腾讯镜像源安装依赖
RUN npm install --registry=https://mirrors.cloud.tencent.com/npm/

# 拷贝所有源代码到镜像中
COPY . .

# 构建应用程序
RUN npm run build

# 暴露3000端口
# EXPOSE 3000

# 启动应用程序
# CMD ["npm", "run", "serve"]

# Stage 2: 构建Nginx镜像
# 使用Nginx官方镜像作为基础镜像
FROM nginx:1.21-alpine

# 拷贝Nginx配置文件到镜像中
# COPY nginx.conf /etc/nginx/nginx.conf

# 拷贝应用程序构建结果到Nginx的默认静态文件目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]

