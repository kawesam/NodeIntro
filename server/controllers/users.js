var User = require("../models/user");
var config = require('../../config.js');


//function to add a new user
module.exports.addUser = function (req,res) {
    var requestBody = req.body;
    var newUser = new User({
        firstname : requestBody.firstname,
        lastname  : requestBody.lastname,
        email     : requestBody.email,
        phone     : requestBody.phone
    });

    newUser.save(function (error) {
        console.log("User saved successfuly");
        if(error)
            throw error;
        res.json({success:true,message:"added user"});
    });

};
//get all records

module.exports.getUsers = function (req,res) {
    User.find(function (error,users) {
        if(error)
            console.log("could not fetch users");
        res.json(users);
        
    });
    //res.json({success:true,message : "found users"});

};

//delete a single record by id
module.exports.deleteUser = function (req,res) {
    var rp = req.params;
    User.remove({ _id: rp._id},function (error, result) {
        if(error) throw error;
        console.log("Successfully deleted a user");
        res.json({success:true});

    });

};


