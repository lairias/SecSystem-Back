const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const UsuariosCtrl = require("../controllers/UsuariosCtrl");
const { check } = require("express-validator");

router.get("/", UsuariosCtrl.obtenerUsuario);
router.get("/:cod", UsuariosCtrl.obtenerUsuarioPorCod);
router.post(
  "/",
  [
    check("usr", "no usar espacios ").matches(/^[a-zA-Z0-9\s]{4,15}$/),
    check(
      "password",
      'Ingrese una combinación de al menos siete números, letras y signos de puntuación como "!" y "&".'
    ).matches(/^[a-zA-Z0-9\s]{7,25}$/),
    check(
      "correo",
      "Se aceptan letras, caracteres escpeciales y números, no se aceptan espacios"
    ).matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  ],
  UsuariosCtrl.agregarUsuario
);

router.put(
  "/:cod",
  [
    check("usr", "no usar espacios ").matches(/^[a-zA-Z0-9\s]{4,15}$/),
    check(
      "password",
      'Ingrese una combinación de al menos siete números, letras y signos de puntuación como "!" y "&".'
    ).matches(/^[a-zA-Z0-9\s]{7,25}$/),
    check(
      "correo",
      "Se aceptan letras, caracteres escpeciales y números, no se aceptan espacios"
    ).matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  ],
  UsuariosCtrl.actualizarUsuario
);
router.delete("/:cod", UsuariosCtrl.eliminarUsuario);

module.exports = router;
