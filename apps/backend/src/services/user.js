const UserModel = require('../models/user');

class UserService {
  async create(username, email, password) {
    try {
      return await UserModel.create({ username, email, password });
    } catch (error) {
      throw new Error('Error creating blog post');
    }
  }

  async getUserByEmail(email) {
    try {
      return await UserModel.findOne({ where: { email } });
    } catch (error) {
      throw new Error('Error retrieving blog post');
    }
  }

  async getUserByUsername(username) {
    try {
      return await UserModel.findOne({ where: { username } });
    } catch (error) {
      throw new Error('Error retrieving blog post');
    }
  }

  async getUserById(userId) {
    try {
      return await UserModel.findByPk(userId);
    } catch (error) {
      throw new Error('Error retrieving blog post');
    }
  }
}

module.exports = new UserService();
