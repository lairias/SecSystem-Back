const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const RegistroCtrl = require("../controllers/RegistroCtrl");
const { check } = require("express-validator");

router.get("/", RegistroCtrl.obternerRegistro);
router.get("/:cod", RegistroCtrl.obternerRegistroPorCod);
router.post(
  "/",
  [
    check(
      "turno_asignado",
      "Solo se aceptan letras, no caracteres especiales ni números"
    ).matches(/^[a-zA-ZÀ-ÿ\d\_\-]{1,80}$/),
  ],
  RegistroCtrl.agregarRegistro
);
router.put(
  "/:cod",
  [
    check(
      "turno_asignado",
      "Solo se aceptan letras, no caracteres especiales ni números"
    ).matches(/^[a-zA-ZÀ-ÿ\d\_\-]{1,80}$/),
  ],
  RegistroCtrl.actualizarRegistro
);
router.delete("/:cod", RegistroCtrl.eliminarRegistro);

module.exports = router;
