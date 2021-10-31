const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const PlanillaCtrl = require("../controllers/PlanillaCtrl");

router.get("/", PlanillaCtrl.obtenerPlanilla);
router.get("/:cod", PlanillaCtrl.obtenerPlanillaPorCod);
router.post("/", PlanillaCtrl.agregarPlanilla);
router.put("/:cod",  PlanillaCtrl.actualizarPlanilla);
router.delete("/:cod", PlanillaCtrl.eliminarPlanilla);

module.exports = router;
