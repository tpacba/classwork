var http = require("http");

var PORT = 7000;



function handleRequest(request, response) {
    response.end("Take a shower!" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})

