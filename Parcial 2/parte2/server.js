var express = require("express");
var path = require("path");
let ejs = require('ejs');

var app = express();

var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(express.static('/public'));

// Data
// ===========================================================
let pets = [];
let notPets = [];
var animals = [
    {
        animalType: "dog",
        pet: true,
        fiercness: 4
    },
    {
        animalType: "cat",
        pet: true,
        fiercness: 10
    },
    {
        animalType: "giraffe",
        pet: false,
        fiercness: 4
    },
    {
        animalType: "zebra",
        pet: false,
        fiercness: 8
    },
    {
        animalType: "lion",
        pet: false,
        fiercness: 10
    }
];

animals.forEach(animal => {
    if(animal.pet == true){
        pets.push(animal);
    } else {
        notPets.push(animal);
    }
});

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Animals Page!");
});

app.get("/api/:animal", function(req, res) {
    var chosen = req.params.animal;

  for (var i = 0; i < animals.length; i++) {
    if (chosen === animals[i].animalType) {
        res.render("pages/animal", {animal: animals[i]});

    }
  }

  res.render("pages/animal", {animal: null});

//   return res.json("No animal type " + chosen + " found");
});

app.get("/all-pets", function(req, res) {
    res.render("pages/index", {allPets: pets});
});

app.get("/all-non-pets", function(req, res) {
    res.render("pages/index", {allPets: notPets});
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
