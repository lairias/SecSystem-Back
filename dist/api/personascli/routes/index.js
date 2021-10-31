"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var PersonasCliCtrl = require("../controllers/PersonasCliCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", PersonasCliCtrl.obtenerPersonasCli);
module.exports = router;