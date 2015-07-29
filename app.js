var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Applicant = require('./models/schema.js')

mongoose.connect('mongodb://localhost/applicants');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	Applicant.find({}).sort('name').exec(function(err, documents){
	res.render('applicants', {applicants : documents})
	});
});



// creates and applicant
app.post('/applicant', function(req, res){
	// console.log(req.body);
	var newApplicant = new Applicant({ name : req.body.name, 
						 bio : req.body.bio,
						 skills : req.body.skills.split(','),
						 years : req.body.years,
						 why : req.body.why
						});

	newApplicant.save(function(){
		res.render('success');
	})

	console.log(newApplicant);

});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
