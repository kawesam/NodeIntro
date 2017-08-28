var path  = require('path');
var dbpassword = encodeURIComponent('Laila1986!');
var dev = encodeURIComponent("faceexpo-dev");

module.exports = {
    secret: 'ilovelailagomez',
    //database: 'mongodb://tavig:Laila1986!@ds058548.mongolab.com:58548/MongoLab-w',
    database: "mongodb://tokyoite:" + dbpassword + "@faceexpo-shard-00-00-qrzzy.mongodb.net:27017,faceexpo-shard-00-01-qrzzy.mongodb.net:27017,faceexpo-shard-00-02-qrzzy.mongodb.net:27017/" + dev + "?ssl=true&replicaSet=FaceExpo-shard-0&authSource=admin",
    rooturl : "http://localhost:1337/",
    rootdirectory: path.resolve(__dirname) + '\\',
    //imagedirectory: path.resolve(__dirname) + '\\client\\images\\',
    mail : {
        user: "kawesama@gmail.com",
        password: "tryingvarious",
        provider: "Gmail"
    }
};