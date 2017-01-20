//Requiring the data in the data/friends.js file
var surveyResults = require('../data/friends.js');
var path = require ('path');
var bodyParser = require ('body-parser');


// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in surveyResults 
module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(surveyResults);
	});
	app.post('/api/friends', function(req, res) {
		var friendInfo = req.body;
		console.log(req.body);
	});

};

