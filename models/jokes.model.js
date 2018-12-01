const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    number : {type:String, required: true},
    joke : {type: String, required: true},
});

module.exports = mongoose.model('Jokes', mySchema);