/*
 * Primary file for API
 *
 */

// Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");
var debuggingProblem = require("./lib/debuggingProblem");
// Declare the app
var app = {};

// Init function
app.init = function () {
  // Start the server
  server.init();

  // Start the workers
  workers.init();

  // Start the CLI , but make sure it starts last
  setTimeout(function () {
    cli.init();
  }, 50);

  // Call the init script that will throw
  debuggingProblem.init();
};

// Self executing
app.init();

// Export the app
module.exports = app;
