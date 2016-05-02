var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Ports
var port = process.env.port || 4000;
var portIP = process.env.IP;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(port, portIP, function() {
  console.log('Listening on server..');
})
