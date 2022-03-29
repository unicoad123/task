const path = require('path');

const express = require('express');

const ContactController = require('../controllers/contact');

const router = express.Router();

router.get('/', ContactController.getContact);
router.post('/contact', ContactController.postaddContact);

module.exports = router;