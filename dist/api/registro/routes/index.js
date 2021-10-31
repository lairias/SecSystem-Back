"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var RegistroCtrl = require("../controllers/RegistroCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", RegistroCtrl.obternerRegistro);
router.get("/:cod", RegistroCtrl.obternerRegistroPorCod);
router.post("/", [check("turno_asignado", "Solo se aceptan letras, no caracteres especiales ni números").matches(/^[a-zA-ZÀ-ÿ\d\_\-]{1,80}$/)], RegistroCtrl.agregarRegistro);
router.put("/:cod", [check("turno_asignado", "Solo se aceptan letras, no caracteres especiales ni números").matches(/^[a-zA-ZÀ-ÿ\d\_\-]{1,80}$/)], RegistroCtrl.actualizarRegistro);
router["delete"]("/:cod", RegistroCtrl.eliminarRegistro);
module.exports = router;