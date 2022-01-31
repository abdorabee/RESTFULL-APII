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
  debugger;
  server.init();
  debugger;

  // Start the workers
  debugger;
  workers.init();
  debugger;

  // Start the CLI , but make sure it starts last
  debugger;
  setTimeout(function () {
    cli.init();
    debugger;
  }, 50);
  debugger;

  // Start an script that has issues (throws an error)
  debugger;
  // Set foo at 1
  var foo = 1;
  console.log("Just assigned 1 to foo");
  debugger;

  // Increment foo
  foo++;
  console.log("Just increamented foo");
  debugger;

  // Square foo
  foo = foo * foo;
  console.log("Just squared foo");
  debugger;

  // Convert foo to a string
  foo = foo.toString();
  console.log("Just converted foo to string");
  debugger;
  // Call the init script that will throw
  debuggingProblem.init();
  debugger;
};

// Self executing
app.init();

// Export the app
module.exports = app;
