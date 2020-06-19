var express=require('express');
var app=express();
const cors = require('cors');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var $ = require('jquery');
// window.$ = $;
// require('bootstrap'); 
var bodyParser= require('body-parser');
var path = require('path');

let list=[];

app.use(cors());// cross-origin resource sharing	
app.use('/asset',express.static(__dirname +'/asset'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',function(req,res) {
	res.sendFile('/files/index.html',{root:__dirname});

	// var response ="hello!"+req.query.firstName;
	// res.end(JSON.stringify(req.query));
	// res.end(response);
});

app.get('/page1',function(req,res) {
	 // const book = req.body;
  //    console.log(book);
  //    list.push(book);
	res.sendFile('/files/page1.html',{root:__dirname});

	// var response ="hello!"+req.query.firstName;
	// res.end(JSON.stringify(req.query));
	// res.end(response);
});

const data = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/page2", false);
    xhttp.send();

    // const books = JSON.parse(xhttp.responseText);

    for (let list of books) {
        const x = `
            <h2>Terms Of Use</h2>



<p>Before using ${list.website} please read our Terms of Use carefully. If you do not agree with these Terms of Use, then you are not authorized to use these ${BlogName} blog. By using this ${BlogName} blog you are agreeing to be bound by these Terms of Use.</p>



<h4>Use of the Blog</h4>



<p>You may use this blog for non-commercial purpose only.The blog is for knowledge and informational purpose only.</p>



<h4>Acceptable Use Policy</h4>



<p>${list.website} Blog expects all of it’s users give respect to other people. If you notice any unacceptable behavior from any user. You are free to report such activity to a ${BlogName} Blog at ${ContactEmail}.</p>



<h4>Comment Policy</h4>



<p>${list.website} Blog welcome comment and encourage them on our blog. Following are the reason due to which comment will be edited or deleted.</p>



<p>Any types of spam advertising comment will be deleted.</p>



<p>Comment that attack personal individually will be deleted.</p>



<p>Only Topic relevant links is permitted in comment.</p>



<p>Comment should be relevant to post topic.</p>



<p>The owner have full right to edited or deleted all published comment to this blog without notice.</p>



<p>These comment policy changed at any time without notice.</p>



<h4>Content Copyrights Policy</h4>



<p>Do not use our content for commercial purpose.</p>



<p>Do not copy or reproduce our content on other blog or website.</p>



<h4>No Warranties Policy</h4>



<p>The Owner of this blog makes no representations as to the accuracy or completeness of any information on this blog.</p>



<p>The Owner of the blog is not liable for any types of error or omissions.</p>



<p>The Owner of the blog is not liable for injuries, losses, or damages.</p>



<h4>Modification</h4>



<h4>These Terms of Use change at any time without notice.</h4>



<h4>Also read our Privacy Policy</h4>



<h4>If you have any question about our Terms of Use please contact us at ${list.email}.</h4>


`

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

app.post('/page2',function(req,res) {
	const list = req.body;
     // console.log(book);
     // list.push(book);
     // data();
     // console.log(list.website);
	// res.send(`Full name is:${req.body.website}`);
	// res.end(JSON.stringify(req.body));
	// res.sendFile('/files/page2.html',{root:__dirname});

	// var response ="hello!"+req.query.firstName;
	// res.end(JSON.stringify(req.query));
	// res.end(response);
	const x = `
		<link rel="stylesheet" type="text/css" href="asset/myFile.css">

            <h2>Terms Of Use</h2>



<p>Before using ${list.website} please read our Terms of Use carefully. If you do not agree with these Terms of Use, then you are not authorized to use these ${list.website} blog. By using this ${list.website} blog you are agreeing to be bound by these Terms of Use.</p>



<h4>Use of the Blog</h4>



<p>You may use this blog for non-commercial purpose only.The blog is for knowledge and informational purpose only.</p>



<h4>Acceptable Use Policy</h4>



<p>${list.website} Blog expects all of it’s users give respect to other people. If you notice any unacceptable behavior from any user. You are free to report such activity to a ${list.website} Blog at ${list.email}.</p>



<h4>Comment Policy</h4>



<p>${list.website} Blog welcome comment and encourage them on our blog. Following are the reason due to which comment will be edited or deleted.</p>



<p>Any types of spam advertising comment will be deleted.</p>



<p>Comment that attack personal individually will be deleted.</p>



<p>Only Topic relevant links is permitted in comment.</p>



<p>Comment should be relevant to post topic.</p>



<p>The owner have full right to edited or deleted all published comment to this blog without notice.</p>



<p>These comment policy changed at any time without notice.</p>



<h4>Content Copyrights Policy</h4>



<p>Do not use our content for commercial purpose.</p>



<p>Do not copy or reproduce our content on other blog or website.</p>



<h4>No Warranties Policy</h4>



<p>The Owner of this blog makes no representations as to the accuracy or completeness of any information on this blog.</p>



<p>The Owner of the blog is not liable for any types of error or omissions.</p>



<p>The Owner of the blog is not liable for injuries, losses, or damages.</p>



<h4>Modification</h4>



<h4>These Terms of Use change at any time without notice.</h4>



<h4>Also read our Privacy Policy</h4>



<h4>If you have any question about our Terms of Use please contact us at ${list.email}.</h4>


`;

	res.send(x);

});

app.listen(1337,function(){
	console.log('Lising');
})
