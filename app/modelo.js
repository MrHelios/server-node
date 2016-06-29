var db = require('../miFrame/db');

var database = new db.DB('test.db');
database.crearDatabase();

var tabla_linea = new db.Tabla('linea',database.db);
tabla_linea.agregarValores('id','INTEGER');
tabla_linea.crearTabla();

var tabla_rect = new db.Tabla('rectangulo',database.db);
tabla_rect.agregarValores('id','INTEGER');
tabla_rect.crearTabla();

module.exports.tabla_linea = tabla_linea;
module.exports.tabla_rect = tabla_rect;
