"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var bitacorasCtrl = require("../controllers/bitacorasCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", bitacorasCtrl.obtenerBitacora);
module.exports = router;