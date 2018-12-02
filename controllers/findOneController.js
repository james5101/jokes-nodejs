const Jokes = require('../models/jokes.model');
var randomInt = require('random-int');
delete randomInt;
var randomInt = randomInt(1,10).toString();
var jokesfindOneController= {};

jokesfindOneController.show = function(req,res){
    Jokes.findOne({number:randomInt}).exec(function(err, jokes){
        if (err){
            console.log(err)
        }
        else {
            //console.log(jokes)
            
            res.render('displayRandomjoke', {jokes:jokes});
        }
    });
};



module.exports = jokesfindOneController;