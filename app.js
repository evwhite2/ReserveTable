const fs = require("fs");
const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var reservations = [];

var waitList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./home.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "./view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./reserve.html"));
});


//API Routes

app.get("/api/view", function(req, res){
  return res.json(reservations);
});

app.get("/api/waitList", function(req, res){
  return res.json(waitList);
});

//post new rsvp
app.post("/api/waitList", function(req, res){
  var newRSVP = req.body;
  if(reservations.length<2){
    reservations.push(newRSVP);
    res.json(true);
  }else{
    waitList.push(newRSVP);
    res.json(false);
  }
});

app.post("/api/clear", (req, res)=>{
  reservations.length =0;
  res.json(true);
});

//listen on port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });