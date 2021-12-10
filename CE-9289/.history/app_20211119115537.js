var express = require('express');
//var cors = require('cors');
var fs = require('fs')
// var https = require('https')
var app = express();

// app.use(cors());

//app.options('*', cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3100, function () {
  console.log('Example app listening on port 3100!');
});

app.use(express.static('public'));