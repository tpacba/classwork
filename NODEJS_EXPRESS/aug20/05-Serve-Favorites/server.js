const http = require("http");
const fs = require("fs");

const PORT = 8000;

const server = http.createServer(handleRequest)



function handleRequest(request, response) {

    let path = request.url;

    switch (path) {

        case "/movies":
            return fs.readFile(__dirname + "/movies.html", function(error, data) {
                if (error) throw error;
                response.writeHead(200, {"Content-Type": "text/html"});
                response.end(data);
            });

        case "/frame":
            return fs.readFile(__dirname + "/frame.html", function(error, data) {
                if (error) throw error;
                response.writeHead(200, {"Content-Type": "text/html"});
                response.end(data);
            });

        case "/foods":
            return fs.readFile(__dirname + "/foods.html", function(error, data) {
                if (error) throw error;
                response.writeHead(200, {"Content-Type": "text/html"});
                response.end(data);
            })

        default:
            console.log("Sorry homie.");
            return fs.readFile(__dirname + "/index.html", function(error, data) {
                if (error) throw error;
                response.writeHead(200, {"Content-Type": "text/html"});
                response.end(data);
            })
    }
}

// function renderHTML(path, response) {
//     return fs.readFile(__dirname + path + ".html", (err, data) => {
//         if(err) throw err;
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.end(data)
//     })
// }


server.listen(PORT, function() {
    console.log("You listenin to: http://localhost:" + PORT);
});