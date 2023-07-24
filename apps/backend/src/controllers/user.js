const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../services/user');
const { validationResult } = require('express-validator');

const secretKey = process.env.SECRET_KEY; // Replace this with your own secret key for JWT

exports.register = async (req, res) => {
  // 1. check if username, email and password are provided
  const result = validationResult(req);
  if (result.array().length) {
    return res.send({
      errors: result.array(),
    });
  }

  const { username, email, password } = req.body;
  // 2. check if user already exists
  const existingUser = await userService.getUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({
      message: 'User already exists',
    });
  }

  // 3. generate salt and hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 4. create user
  try {
    const user = await userService.create(username, email, hashedPassword);
    const token = jwt.sign({ email: user.email }, secretKey, {
      expiresIn: '1h',
    });
    res.json({
      status: 201,
      token,
      message: 'User created successfully',
    });
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  console.log(user);
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email }, secretKey, {
      expiresIn: '1h',
    });
    res.json({ message: 'Login successful', token });
  });
};
