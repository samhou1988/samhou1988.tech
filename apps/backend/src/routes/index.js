const express = require('express');
const router = express.Router();

const postRoutes = require('./post');

router.use('/post', postRoutes);
router.use('/user', require('./user'));
router.use('/auth', require('./auth'));

module.exports = router;
