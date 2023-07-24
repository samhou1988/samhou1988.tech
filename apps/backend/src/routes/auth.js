const express = require('express');
const userController = require('../controllers/user');
const { authValidator } = require('../validators');

const router = express.Router();

// User login
router.post('/login', authValidator.validateUserLogin, userController.login);

// register
router.post(
  '/register',
  authValidator.validateUserRegistration,
  userController.register,
);

module.exports = router;
