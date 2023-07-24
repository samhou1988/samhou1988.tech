// authMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; // Replace this with your own secret key for JWT

const auth = (req, res, next) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token not provided' });
  }

  try {
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth;
