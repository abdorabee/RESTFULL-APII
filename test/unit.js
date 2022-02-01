/**
 *
 * Unit Test
 *
 */

// Dependencies
var helpers = require("./../lib/helpers");
var assert = require("assert");
var logs = require("./../lib/logs");
var debuggingProblem = require("./../lib/debuggingProblem");

// Holder for the unit
var unit = {};

// Assert that the getANumber function is returning a number
unit["helpers.getANumber should return number"] = function (done) {
  var val = helpers.getANumber();
  assert.equal(typeof val, "number");
  done();
};

// Assert that the getANumber function is returning a 1
unit["helpers.getANumber should return 1"] = function (done) {
  var val = helpers.getANumber();
  assert.equal(val, 1);
  done();
};

// Assert that the getANumber function is returning a 2
unit["helpers.getANumber should return 1"] = function (done) {
  var val = helpers.getANumber();
  assert.equal(val, 2);
  done();
};

// logs.list should callback an array and a false error
unit[
  "logs.list should callback a false error and an array of log names"
] = function (done) {
  logs.list(true, function (err, logFileNames) {
    assert.equal(err, false);
    assert.ok(logFileNames instanceof Array);
    assert.ok(logFileNames.length > 1);
    done();
  });
};

// logs.truncate should not throw if the logId doesn't exit
unit["logs.truncate should not throw if the logId doesn't exit"] = function (
  done
) {
  assert.doesNotThrow(function () {
    logs.truncate("I do not exit", function (err) {
      assert.ok(err);
      done();
    });
  }, TypeError);
};

// DebuggingProblem.init should not throw an error but it does
unit["DebuggingProblem.init should not throw an error"] = function (done) {
  assert.doesNotThrow(function () {
    debuggingProblem.init();
    done();
  }, TypeError);
};
// Export the tests to the runner
module.exports = unit;
