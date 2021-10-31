const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const PersonasEmpCtrl = require("../controllers/PersonasEmpCtrl");
const { check } = require("express-validator");

router.get("/", PersonasEmpCtrl.obtenerPersonasEmp);

module.exports = router;
