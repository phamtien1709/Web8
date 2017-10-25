'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');

<<<<<<< HEAD
const imageApi = require('./modules/api/images/imagesController');
const usersApi = require('./modules/api/users/usersController');
=======
var imageApi = require('./modules/api/images/imagesController');
>>>>>>> parent of fa5cbab... 4/8/2017

var app = express();

app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/api/image', imageApi);
<<<<<<< HEAD
app.use('/api/users', usersApi);

app.use(express.static(__dirname + '/public'));
=======
>>>>>>> parent of fa5cbab... 4/8/2017

mongoose.connect(config.connectionString, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connect to db success');
  }
})

app.listen(config.port , () => {
  console.log(`App listen on ${config.port}`);
})
