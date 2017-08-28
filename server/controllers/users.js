var User = require("../models/user");


//function to add a new user
module.exports.addUser = function (res,req) {
    res.json({success:true});
};
//
module.exports.getUsers = function (res,req) {
    res.json({success:true,message : "found users"});

};