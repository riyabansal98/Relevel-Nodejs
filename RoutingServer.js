//http is a core library. 
const http = require('http');
const listener = function(req, res) {
    res.writeHead(200);
    switch(req.url) {
        case "/name":
            res.end('Http server response: Tushar Raina');
            break;
        case "/company":
            res.end('Http server response: A reputed MNC');
            break;
        //If any of the above end points are not mentioned, default will be used. 
        default:
            res.end('Http server response: Incorrect Endpoint!');
    }
    console.log("Server processing request");
}
const simpleServer = http.createServer(listener);
simpleServer.listen(8080);

//Working URLs
//http://localhost:8080/name
//http://localhost:8080/company

