"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var PersonasCtrl = require("../controllers/PersonasCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", PersonasCtrl.obternerPersona);
router.get("/:cod", PersonasCtrl.obternerPersonaPorCod);
router.post("/", PersonasCtrl.agregarPersona);
router.put("/:cod", PersonasCtrl.actualizarPersona);
router["delete"]("/:cod", PersonasCtrl.eliminarPersona);
module.exports = router;