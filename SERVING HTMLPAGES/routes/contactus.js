const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('./views/success.html');
});

module.exports = router;