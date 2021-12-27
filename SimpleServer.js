
const http = require('http');

const listener = function(req, res) {
    //req -> request
    //res -> response
    console.log("Server processing request");
    console.log("Still active");
    res.writeHead(200); //writeHeaders //statusCode -> 200
    res.end('Our first Http server'); //end the response process.
}

const simpleServer = http.createServer(listener);

simpleServer.listen(8080);

// curl http://localhost:8080
// browser: http://localhost:8080/
