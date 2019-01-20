const express = require('express');
const request = require('request');
const app = express();
const port = 5000;

app.use(express.static('folder'));
app.get('/hi', function(request, response) {

 response.sendfile('./index.html');
});

var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, contents) {
    console.log(contents);

});
 app.get('/file',function(req, res){
	fs.readFile('read.txt', 'utf8', function(err, contents) {
	    console.log(contents);
	    res.send(contents);
	 });
 });

 app.get('/endpointAPI',function(req, responds){
	request('https://jsonplaceholder.typicode.com/todos/', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  console.log(body.url);
	  console.log(body.explanation);
	  responds.send(body);
	});

});

app.listen(port, () => console.log(`Listening on port ${port}!	`));