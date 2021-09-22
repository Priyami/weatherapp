const express = require('express');
const router = express.Router();
const getData = require('../controllers/server')

router.get('/', getData);

module.exports = router;
