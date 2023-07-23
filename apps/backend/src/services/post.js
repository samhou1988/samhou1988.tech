const PostModel = require('../models/post');

class PostService {
  async createPost(title, content) {
    try {
      return await PostModel.create({ title, content });
    } catch (error) {
      throw new Error('Error creating blog post');
    }
  }

  async getPostById(postId) {
    try {
      return await PostModel.findByPk(postId);
    } catch (error) {
      throw new Error('Error retrieving blog post');
    }
  }
}

module.exports = new PostService();
