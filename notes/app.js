var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var superHeroController = require('./controllers/superhero.js');
var mongoose = require('mongoose');

var dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost/ajax-demo';

mongoose.connect('mongodb://localhost/ajax-demo');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//these are our routes
app.get('/', indexController.index);
//these routes will utilize the route handlers we set up in our controllers
app.post('/create-hero', superHeroController.createHero);
app.get('/get-heroes', superHeroController.getHeroes);

var port = process.env.PORT  || 3000;//this is accessing your envorinment settinfs to give a variable to your port

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
