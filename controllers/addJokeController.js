const Jokes = require('../models/jokes.model');
var jokesfindOneController= {};

jokesfindOneController.create = function(req, res) {
    res.render("../views/createJoke");
  };



module.exports = jokesfindOneController;