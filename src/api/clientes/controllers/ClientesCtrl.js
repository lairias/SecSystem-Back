// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obternerCliente = async (req, res, next) => {
  const query = "CALL SHOW_CLIENTES;";

  try {
    const clientes = await mysqlConnection.query(query);
    return res.json(clientes["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obternerClientePorCod = async (req, res, next) => {
  const { cod } = req.params;
  const query = "CALL SHOW_CLIENTES_COD(?)";

  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.agregarCliente = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    cod_persona,
    nom_empresa,
    correo_electronico,
    des_contrato,
    fec_ini_contrato,
    fec_fin_contrato,
    usr_registro,
  } = req.body;

  const query = `CALL INSERT_CLIENTE(?, ?, ?, ?, ?, ?, ?);`;

  try {
    const result = await mysqlConnection.query(query, [
      cod_persona,
      nom_empresa,
      correo_electronico,
      des_contrato,
      fec_ini_contrato,
      fec_fin_contrato,
      usr_registro,
    ]);
    return res.json({ Status: "Cliente Agregado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarCliente = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    nom_empresa,
    correo_electronico,
    des_contrato,
    fec_ini_contrato,
    fec_fin_contrato,
    usr_registro,
  } = req.body;

  const { cod } = req.params;

  const query = "CALL UPDATE_CLIENTE(?, ?, ?, ?, ?, ?, ?);";

  try {
    const result = await mysqlConnection.query(query, [
      cod,
      nom_empresa,
      correo_electronico,
      des_contrato,
      fec_ini_contrato,
      fec_fin_contrato,
      usr_registro,
    ]);
    return res.json({ Status: "Cliente Actualizado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarCliente = async (req, res, next) => {
  const { usr_registro } = req.body;
  const { cod } = req.params;
  const query = "CALL DELETE_CLIENTE(?, ?);";

  try {
    const result = await mysqlConnection.query(query, [cod, usr_registro]);
    return res.json({ Status: "Cliente Eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
