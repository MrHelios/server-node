var http = require('http');
var urls = require('./app/urls');

http.createServer(function(request, response) {

  if( request.url in urls.urls ) urls.urls[request.url](request, response)

}).listen(8080);
