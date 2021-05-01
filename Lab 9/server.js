const config = require("./config/config.json");
var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || config.node_port || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(express.static('/public'));


// ================================================================================
// ROUTER data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
