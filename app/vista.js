var miframe = require('../miFrame/template.js');

index = function(request, response) {
  // Boludear con el GET o POST
  miframe.render(__dirname + '/static/index.html', response);
}

module.exports.index = index;