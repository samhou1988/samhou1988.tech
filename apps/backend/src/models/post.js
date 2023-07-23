const { Sequelize, DataTypes } = require('sequelize');

// 使用Sequelize连接到MySQL数据库
const sequelize = new Sequelize('myblog', 'root', process.env.DATABASE_PASSWORD, {
  host: 'mysql',
  dialect: 'mysql'
});

// 定义博客文章模型
const PostModel = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pub_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

sequelize.sync();

module.exports = PostModel;
