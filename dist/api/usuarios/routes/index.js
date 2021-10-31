"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var UsuariosCtrl = require("../controllers/UsuariosCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", UsuariosCtrl.obtenerUsuario);
router.get("/:cod", UsuariosCtrl.obtenerUsuarioPorCod);
router.post("/", [check("usr", "no usar espacios ").matches(/^[a-zA-Z0-9\s]{4,15}$/), check("password", 'Ingrese una combinación de al menos siete números, letras y signos de puntuación como "!" y "&".').matches(/^[a-zA-Z0-9\s]{7,25}$/), check("correo", "Se aceptan letras, caracteres escpeciales y números, no se aceptan espacios").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)], UsuariosCtrl.agregarUsuario);
router.put("/:cod", [check("usr", "no usar espacios ").matches(/^[a-zA-Z0-9\s]{4,15}$/), check("password", 'Ingrese una combinación de al menos siete números, letras y signos de puntuación como "!" y "&".').matches(/^[a-zA-Z0-9\s]{7,25}$/), check("correo", "Se aceptan letras, caracteres escpeciales y números, no se aceptan espacios").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)], UsuariosCtrl.actualizarUsuario);
router["delete"]("/:cod", UsuariosCtrl.eliminarUsuario);
module.exports = router;