const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World from user 2');
});

module.exports = router;
