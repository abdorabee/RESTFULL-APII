/**
 * Test runner
 *
 *
 */

// Application logic for the test runner
_app = {};

// Container for the test
_app.tests = {};

// Add on the unit tests
_app.tests.unit = require("./unit");

// Count all the test
_app.countTests = function () {
  var counter = 0;
  for (var key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      var subTests = _app.tests[key];
      for (var testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

// Run all the tests , collecting the errors and successes
_app.runTests = function () {
  var errors = [];
  var successes = 0;
  var limit = _app.countTests();
  var counter = 0;
  for (var key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      var subTests = _app.tests[key];
      for (var testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          (function () {
            var tmpTestName = testName;
            var testValue = subTests[testName];
            // Call the test
            try {
              testValue(function () {
                // if it calls back without throwing , then it succeeded so log it in green
                console.log("\x1b[32m%s\x1b[0m", tmpTestName);
                counter++;
                if (counter == limit) {
                  _app.produceTestReport(limit, successes, errors);
                }
              });
            } catch (e) {
              // if it throws, then it failed, so capture the error thrown and log it red
              errors.push({
                name: testName,
                error: e,
              });
              console.log("\x1b[31m%s\x1b[0m", tmpTestName);
              counter++;
              if (counter == limit) {
                _app.produceTestReport(limit, successes, errors);
              }
            }
          })();
        }
      }
    }
  }
};

// Produce a test outcome report
_app.produceTestReport = function (limit, successes, errors) {
  console.log("");
  console.log("-------------BEGIN TEST REPORT-------------");
  console.log("");
  console.log("Total Test: ", limit);
  console.log("passed: ", successes);
  console.log("Fail: ", errors.length);
  console.log("");

  // If there are errors , print them in detail
  if (errors.length > 0) {
    console.log("-----------BEGIN ERROR DETAILS----------");
    console.log("");

    errors.forEach(function (testError) {
      console.log("\x1b[31m%s\x1b[0m", testError.name);
      console.log(testError.error);
      console.log("");
    });

    console.log("");
    console.log("-----------END ERROR DETAILS------------");
  }
  console.log("");
  console.log("-------------END TEST REPORT --------------");
};

// Run the test
_app.runTests();
