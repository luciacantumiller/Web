// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("pages/home");
    });

    app.get("/tables", function(req, res) {
        res.render("pages/tables", {tableData: tableData, waitListData: waitListData});
    });
    app.get("/reserve", function(req, res) {
        res.render("pages/reserve");
    });
};
