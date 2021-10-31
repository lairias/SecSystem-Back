"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router();

var multer = require("multer");

var path = require("path");

var Importer = require("mysql-import");

var _require2 = require("express-validator"),
    validationResult = _require2.validationResult; //********************** Configuracion del DUMP */


var Fichero;
var fecha = new Date(); //***********Confuguracoion del multer */

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "./src/UPLOAD");
  },
  filename: function filename(req, file, cb) {
    var SQL = file.fieldname + "-" + fecha.getFullYear() + "-" + fecha.getMonth() + "-" + fecha.getDate() + "-" + fecha.getHours() + "-" + fecha.getMinutes();
    cb(null, SQL + path.extname(file.originalname));
    Fichero = SQL;
    console.log(Fichero);
  }
});
var upload = multer({
  storage: storage
}); //Fin de configuracion del multer
//********************** FIN Configuracion del DUMP */
//********************confuguracion del  Import

var host = process.env.HOST;
var user = process.env.USER;
var password = process.env.PASSWORD;
var database = process.env.DATABASE;
var importer = new Importer({
  host: host,
  user: user,
  password: password,
  database: database
}); //********************FIN confuguracion del  Import
//controllers

var Respaldo = require("../controllers/RespaldoCtrl");

router.get("/", Respaldo.CrearRespaldo); //Metodo de importacion a la base

router.post("/upload", upload.single("file"), /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log("********************************************");
            _context.next = 4;
            return importer.onProgress(function (progress) {
              var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
              console.log("".concat(percent, "% Completed"));
            });

          case 4:
            console.log(Fichero);
            _context.next = 7;
            return importer["import"]("./src/UPLOAD/".concat(Fichero, ".sql")).then(function () {
              console.log("funciona");
              var files_imported = importer.getImported();
              console.log("".concat(files_imported.length, " SQL file(s) imported."));
            })["catch"](function (err) {
              console.error(err);
            });

          case 7:
            return _context.abrupt("return", res.redirect("http://localhost:8000/admin/respaldos"));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            next();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;