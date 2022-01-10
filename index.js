/*
 * Primary file for API
 *
 */

// Dependencies
const { ServerResponse } = require("http");
var server = require("./lib/server");
//var workers = require("./lib/workers");

// Delcare the app
var app = {};

// init function
app.init = function () {
  // Start the server
  server.init();
  // Start the workers
  //workers.init();
};

//Execute
app.init();

// Export the app
module.exports = app;
