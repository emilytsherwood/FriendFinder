//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up the Express app to do routing through the front-end
 var app = express();

 require("./app/routing/apiRoutes")(app);
 require("./app/routing/htmlRoutes")(app);

 var PORT = 3000;


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.text());
 app.use(bodyParser.json({ types: "application/vnd.api+json" }));

 //Starts the server to beign listening
 app.listen(PORT, function() {
 	console.log("App listening on Port " + PORT);
 });



