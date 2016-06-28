var http = require('http');
var fs = require('fs');

urls = {'/': './static/index.html'};

http.createServer(function(request, response) {

  if( request.url in urls ) {
    fs.readFile(urls[request.url], function(err,html) {
      response.write(html);
      response.end();
    })
  }
}).listen(8080);
