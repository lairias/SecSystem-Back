"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var ClientesCtrl = require("../controllers/ClientesCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", ClientesCtrl.obternerCliente);
router.get("/:cod", ClientesCtrl.obternerClientePorCod);
router.post("/", [check("nom_empresa", "Solo se aceptan letras no caracteres especiales debe tener mas de 3 letras").matches(/^[a-zA-Z0-9À-ÿ\s\w]{3,100}$/), check("correo_electronico", "Se aceptan letras, caracteres escpeciales y números, no se aceptan espacios").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/), check("des_contrato", "Solo se aceptan letras y debe tener mas de 5 letras").matches(/^[a-zA-Z0-9À-ÿ\s\w]{5,1000}/)], ClientesCtrl.agregarCliente);
router.put("/:cod", [check("nom_empresa", "Solo se aceptan letras no caracteres especiales debe tener mas de 3 letras").matches(/^[a-zA-Z0-9À-ÿ\s\w]{3,100}$/), check("correo_electronico", "Se aceptan letras, caracteres escpeciales y números, no se aceptan espacios").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/), check("des_contrato", "Solo se aceptan letras y debe tener mas de 5 letras").matches(/^[a-zA-Z0-9À-ÿ\s\w]{5,1000}/)], ClientesCtrl.actualizarCliente);
router["delete"]("/:cod", ClientesCtrl.eliminarCliente);
module.exports = router;