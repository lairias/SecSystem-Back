const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const PersonasCtrl = require("../controllers/PersonasCtrl");
const { check } = require("express-validator");

router.get("/", PersonasCtrl.obternerPersona);
router.get("/:cod", PersonasCtrl.obternerPersonaPorCod);
router.post("/", PersonasCtrl.agregarPersona);
router.put("/:cod", PersonasCtrl.actualizarPersona);
router.delete("/:cod", PersonasCtrl.eliminarPersona);

module.exports = router;
