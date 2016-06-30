var http = require('http');
var urls = require('./app/urls');
var u = require('./miFrame/url');

var app = http.createServer(function(request, response) {
  u.manejadorURL(request, response, urls);
});
app.listen(8080);

var io = require('socket.io')(app);

io.on('connection', function(socket){
  // esta va a index.
  socket.emit('hola','Esto es muy guay, bro.');
  // esto viene de index.
  socket.on('saludos', function(data) {
    console.log(data);
  })
  // esto viene de mas.
  socket.on('mas', function(data) {
    console.log(data);
  })
});
