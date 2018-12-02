require('dotenv').config();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
var jokes = require('./routes/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use('/jokes', jokes);
app.set('view engine', 'ejs')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

app.listen(3000, () => {
        console.log(`Server started on port`);
    });




//DB stuff
