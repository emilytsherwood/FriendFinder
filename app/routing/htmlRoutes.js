var path = require('path');

//need module.exports so that when we require it in server.js, it'll be connected
module.exports = function(app) {
//Basic route that sends the user first to the Home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public/home.html"));
});

//Sends user to the survey page when they type in /survey
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public/survey.html"));
});

//If no matching route is found, send the user to the Home Page - Default Page
// app.use(function (req, res) {
//   res.sendFile(path.join(__dirname + '/../public/home.html'));
// });
};
