var mongoose = require('mongoose');
//define a schema
var Schema = mongoose.Schema;

//create the schema
var userSchema = new Schema({
    firstname : String,
    lastname  : String,
    email     : String,
    phone     : String
});

//create model from schema

var User = mongoose.model('User', userSchema);

module.exports = User;