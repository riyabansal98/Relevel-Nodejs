
//adding the required library
const http = require('http');

//add listener
const listener = function(req, res) {
    //req -> request
    //res -> response
    console.log("Server processing request");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200); //writeHeaders //statusCode -> 200
    res.end(`{"message": "This is a JSON response from a json server."}`); //end the response process.
}

const simpleServer = http.createServer(listener);

simpleServer.listen(8080);

// curl http://localhost:8080
// browser: http://localhost:8080/