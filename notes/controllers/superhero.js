//require the model of the collection you need to access
//this variable becomes the model you are accessing
//think of it like module.import if there were such a thing
var SuperHeroes = require('../models/superheroes.js');

var superHeroController = {
	//define a few different methods based on what you need to do
	//get superhero from db
	getHeroes : function(req, res){
		SuperHeroes.find({}, function(err, heroes){//the second argument can be any name you want, its just a reference to an array of objects in the db
			if (err) {//you want to use res.send for your response because its the only way to send data back to the client, instead of a display (render) or redirect.
				res.send({err : err});//this just returns the actual error the occurred
			}
			else {
				res.send({data : heroes});//else this returns the data from the search. fins will return an array of document objects.
			}
		});
	},

	//add new superhero to db
	createHero : function(req, res){
		//POST request from a form - data comes in from the req.body - and object with all the date from the request
		//some simple validation:
		if (!req.body.name){//here we are using the ! (not operator) to check for a name
			res.send({err: "you didn't send a name"})
		}
		else {
		var hero = new SuperHeroes(req.body);//all of the property data coming in must match the schema you created or they will be ignored.
		hero.save(function(err, document){
			res.send({data : document});
			});
		}
	}
}

module.exports = superHeroController;