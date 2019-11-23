const fs = require("fs");
const express = require("express");
const path = require("path");

var app = express();
var PORT = 8000;

var reservations = [
  {
    rsvpName: "Ellen",
    email: "example@example.com",
    phone:"815-123-4567",
    id:"12345"
  },
  {
    rsvpName: "Cater",
    email: "example@example.com",
    phone:"815-123-4567",
    id:"12346"
  }
];

var waitList = [
  {
    rsvpName: "Raquel",
    email: "example@example.com",
    phone:"815-123-4567",
    id:"12347"
  },
  {
    rsvpName: "Annissa",
    email: "example@example.com",
    phone:"815-123-4567",
    id:"12348"
  }
]

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

app.get("/api/reservations", function(req, res){
  return res.json(reservations);
});

app.get("/api/waitList", function(req, res){
  return res.json(waitList);
});

app.post("/api/tables", function(req, res){
  var newRSVP = req.body;
  waitList.push(newRSVP);
  res.json(false);
})

//listen on port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });