var express = require('express');
var fs = require('fs')
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3100, function () {
  console.log('Example app listening on port 3100!');
});

app.use(express.static('public'));