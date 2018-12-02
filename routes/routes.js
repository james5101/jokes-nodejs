const express = require('express');
const router = express.Router();

const joke = require('../controllers/controller');
const jokesfindOneController = require('../controllers/findOneController')
const addJokeController = require('../controllers/addJokeController')
const saveJokeContoller = require('../controllers/saveJokeContoller')


router.get('/', joke.list);
router.get('/show', joke.show);
router.get('/random', jokesfindOneController.show);
router.get('/create', addJokeController.create );
router.post('/save', function(req, res) {
    var number = req.body.number;
    var joke = req.body.joke;
    saveJokeContoller.save(req, res);
  });

module.exports = router;
