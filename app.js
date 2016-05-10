var express     = require('express')
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var seeds       = require('./seeds');

// Ports
var port   = process.env.port || 5000;
var portIP = process.env.IP;

// Models
var Phones = require('./models/phonesModels');

// Routes
var indexRoutes  = require('./routes/indexRoutes');
var phonesRoutes = require('./routes/phonesRoutes');

mongoose.connect('mongodb://localhost/looper_wireless');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

// Use Temp Database Info
seeds();

app.get('/', function(req, res) {
  res.redirect('/home');
})

// Use Routes
app.use('/', indexRoutes);
app.use('/', phonesRoutes);

app.listen(port, portIP, function() {
  console.log('Listening on server..');
})
