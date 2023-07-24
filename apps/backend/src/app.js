const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
// 解析 application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 引入路由模块
const routes = require('./routes');

// 设置路由前缀
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof Error && err.array) {
    // Validation error(s)
    const errors = err.array().map((error) => ({ [error.param]: error.msg }));
    return res.status(400).json({ errors });
  }

  // Handle other errors
  return res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
