
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , port = 3000;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.configure('production', function() {
  app.use(express.errorHandler());

  port = 3000;
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index-new.html');
});

app.get('/chad', function(req, res){
  res.sendfile(__dirname + '/public/chad.html');
});

http.createServer(app).listen(port, function(){
  console.log("Express server listening on port " + port);
});
