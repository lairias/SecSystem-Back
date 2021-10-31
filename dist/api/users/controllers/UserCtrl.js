"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Importing the packages required for the project.
var _require = require("express-validator"),
    validationResult = _require.validationResult;

var mysqlConnection = require("../../../config/db"); //const express = require('express-validator');
// CRUD Methods
//Get all Employees


exports.obtener_User = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var query, usuarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = "CALL SHOW_USERS";
            _context.prev = 1;
            _context.next = 4;
            return mysqlConnection.query(query);

          case 4:
            usuarios = _context.sent;
            return _context.abrupt("return", res.json(usuarios["0"]));

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

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtenerUserPorCod = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var cod, query, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cod = req.params.cod;
            query = " CALL SHOW_USERS_COD(?)";
            console.log(cod);
            _context2.prev = 3;
            _context2.next = 6;
            return mysqlConnection.query(query, [cod]);

          case 6:
            result = _context2.sent;
            return _context2.abrupt("return", res.json(result));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            next();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.agregar_User = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var errors, _req$body, name, email, password, rol_id, usr_registro, query;

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
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, rol_id = _req$body.rol_id, usr_registro = _req$body.usr_registro;
            query = "CALL INSERT_USER(?, ?, ?, ?);";
            _context3.prev = 5;
            _context3.next = 8;
            return mysqlConnection.query(query, [name, email, password, rol_id]);

          case 8:
            return _context3.abrupt("return", res.json({
              Status: "Empleado Agregado"
            }));

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](5);
            console.log(_context3.t0);
            next();

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 11]]);
  }));

  return function (_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.actualizar_User = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var errors, Estado, cod, query;
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
            Estado = req.body.Estado;
            cod = req.params.cod;
            query = "CALL UPDATE_USER(?, ?);";
            console.log(req.body);
            _context4.prev = 7;
            _context4.next = 10;
            return mysqlConnection.query(query, [cod, Estado]);

          case 10:
            return _context4.abrupt("return", res.json({
              Status: "Usuario Actualizado"
            }));

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](7);
            console.log(_context4.t0);
            next();

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[7, 13]]);
  }));

  return function (_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

exports.eliminar_User = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var usr_registro, cod, query;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            usr_registro = req.body.usr_registro;
            cod = req.params.cod;
            query = "CALL DELETE_USER(?);";
            console.log("CALL DELETE_USER('".concat(cod, "')"));
            _context5.prev = 4;
            _context5.next = 7;
            return mysqlConnection.query(query, [cod]);

          case 7:
            return _context5.abrupt("return", res.json({
              Status: "Usuario Eliminado"
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](4);
            console.log(_context5.t0);
            next();

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 10]]);
  }));

  return function (_x12, _x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}();

exports.actualizar_Use_Pass = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var cod, _req$body2, pass, fecha, query, result;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            cod = req.params.cod;
            _req$body2 = req.body, pass = _req$body2.pass, fecha = _req$body2.fecha;
            query = " CALL UPDATE_USER_PASS(?,?,?)";
            console.log(req.body);
            _context6.prev = 4;
            _context6.next = 7;
            return mysqlConnection.query(query, [cod, pass, fecha]);

          case 7:
            result = _context6.sent;
            return _context6.abrupt("return", res.json(result));

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](4);
            console.log(_context6.t0);
            next();

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[4, 11]]);
  }));

  return function (_x15, _x16, _x17) {
    return _ref6.apply(this, arguments);
  };
}();

exports.Fecha_pass_user = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
    var cod, query, result;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            cod = req.params.cod;
            query = " SELECT DAYOFYEAR(users.Time_pass) as fecha_pass FROM users WHERE id =  ?;";
            console.log(cod);
            _context7.prev = 3;
            _context7.next = 6;
            return mysqlConnection.query(query, [cod]);

          case 6:
            result = _context7.sent;
            return _context7.abrupt("return", res.json(result));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);
            next();

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 10]]);
  }));

  return function (_x18, _x19, _x20) {
    return _ref7.apply(this, arguments);
  };
}();