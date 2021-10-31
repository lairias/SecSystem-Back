"use strict";

// Importing the packages required for the project.    
require("@babel/polyfill");

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var morgan = require('morgan');

var cors = require('cors'); //Ajsutes


require('dotenv').config();

app.set('port', process.env.PORT || 3000); //**********Ajustes del CORS */

var ListPermitida = ["http://localhost:8000"];
var corsAjustes = {
  origin: function origin(_origin, callback) {
    var existe = ListPermitida.some(function (dominio) {
      return dominio == _origin;
    });

    if (existe) {
      callback(null, true);
    } else {
      callback(new Error('No Permitido'));
    }
  }
}; //**********FIN Ajustes del CORS */
//Fin de Ajustes
//middleware

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(morgan('dev')); //Fin de middleware
//Route api

app.use('/api/clientes', require('./src/api/clientes/routes'));
app.use('/api/empleados', require('./src/api/empleados/routes'));
app.use('/api/personas', require('./src/api/personas/routes'));
app.use('/api/recursos', require('./src/api/recursos/routes'));
app.use('/api/registro', require('./src/api/registro/routes'));
app.use('/api/usuarios', require('./src/api/usuarios/routes'));
app.use("/api/users", require("./src/api/users/routers"));
app.use('/api/planilla', require('./src/api/planilla/routes'));
app.use('/api/bitacoras', require('./src/api/bitacoras/routes'));
app.use('/api/respaldo', require('./src/api/respaldo/routers'));
app.use('/api/roles', require('./src/api/roles/routers'));
app.use("/api/personascli", require("./src/api/personascli/routes"));
app.use("/api/personasemp", require("./src/api/personasemp/routes"));
app.use("/api/seguridad", require("./src/api/Seguridad/routers")); //Starting server

app.listen(app.get('port'), function () {
  return console.log("server on port http://localhost:".concat(app.get('port')));
});
module.exports = app;