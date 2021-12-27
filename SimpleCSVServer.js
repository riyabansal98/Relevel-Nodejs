const http = require('http');

const listener = function(req, res) {
    //req -> request
    //res -> response
    console.log("Server processing request");
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=details.csv");
    res.writeHead(200); //writeHeaders //statusCode -> 200
    res.end(`name,rollNumber,school\nTushar Raina, 34, Thapar`); //end the response process.
}

const simpleServer = http.createServer(listener);

simpleServer.listen(8080);

// curl http://localhost:8080
// browser: http://localhost:8080/

//CSV -> is a comma seperated file

//.txt
// [
//     qfweggrgthth
// ]

// //.csv ->
// [
//     Riya, bansal
//     Balbir, kumar
//     mrinal, mahanta

// ]

// //you try to open a csv file in a excel software. 
// [
//     Riya   Bansal  
//     Balbir Kumar
//     Mrinal Mahanta
// ]

