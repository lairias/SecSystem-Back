"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var PlanillaCtrl = require("../controllers/PlanillaCtrl");

var _require2 = require("express-validator"),
    check = _require2.check;

router.get("/", PlanillaCtrl.obtenerPlanilla);
router.get("/:cod", PlanillaCtrl.obtenerPlanillaPorCod);
router.post("/", [check("mon_pago", "El monto pago solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("pago_hrsextra", "El pago horas extra solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("ihss", "El monto de ihss solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("rap", "El monto de rap solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("vales", "El monto de vales solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("ihss", "El monto de ihss solo puede tener numeros sin espacios").matches(/^\d{1,10}$/)], PlanillaCtrl.agregarPlanilla);
router.put("/:cod", [check("mon_pago", "El monto pago solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("pago_hrsextra", "El pago horas extra solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("ihss", "El monto de ihss solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("rap", "El monto de rap solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("vales", "El monto de vales solo puede tener numeros sin espacios").matches(/^\d{1,10}$/), check("ihss", "El monto de ihss solo puede tener numeros sin espacios").matches(/^\d{1,10}$/)], PlanillaCtrl.actualizarPlanilla);
router["delete"]("/:cod", PlanillaCtrl.eliminarPlanilla);
module.exports = router;