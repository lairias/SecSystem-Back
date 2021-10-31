"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var EmpleadosCtrl = require("../controllers/EmpleadosCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", EmpleadosCtrl.obtenerEmpleado);
router.get("/:cod", EmpleadosCtrl.obtenerEmpleadoPorCod);
router.post("/", [check("hrstrab_emp", "Solo puede tener numeros, sin espacio de 1 a 3 digitos ").matches(/^\d\S{1,999}/), check("des_contrato", "Solo se aceptan letras, espacios, guiones y numeros").matches(/^[a-zA-Z0-9À-ÿ\s\w]{5,1000}/)], EmpleadosCtrl.agregarEmpleado);
router.put("/:cod", [check("hrstrab_emp", "Solo puede tener numeros, sin espacio de 1 a 3 digitos ").matches(/^\d\S{1,999}/), check("des_contrato", "Solo se aceptan letras, espacios, guiones y numeros").matches(/^[a-zA-Z0-9À-ÿ\s\w]{5,1000}/)], EmpleadosCtrl.actualizarEmpleado);
router["delete"]("/:cod", EmpleadosCtrl.eliminarEmpleado);
module.exports = router;