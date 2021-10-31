"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Importing the packages required for the project.
var _require = require("express-validator"),
    validationResult = _require.validationResult;

var mysqlConnection = require("../../../config/db"); //const express = require('express-validator');
// CRUD Methods
//Get all Employees


exports.obtenerEmpleado = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var query, empleados;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = "CALL SHOW_EMPLEADOS;";
            _context.prev = 1;
            _context.next = 4;
            return mysqlConnection.query(query);

          case 4:
            empleados = _context.sent;
            return _context.abrupt("return", res.json(empleados["0"]));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtenerEmpleadoPorCod = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var cod, query, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cod = req.params.cod;
            query = "CALL SHOW_EMPLEADOS_COD(?)";
            _context2.prev = 2;
            _context2.next = 5;
            return mysqlConnection.query(query, [cod]);

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", res.json(result));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.agregarEmpleado = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var errors, _req$body, cod_persona, estado_empleado, tipo_empleado, hrstrab_emp, des_contrato, fec_ini_contrato, fec_fin_contrato, usr_registro, query, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 3:
            _req$body = req.body, cod_persona = _req$body.cod_persona, estado_empleado = _req$body.estado_empleado, tipo_empleado = _req$body.tipo_empleado, hrstrab_emp = _req$body.hrstrab_emp, des_contrato = _req$body.des_contrato, fec_ini_contrato = _req$body.fec_ini_contrato, fec_fin_contrato = _req$body.fec_fin_contrato, usr_registro = _req$body.usr_registro;
            query = "CALL INSERT_EMPLEADO(?, ?, ?, ?, ?, ?, ?, ?);";
            _context3.prev = 5;
            _context3.next = 8;
            return mysqlConnection.query(query, [cod_persona, estado_empleado, tipo_empleado, hrstrab_emp, des_contrato, fec_ini_contrato, fec_fin_contrato, usr_registro]);

          case 8:
            result = _context3.sent;
            return _context3.abrupt("return", res.json({
              Status: "Empleado Agregado"
            }));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](5);
            console.log(_context3.t0);
            next();

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 12]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.actualizarEmpleado = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var errors, _req$body2, estado_empleado, tipo_empleado, hrstrab_emp, des_contrato, fec_ini_contrato, fec_fin_contrato, usr_registro, cod, query, result;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 3:
            _req$body2 = req.body, estado_empleado = _req$body2.estado_empleado, tipo_empleado = _req$body2.tipo_empleado, hrstrab_emp = _req$body2.hrstrab_emp, des_contrato = _req$body2.des_contrato, fec_ini_contrato = _req$body2.fec_ini_contrato, fec_fin_contrato = _req$body2.fec_fin_contrato, usr_registro = _req$body2.usr_registro;
            cod = req.params.cod;
            query = "CALL UPDATE_EMPLEADO(?, ?, ?, ?, ?, ?, ?, ?);";
            _context4.prev = 6;
            _context4.next = 9;
            return mysqlConnection.query(query, [cod, estado_empleado, tipo_empleado, hrstrab_emp, des_contrato, fec_ini_contrato, fec_fin_contrato, usr_registro]);

          case 9:
            result = _context4.sent;
            return _context4.abrupt("return", res.json({
              Status: "Empleado Actualizado"
            }));

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](6);
            console.log(_context4.t0);
            next();

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[6, 13]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.eliminarEmpleado = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var usr_registro, cod, query, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            usr_registro = req.body.usr_registro;
            cod = req.params.cod;
            query = "CALL DELETE_EMPLEADO(?, ?);";
            _context5.prev = 3;
            _context5.next = 6;
            return mysqlConnection.query(query, [cod, usr_registro]);

          case 6:
            result = _context5.sent;
            return _context5.abrupt("return", res.json({
              Status: "EmplEado Eliminado"
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);
            next();

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 10]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();