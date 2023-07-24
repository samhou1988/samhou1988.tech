const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'myblog',
  'root',
  process.env.DATABASE_PASSWORD,
  {
    host: 'mysql',
    dialect: 'mysql',
  },
);

module.exports = sequelize;
