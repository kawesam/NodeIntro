var mongoose = require('mongoose');
var bcrypt  = require('bcrypt');
//define a schema
var Schema = mongoose.Schema;

//create the schema
var userSchema = new Schema({
    firstname : String,
    lastname  : String,
    email     : String,
    phone     : String,
    password  : String
});

//create model from schema

userSchema.methods.comparePassword = function(password){
    //var user =this;
    return bcrypt.compareSync(password, this.password);
}
var User = mongoose.model('User', userSchema);

module.exports = User;