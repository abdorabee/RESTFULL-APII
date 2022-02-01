/**
 *
 * API Tests
 */

// Dependencies
var app = require("./../index");
var assert = require("assert");
var http = require("http");
var config = require("./../lib/config");

// Holder for the tests
var api = {};

// Helpers
var helpers = {};
helpers.makeGetRequest = function (path, callback) {
  // Configure the request details
  var requestDetails = {
    protocal: "http:",
    hostname: "localhost",
    port: config.httpPort,
    method: "GET",
    path: path,
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Send the request
  var req = http.request(requestDetails, function (res) {
    callback(res);
  });
  req.end();
};

// The main init() function should be able to run without throwing
api["api.init should start without throwing"] = function (done) {
  assert.doesNotThrow(function () {
    app.init(function (err) {
      done();
    });
  }, TypeError);
};

// make a request to /ping
api["/ping should respond to GET with 200"] = function (done) {
  helpers.makeGetRequest("/ping", function (res) {
    assert.equal(res.statusCode, 200);
    done();
  });
};

// make a request to /api/users
api["/api/users should respond to GET with 400"] = function (done) {
  helpers.makeGetRequest("/api/users", function (res) {
    assert.equal(res.statusCode, 400);
    done();
  });
};

// make a request to random path
api["A random path should respond to GET with 404"] = function (done) {
  helpers.makeGetRequest("/this/path/shouldnt/exit", function (res) {
    assert.equal(res.statusCode, 404);
    done();
  });
};

// Export the test to the runner
module.exports = api;
