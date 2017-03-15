var express = require("express");
var app = express();

app.get("/hello",function(req,res){
	res.send("Hello World");
});

app.listen(2017,function(err){
	console.log("Application started on port 2017")
});
