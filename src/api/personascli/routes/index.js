const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const PersonasCliCtrl = require("../controllers/PersonasCliCtrl");
const { check } = require("express-validator");

router.get("/", PersonasCliCtrl.obtenerPersonasCli);

module.exports = router;
