var express=require('express');
var app=express();
// var $ = require('jquery');
// window.$ = $;
// require('bootstrap'); 
var bodyParser= require('body-parser');
var path = require('path');
app.use('/asset',express.static(__dirname +'/asset'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get('/',function(req,res) {
	res.sendFile('/files/index.html',{root:__dirname});

	// var response ="hello!"+req.query.firstName;
	// res.end(JSON.stringify(req.query));
	// res.end(response);
});

app.get('/page1',function(req,res) {
	res.sendFile('/files/page1.html',{root:__dirname});

	// var response ="hello!"+req.query.firstName;
	// res.end(JSON.stringify(req.query));
	// res.end(response);
});
app.get('/page2',function(req,res) {
	res.sendFile('/files/page2.html',{root:__dirname});

	// var response ="hello!"+req.query.firstName;
	// res.end(JSON.stringify(req.query));
	// res.end(response);
});

app.listen(1337,function(){
	console.log('Lising');
})
