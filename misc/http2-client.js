/**
 * Example HTTP2 Client
 *
 *
 */

// Dependencies
var http2 = require("http2");

// Create client
var client = http2.connect("https://localhost:6000");

// Create request
var req = client.request({
  ":path": "/",
});

// When a message is recieved ,add the pieces of it together until you reach the end
var str = "";
req.on("data", function (chunk) {
  str += chunk;
});

// when the message end , log it
req.on("end", function () {
  console.log(str);
});

//End the request
req.end();
