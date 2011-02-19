
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
//var querystring = require('querystring');
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyDecoder());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.staticProvider(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

function getArtist(artistName){
thePath = "/ws/1/artist/?type=xml&name=jaco+pastorius";
var options = {
  host: 'www.musicbrainz.org',
  port: 80,
  path: thePath
};

console.log(options);

http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);
	
	res.on('data', function (chunk) {
    console.log('XMLResponse: ' + chunk);
  });

  //console.log(res);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
}

// Routes

app.get('/', function(req, res){
getArtist('Jaco Pastorius');
/*
  res.render('index', {
      title: 'artist'
  });*/
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port)
}
