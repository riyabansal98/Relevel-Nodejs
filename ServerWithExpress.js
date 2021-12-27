//importing express module
const expressJS = require("express");
var expressApp = expressJS();
//add routing logic
//get(url, response)
expressApp.get("/", function(request, response) {
    response.send("ExpressJS backed http endpoint is ready.");
});
expressApp.get("/name", function(request, response){
    response.send("ExpressJS backed http endpoint is ready! Name: Tushar Raina");
});
expressApp.get("/company", function(request, response){
    response.send("ExpressJS backed http endpoint is ready! Company: A reputed MNC");
});
expressApp.listen(8000, function(){
    console.log("Application is listening to port 8000");
});




// /name
// /company