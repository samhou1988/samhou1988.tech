const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const UserModel = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync();
module.exports = UserModel;
