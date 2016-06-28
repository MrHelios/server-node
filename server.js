var http = require('http');
var urls = require('./app/urls');
var u = require('./miFrame/url');

http.createServer(function(request, response) {

  u.manejadorURL(request, response, urls);
}).listen(8080);
