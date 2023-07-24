const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

// 定义博客文章模型
const PostModel = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pub_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

sequelize.sync();

module.exports = PostModel;
