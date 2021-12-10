var express = require('express');
var fs = require('fs')
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3100, function () {
    console.log('Example app listening on port 3100!');
});

app.use(express.static('files'));