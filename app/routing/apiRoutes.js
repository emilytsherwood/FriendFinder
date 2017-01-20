//Requiring the data in the data/friends.js file
var surveyResults = require('../data/friends.js');
var path = require ('path');
var bodyParser = require ('body-parser');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(surveyResults);
	});


};

