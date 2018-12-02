const Jokes = require('../models/jokes.model');

var addJoke= {};

addJoke.save = function(req, res) {
    var joke = new Jokes(req.body);
  
    joke.save(function(err) {
      if(err) {
        console.log(err);
        res.render("../views/index");
      } else {
        console.log("Successfully created an joke.");
        res.redirect("/jokes/show/");
      }
    });
  };

  module.exports = addJoke;