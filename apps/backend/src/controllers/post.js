const postService = require('../services/post');

// 创建博客文章
exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ status: 'error', message: 'Title and content are required' });
  }

  try {
    await postService.createPost(title, content);
    res.json({ status: 'success', message: 'Blog post created successfully' });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

// 获取单篇博客文章
exports.getPost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await postService.getPostById(postId);
    if (!post) {
      return res.status(404).json({ status: 'error', message: 'Blog post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error retrieving blog post:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};
