// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obtener_User = async (req, res) => {
  const query = "CALL SHOW_USERS";
  try {
    const usuarios = await mysqlConnection.query(query);
    return res.json(usuarios["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerUserPorCod = async (req, res, next) => {
  const { cod } = req.params;
  const query = " CALL SHOW_USERS_COD(?)";
  console.log(cod);
  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.agregar_User = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, password, rol_id, usr_registro } = req.body;

  const query = `CALL INSERT_USER(?, ?, ?, ?);`;

  try {
    await mysqlConnection.query(query, [name, email, password, rol_id]);
    return res.json({ Status: "Empleado Agregado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizar_User = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { Estado } = req.body;
  const { cod } = req.params;
  const query = "CALL UPDATE_USER(?, ?);";
  console.log(req.body);
  try {
    await mysqlConnection.query(query, [cod, Estado]);
    return res.json({ Status: "Usuario Actualizado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminar_User = async (req, res, next) => {
  const { usr_registro } = req.body;
  const { cod } = req.params;
  const query = "CALL DELETE_USER(?);";
  console.log(`CALL DELETE_USER('${cod}')`);
  try {
    await mysqlConnection.query(query, [cod]);
    return res.json({ Status: "Usuario Eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizar_Use_Pass = async (req, res, next) => {
  const { cod } = req.params;
  const { pass, fecha } = req.body;
  const query = " CALL UPDATE_USER_PASS(?,?,?)";
  console.log(req.body);
  try {
    const result = await mysqlConnection.query(query, [cod, pass, fecha]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.Fecha_pass_user = async (req, res, next) => {
  const { cod } = req.params;
  const query =
    " SELECT DAYOFYEAR(users.Time_pass) as fecha_pass FROM users WHERE id =  ?;";
  console.log(cod);
  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};
