/**
 *
 *  Example HTTP2 Server
 */

// Dependencies

var http2 = require("http2");

//Init the server

var server = http2.createServer();

// On a stream , send hello world html
server.on("stream", function (stream, headers) {
  stream.respond({
    status: 200,
    "content-type": "text/html",
  });
  stream.end("<html><body><p>hey its working</p></body></html>");
});

// listen on 6000
server.listen(6000);
