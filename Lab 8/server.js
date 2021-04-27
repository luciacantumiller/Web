// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
// =============================================================
let tableData = []; 
let waitData = []; 

// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays table list
app.get("/api/tables", function(req, res) {
  res.json(tableData);
});

// Displays wait list
app.get("/api/waitlist", function(req, res) {
  res.json(waitData);
});

// Displays wait list
app.get("/api/waitlist", function(req, res) {
  res.json(waitData);
});

// Create New Reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
  var newReservarion = req.body;

  if(tableData.length >= 5){
    waitData.push(newReservarion);
    res.json(false);
  } else {
    tableData.push(newReservarion);
    res.json(true);
  }
});

app.post("/api/clear", function(req, res) {
  waitData = [];
  tableData = [];
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
