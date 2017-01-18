//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up the Express app to do routing through the front-end
 var app = express();
 var PORT = 3000;

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.text());
 app.use(bodyParser.json({ type: "application/vnd.api+json" }));

 //Starts the server to beign listening
 app.listen(PORT, function() {
 	console.log("App listening on Port " + PORT);
 });

//Basic route that sends the user first to the Home/Default Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/home", function(req, res) {
	res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

//Sends user to the survey page when they type in /survey
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

