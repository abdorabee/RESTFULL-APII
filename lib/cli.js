/**
 * CLI-Related Tasks
 *
 *
 */

// Dependencies
var readline = require("readline");
var util = require("util");
var debug = util.debuglog("cli");
var events = require("events");
class _events extends events {}
var e = new _events();

// Instantiate the CLI module object
var cli = {};

// Init script
cli.init = function () {
  // Send the start message to the console , in dark blue
  console.log("\x1b[34m%s\x1b[0m", "the CLI is running");

  // Start the interface
  var _interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });

  // Create an initial prompt
  _interface.prompt();
};

// Export the module
module.exports = cli;
