const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const bitacorasCtrl = require("../controllers/bitacorasCtrl");
const { check } = require("express-validator");

router.get("/", bitacorasCtrl.obtenerBitacora);

module.exports = router;
