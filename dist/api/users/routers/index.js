"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var _require2 = require("../controllers/UserCtrl"),
    obtenerUserPorCod = _require2.obtenerUserPorCod,
    actualizar_Use_Pass = _require2.actualizar_Use_Pass,
    agregar_User = _require2.agregar_User,
    actualizar_User = _require2.actualizar_User,
    eliminar_User = _require2.eliminar_User,
    Fecha_pass_user = _require2.Fecha_pass_user;

var _require3 = require("express-validator"),
    check = _require3.check;

router.put("/password/:cod", actualizar_Use_Pass);
router.get("/fechaPass/:cod", Fecha_pass_user);
router.get("/:cod", obtenerUserPorCod);
router.put("/:cod", actualizar_User);
router["delete"]("/:cod", eliminar_User);
router.post("/", agregar_User);
module.exports = router;