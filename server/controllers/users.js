var User = require("../models/user");
var config = require('../../config.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//function to add a new user
module.exports.addUser = function (req,res) {
    var requestBody = req.body;
    var newUser = new User({
        firstname : requestBody.firstname,
        lastname  : requestBody.lastname,
        email     : requestBody.email,
        phone     : requestBody.phone,
        password  : bcrypt.hashSync(requestBody.password,10)
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
        if(error) throw error;
            console.log("could not fetch users");
        res.json(users);
        
    });
    //res.json({success:true,message : "found users"});

};

//delete a single record by id
module.exports.deleteUser = function (req,res) {

    User.remove({ _id:req.params._id },function (error, result) {
        if(error) throw error;
            console.log("Successfully deleted a user");
        res.json({success:true});

    });

};

//user authentication to generate a token
module.exports.authentiateUser = function (req,res) {
        var rb = req.body;
        var hashedPassword = bcrypt.hashSync(rb.password,10);
        
        User.findOne({
            email : req.body.email
        }, function(err,user){
            if (err) throw err;
            if(!user){ 
                res.status(401).json({message: "Authentication failed, User not found"});
            }else if(user){
                if(!user.comparePassword(req.body.password)){
                    res.status(401).json({message: "Authentication failed. Wrong password"});
                }else{
                    return res.json({token: jwt.sign({user},req.app.get('appSecret'))});
                }
            }
        });

};

//route middleware to verify the token
module.exports.verifyUser = function(req,res,next){
    var token = req.body.token  || req.query.token || req.headers['x-access.token'];
    
    if(token){
        //verify the secret 
        jwt.verify(token,req.app.get('appSecret'),function(err,decoded){
            if(err){
                res.json({success:false,message:"Failed to authenticate the token"});
            }else{
                req.decoded =decoded;
                next();
            }
        });

    }else{
        //if no token has been provided
        //return a token
        res.status(403).send({
            success: false,
            message : "No token provided"
        });
    }
};

