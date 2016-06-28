var vista = require('./vista.js');

var urls = {
  '/': vista.index,
  '/mas': vista.mas
};

module.exports.urls = urls;
