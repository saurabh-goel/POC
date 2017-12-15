// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port  	 = process.env.PORT || 3000; 				// set the port

app.use(express.static(__dirname + '/'));
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);