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

app.get('/abcd/en_us/article/ez7mve/victims', function (req, res) {
  res.sendFile(__dirname + '/public/frewheel.html');
});

app.get('/abcd/article/ez7mve/victims', function (req, res) {
  res.sendFile(__dirname + '/public/prebid.html');
});

app.get('/prebid', function (req, res) {
  res.sendFile(__dirname + '/public/prebidrtd.html');
});

app.get('/bidAdapter', function (req, res) {
  res.sendFile(__dirname + '/public/bidAdapter.html');
});

app.get('/bidIASRtd', function (req, res) {
  res.sendFile(__dirname + '/public/bidIASRtd.html');
});

app.get('/prebidserver', function (req, res) {
  res.sendFile(__dirname + '/public/prebidServer_example.html');
});

app.get('/halo', function (req, res) {
  res.sendFile(__dirname + '/public/haloRtdProvider_example.html');
});

app.get('/sirdata', function (req, res) {
  res.sendFile(__dirname + '/public/sirdataRtdProvider_example.html');
});

app.get('/permutive', function (req, res) {
  res.sendFile(__dirname + '/public/permutiveRtdProvider_example.html');
});

// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app)
app.listen(3100, function () {
  console.log('Example app listening on port 3100!');
});

app.use(express.static('public'));