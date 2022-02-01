/**
 * Libarary that demsonstrate something throwing when it's init() is called
 *
 */

// Container for the module
var example = {};

// init function
example.init = function () {
  // This is an error created intentionally (bar is not defined)
  var foo = bar;
};

//Export the module
module.exports = example;
