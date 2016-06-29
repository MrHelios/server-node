var sqlite3 = require('sqlite3').verbose();

function Modelo(nombre,archivo) {

  this.archivo = archivo;
  this.nombre = nombre;
  this.valores = {'id':'INTEGER PRIMARY KEY'};

  this.db = null;
  self = this;

  this.agregarValores = function(k,v) {
    this.valores[k] = v;
  }

  // Requiere que el archivo exista.
  this.crearDatabase = function() {
    this.db = new sqlite3.Database(this.archivo);
  }

  this.crearTabla = function() {

    self.db.serialize(function() {
      var s = '(';
      for(var i in self.valores) {
        s += i +' '+ self.valores[i];
      }
      s += ')';
      //console.log(s);
      self.db.run('CREATE TABLE ' + self.nombre + ' ' + s);
    });
  }

  this.insertar = function(valores) {
    var s = Modelo.prototype.acomodarINSERT(valores);

    //console.log(s);
    self.db.run('INSERT INTO ' + self.nombre + ' VALUES ' + s);
  }

  this.mostrar = function() {
    var s = Modelo.prototype.acomodarSELECT(self.valores);

    //console.log('Mostrar:' + s);
    self.db.each('SELECT ' + s + ' FROM ' + self.nombre, function(err, fila) {
      if(err) console.log(err);
      else {
        console.log(fila);
      }
    });
  }
}

Modelo.prototype.acomodarSELECT = function(valores) {
  s = '';
  for(var i in valores) {
    s += i + ',';
  }
  s = s.substring(0,s.length-1);

  return s;
}

Modelo.prototype.acomodarINSERT = function(valores) {
  s = '(';
  for(var i in valores) {
    s += valores[i] + ',';
  }
  s = s.substring(0,s.length-1);
  s += ')';

  return s;
}

module.exports.Modelo = Modelo;
