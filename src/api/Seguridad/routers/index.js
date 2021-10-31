const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const {
  Parametro,
  fecha_sistem,
  Parametros,
  UpateParametro,
} = require("../controllers/SeguridadCtrl");

router.get("/:cod", Parametro);
router.get("/parametros/:cod", Parametros);
router.put("/upparametro/:cod", UpateParametro);
router.get("/", fecha_sistem);

module.exports = router;
