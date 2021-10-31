"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var PersonasEmpCtrl = require("../controllers/PersonasEmpCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", PersonasEmpCtrl.obtenerPersonasEmp);
module.exports = router;