var path = require("path");

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