var mongoose = require('mongoose');
//superhero schema definition
var superHeroSchema = mongoose.Schema({
	name : String,
	superPowers : [{type : String}],//array type, where each element is a string, enforces typing
	cape : Boolean
});

//create modela nd collection for Superheroes
var SuperHeroes = mongoose.model('SuperHeroes', superHeroSchema);

//export the model
module.exports = SuperHeroes;