const expressJS = require("express");
var expressApp = expressJS();
//http://localhost:8000
expressApp.get("/", function(request, response){
    response.send("ExpressJS backed http endpoint is ready. Please enter correct user id");
});
expressApp.get("/users/1", function(request, response){
    response.send("ExpressJS backed http endpoint is ready. Name: Tushar Raina ");
});
expressApp.get("/users/2", function(request, response){
    response.send("ExpressJS backed http endpoint is ready. Name: Sachin Tendulkar ");
});
expressApp.listen(8000, function(){
    console.log("Application is listening to port 8000");
});

//Issues
// if we have 1000 students in the system, we would need to add 1000 routes.