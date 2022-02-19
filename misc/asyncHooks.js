/**
 * Async Hooks Example
 *
 *
 */

// Dependencies
var async_hooks = require("async_hooks");
var fs = require("fs");

// Target execution context
var targetExecutionContext = false;

// Write an arbitrary async function
var whatTimeIsIt = function (callback) {
  setInterval(function () {
    fs.writeSync(
      1,
      "When the setInterval runs, the execution context is " +
        async_hooks.executionAsyncId() +
        "\n"
    );
    callback(Date.now());
  }, 1000);
};

// Call that function
whatTimeIsIt(function (time) {
  fs.writeSync(1, "The time is " + time + "\n");
});

// Hooks
var hooks = {
  init(asyncId, type, triggerAsyncId, resource) {
    fs.writeSync(1, "Hooks init " + asyncId + "\n");
  },
  before(asyncId) {
    fs.writeSync(1, "Before hooks init " + asyncId + "\n");
  },
  after(asyncId) {
    fs.writeSync(1, "after hooks init " + asyncId + "\n");
  },
  destory(asyncId) {
    fs.writeSync(1, "destory hooks init " + asyncId + "\n");
  },
  promiseResolve(asyncId) {
    fs.writeSync(1, "promiseResolve hooks init " + asyncId + "\n");
  },
};

// Create a new AsyncHooks instance
var asyncHook = async_hooks.createHook(hooks);
asyncHook.enable();
