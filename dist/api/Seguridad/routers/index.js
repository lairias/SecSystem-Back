"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var _require2 = require("../controllers/SeguridadCtrl"),
    Fecha_pass = _require2.Fecha_pass,
    fecha_sistem = _require2.fecha_sistem;

router.get("/:cod", Fecha_pass);
router.get("/", fecha_sistem);
module.exports = router;