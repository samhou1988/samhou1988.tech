// routes/blogRoutes.js

const express = require('express');
const postController = require('../controllers/post');
const { auth } = require('../middlewares');

const router = express.Router();

// 创建博客文章
router.post('/', auth, postController.createPost);

// 获取单篇博客文章
router.get('/:id', postController.getPost);

module.exports = router;
