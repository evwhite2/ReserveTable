const fs = require("fs");
const express = require("express");
const path = require("path");

var app = express();
var PORT = 8000;

var reservations = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//html routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./home.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "./view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./reserve.html"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });