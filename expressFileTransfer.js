var expressJS = require("express");
var path = require("path");
var fs = require("fs");
var expressApp = expressJS();

//1st MiddleWare -> Logging
expressApp.use((req, res, next) => {
    console.log("Incoming Request");
    console.log(req.url);
    next();
});

//2nd Middleware
//check the request url and see if it is valid file name
expressApp.use(function(req, res, next){

    //create the path of the file. 
    console.log("dirname " + __dirname);
    
    //path.join(a, b) => ab
    //__dirname => Users/riyabansal/Desktop/NodeDemo
    //req.url => /file1.txt
    //filepath => Users/riyabansal/Desktop/NodeDemo/file1.txt
    var filePath = path.join(__dirname, req.url);

    //fs.stat() is used to return information mentioned in the given file. 
    fs.stat(filePath, function(err, fileInfo){
        if(err){
            next();
            return;
        }
        if(fileInfo.isFile()) {
            res.sendFile(filePath);
        }else{
            next();
        }
    });
});

//3rd MiddleWare -> Logging
expressApp.use((req, res, next) => {
    console.log("Incorrect URL");
    console.log(req.url);
    next();
});

expressApp.listen(4000, function(){
    console.log("App Started at port 4000");
});