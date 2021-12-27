const expressJS = require("express");
var expressApp = expressJS();

expressApp.get("/", function(request, response){
    response.send("ExpressJS backed http endpoint is ready. Please enter correct user id");
});

expressApp.get(/^\/users\/(\d+)$/, function(request, response){
    response.send("ExpressJS backed http endpoint is ready." + " Returning data for userId :" 
    + request.params[0]);
});

expressApp.listen(8000, function(){
    console.log("Application is listening to port 8000");
});

// Issues
// /users/ads
// /users/fEWefff
// 

// Regular Expressions (RegEx) /^a...s$/ -> any five letter string starting with a
// and ending with s. 