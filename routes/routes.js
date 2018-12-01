const express = require('express');
const router = express.Router();

const joke = require('../controllers/controller');


router.get('/', joke.list);
router.get('/show', joke.show);

module.exports = router;
