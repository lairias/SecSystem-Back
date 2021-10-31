// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obtenerPlanilla = async (req, res, next) => {
  const query = "CALL SHOW_PLANILLAS;";

  try {
    const planillas = await mysqlConnection.query(query);
    return res.json(planillas["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerPlanillaPorCod = async (req, res, next) => {
  const { cod } = req.params;
  const query = "CALL SHOW_PLANILLAS_COD(?)";

  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.agregarPlanilla = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    cod_empleado,
    mon_pago,
    pago_hrsextra,
    ihss,
    rap,
    vales,
    fec_pago_planilla,
    usr_registro,
  } = req.body;

  console.log(req.body);

  const query = `CALL INSERT_PLANILLA(?, ?, ?, ?, ?, ?, ?, ?);`;

  try {
    const result = await mysqlConnection.query(query, [
      cod_empleado,
      mon_pago,
      pago_hrsextra,
      ihss,
      rap,
      vales,
      fec_pago_planilla,
      usr_registro,
    ]);
    return res.json({ Status: "Planilla del empleado Agregada" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarPlanilla = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    mon_pago,
    pago_hrsextra,
    ihss,
    rap,
    vales,
    fec_pago_planilla,
    usr_registro,
  } = req.body;

  const { cod } = req.params;

  const query = "CALL UPDATE_PLANILLA(?, ?, ?, ?, ?, ?, ?, ?);";

  try {
    const result = await mysqlConnection.query(query, [
      cod,
      mon_pago,
      pago_hrsextra,
      ihss,
      rap,
      vales,
      fec_pago_planilla,
      usr_registro,
    ]);
    return res.json({ Status: "Planilla del empleado Actualizada" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarPlanilla = async (req, res, next) => {
  const { usr_registro } = req.body;
  const { cod } = req.params;
  const query = "CALL DELETE_PLANILLA(? ,?);";

  try {
    const result = await mysqlConnection.query(query, [cod, usr_registro]);
    return res.json({ Status: "Planilla del empleado Eliminada" });
  } catch (error) {
    console.log(error);
    next();
  }
};
