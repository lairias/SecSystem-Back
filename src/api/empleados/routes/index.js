const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const EmpleadosCtrl = require("../controllers/EmpleadosCtrl");
const { check } = require("express-validator");

router.get("/", EmpleadosCtrl.obtenerEmpleado);
router.get("/:cod", EmpleadosCtrl.obtenerEmpleadoPorCod);
router.post(
  "/",
  [
    check(
      "hrstrab_emp",
      "Solo puede tener numeros, sin espacio de 1 a 3 digitos "
    ).matches(/^\d\S{1,999}/),
    check(
      "des_contrato",
      "Solo se aceptan letras, espacios, guiones y numeros"
    ).matches(/^[a-zA-Z0-9À-ÿ\s\w]{5,1000}/),
  ],
  EmpleadosCtrl.agregarEmpleado
);
router.put(
  "/:cod",
  [
    check(
      "hrstrab_emp",
      "Solo puede tener numeros, sin espacio de 1 a 3 digitos "
    ).matches(/^\d\S{1,999}/),
    check(
      "des_contrato",
      "Solo se aceptan letras, espacios, guiones y numeros"
    ).matches(/^[a-zA-Z0-9À-ÿ\s\w]{5,1000}/),
  ],
  EmpleadosCtrl.actualizarEmpleado
);
router.delete("/:cod", EmpleadosCtrl.eliminarEmpleado);

module.exports = router;
