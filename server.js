var express = require("express");
var app = express();
const path = require('path');

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


app.get("/blog", function(req,res){
    res.sendFile(path.join(__dirname,"blog.html"));
  });

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"login.html"));
  });
  app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"read_more.html"));
  });
app.get("/registration", function(req,res){
    res.sendFile(path.join(__dirname,"registration.html"));
  });

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
});

app.use(express.static("public"));

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
