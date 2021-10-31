// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obternerRegistro = async (req, res, next) => {
  const query = "CALL SHOW_REGISTRO;";

  try {
    const registro = await mysqlConnection.query(query);
    return res.json(registro["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obternerRegistroPorCod = async (req, res, next) => {
  const { cod } = req.params;
  const query = "CALL SHOW_REGISTRO_COD(?)";

  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.agregarRegistro = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const {
    cod_empleado,
    cod_cliente,
    cod_recurso,
    fec_asignado,
    turno_asignado,
    usr_registro,
  } = req.body;

  const query = `CALL INSERT_REGISTRO(?, ?, ?, ?, ?, ?);`;

  try {
    const result = await mysqlConnection.query(query, [
      cod_empleado,
      cod_cliente,
      cod_recurso,
      fec_asignado,
      turno_asignado,
      usr_registro,
    ]);
    return res.json({ Status: "Registro Agregado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarRegistro = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { fec_asignado, turno_asignado, usr_registro } = req.body;

  const { cod } = req.params;

  const query = "CALL UPDATE_REGISTRO(?, ?, ?, ?);";

  try {
    const result = await mysqlConnection.query(query, [
      cod,
      fec_asignado,
      turno_asignado,
      usr_registro,
    ]);
    return res.json({ Status: "Registro Actualizado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarRegistro = async (req, res, next) => {
  const { usr_registro } = req.body;
  const { cod } = req.params;
  const query = "CALL DELETE_REGISTRO(?, ?);";

  try {
    const result = await mysqlConnection.query(query, [cod, usr_registro]);
    return res.json({ Status: "Registro Eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
