var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.urlencoded())

app.use(express.static("static"));


app.get("/hello",function(req,res){
	res.send("Hello World");
});

app.listen(2017,function(err){
	console.log("Application started on port 2017")
});

