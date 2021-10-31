const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const RecursosCtrl = require("../controllers/RecursosCtrl");
const { check } = require("express-validator");

router.get("/", RecursosCtrl.obternerRecurso);
router.get("/:cod", RecursosCtrl.obternerRecursoPorCod);
router.post(
  "/",
  [
    check("des_recurso", "Solo se aceptan letras").matches(
      /^[a-zA-Z0-9À-ÿ\s\-]{5,1000}$/
    ),
    check(
      "serie_recurso",
      "Solo se aceptan letras, numeros con guiones sin espacios"
    ).matches(/^[a-zA-Z0-9\S\-\_\.]{3,10000}$/),
    check(
      "almacen",
      "solo se aceptan numeros sin espacios ni Guiones y debe tener 2 digitos maximo"
    ).matches(/^\S\d{0,2}$/),
  ],
  RecursosCtrl.agregarRecurso
);
router.put(
  "/:cod",
  [
    check("des_recurso", "Solo se aceptan letras").matches(
      /^[a-zA-Z0-9À-ÿ\s\-]{5,1000}$/
    ),
    check(
      "serie_recurso",
      "Solo se aceptan letras, numeros con guiones sin espacios"
    ).matches(/^[a-zA-Z0-9\S\-\_\.]{3,10000}$/),
    check(
      "almacen",
      "solo se aceptan numeros sin espacios ni Guiones y debe tener 2 digitos maximo"
    ).matches(/^\S\d{0,2}$/),
  ],
  RecursosCtrl.actualizarRecurso
);
router.delete("/:cod", RecursosCtrl.eliminarRecurso);

module.exports = router;
