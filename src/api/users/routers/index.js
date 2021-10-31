const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const {
  obtenerUserPorCod,
  actualizar_Use_Pass,
  agregar_User,
  actualizar_User,
  eliminar_User,
  Fecha_pass_user,
  obtener_User,
} = require("../controllers/UserCtrl");
const { check } = require("express-validator");

router.put("/password/:cod", actualizar_Use_Pass);
router.get("/fechaPass/:cod", Fecha_pass_user);
router.get("/:cod", obtenerUserPorCod);
router.get("/", obtener_User);
router.put("/:cod", actualizar_User);
router.delete("/:cod", eliminar_User);
router.post("/", agregar_User);

module.exports = router;
