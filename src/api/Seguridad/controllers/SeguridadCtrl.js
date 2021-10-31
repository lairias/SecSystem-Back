// Importing the packages required for the project.
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.Parametro = async (req, res, next) => {
  const { cod } = req.params;
  const query = " SELECT * FROM tbl_seguridad WHERE id = ?;";
  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.UpateParametro = async (req, res, next) => {
  const { cod } = req.params;
  console.log(cod)
  const { dato, nombre } = req.body;
  const query = " CALL UPDATE_PARAMETRO(?,?,?)";
  try {
    const result = await mysqlConnection.query(query, [cod, dato, nombre]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.Parametros = async (req, res, next) => {
  const query = "CALL SHOW_PARAMETROS";
  try {
    const result = await mysqlConnection.query(query);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.fecha_sistem = async (req, res, next) => {
  const query = " SELECT  DAYOFYEAR(now()) AS fecha_sis;";
  try {
    const result = await mysqlConnection.query(query);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};
