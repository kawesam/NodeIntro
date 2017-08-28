const express = require('express')
const app = express()
var moongose = require('mongoose')
    ,path    = require('path')
    ,bodyPaser = require('body-parser')
    ,morgan = require('morgan');




var config = require('./config');
var routes = require('./server/controllers/routes');

var router = express.Router();
moongose.Promise = global.Promise;
moongose.connect(config.database);

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended:true}));

app.use(morgan('dev'));

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//add a prefix on api to our routes
app.use('/api',routes.setup(router));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})