const Jokes = require('../models/jokes.model');

var jokesController= {};
var jokesController1= {};




jokesController.list = function(req,res){
    res.render('index');
};


jokesController.show = function(req,res){
    Jokes.find({}).exec(function(err, jokes){
        if (err){
            console.log(err)
        }
        else {
            
            res.render('displayjoke', {jokes:jokes});
        }
    });
};



module.exports = jokesController;