const express = require('express');
const app = express();

// 引入路由模块
const routes = require('./routes');

// 设置路由前缀
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
