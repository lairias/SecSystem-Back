// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obtenerEmpleado = async (req, res, next) => {
  const query = "CALL SHOW_EMPLEADOS;";

  try {
    const empleados = await mysqlConnection.query(query);
    return res.json(empleados["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerEmpleadoPorCod = async (req, res, next) => {
  const { cod } = req.params;
  const query = "CALL SHOW_EMPLEADOS_COD(?)";

  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.agregarEmpleado = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    cod_persona,
    estado_empleado,
    tipo_empleado,
    hrstrab_emp,
    des_contrato,
    fec_ini_contrato,
    fec_fin_contrato,
    usr_registro,
  } = req.body;

  const query = `CALL INSERT_EMPLEADO(?, ?, ?, ?, ?, ?, ?, ?);`;

  try {
    const result = await mysqlConnection.query(query, [
      cod_persona,
      estado_empleado,
      tipo_empleado,
      hrstrab_emp,
      des_contrato,
      fec_ini_contrato,
      fec_fin_contrato,
      usr_registro,
    ]);
    return res.json({ Status: "Empleado Agregado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarEmpleado = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    estado_empleado,
    tipo_empleado,
    hrstrab_emp,
    des_contrato,
    fec_ini_contrato,
    fec_fin_contrato,
    usr_registro,
  } = req.body;

  const { cod } = req.params;

  const query = "CALL UPDATE_EMPLEADO(?, ?, ?, ?, ?, ?, ?, ?);";

  try {
    const result = await mysqlConnection.query(query, [
      cod,
      estado_empleado,
      tipo_empleado,
      hrstrab_emp,
      des_contrato,
      fec_ini_contrato,
      fec_fin_contrato,
      usr_registro,
    ]);
    return res.json({ Status: "Empleado Actualizado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarEmpleado = async (req, res, next) => {
  const { usr_registro } = req.body;
  const { cod } = req.params;
  const query = "CALL DELETE_EMPLEADO(?, ?);";

  try {
    const result = await mysqlConnection.query(query, [cod, usr_registro]);
    return res.json({ Status: "EmplEado Eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
