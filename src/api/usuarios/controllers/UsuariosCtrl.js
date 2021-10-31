// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obtenerUsuario = async (req, res, next) => {
  const query = "CALL SHOW_USUARIOS;";

  try {
    const usuarios = await mysqlConnection.query(query);
    return res.json(usuarios["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerUsuarioPorCod = async (req, res, next) => {
  const { cod } = req.params;
  const query = "CALL SHOW_USUARIOS_COD(?)";

  try {
    const result = await mysqlConnection.query(query, [cod]);
    return res.json(result);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.agregarUsuario = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    cod_persona,
    usr,
    password,
    correo,
    indicador_usuario,
    cod_rol,
    usr_registro,
  } = req.body;

  const query = `CALL INSERT_USUARIO(?, ?, ?, ?, ?, ?, ?);`;

  try {
    const result = await mysqlConnection.query(query, [
      cod_persona,
      usr,
      password,
      correo,
      indicador_usuario,
      cod_rol,
      usr_registro,
    ]);
    return res.json({ Status: "Usuario Agregado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarUsuario = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    cod_persona,
    usr,
    password,
    correo,
    indicador_usuario,
    cod_rol,
    usr_registro,
  } = req.body;

  const { cod } = req.params;

  const query = "CALL UPDATE_USUARIO(?, ?, ?, ?, ?, ?, ?);";

  try {
    const result = await mysqlConnection.query(query, [
      cod,
      usr,
      password,
      correo,
      indicador_usuario,
      cod_rol,
      usr_registro,
    ]);
    return res.json({ Status: "Usuario Actualizado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarUsuario = async (req, res, next) => {
  const { usr_registro } = req.body;
  const { cod } = req.params;
  const query = "CALL DELETE_USUARIO(?);";

  try {
    const result = await mysqlConnection.query(query, [cod, usr_registro]);
    return res.json({ Status: "Usuario Eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
