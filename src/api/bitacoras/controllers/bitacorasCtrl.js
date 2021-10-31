// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obtenerBitacora = async (req, res, next) => {
  const query = "CALL SHOW_BITACORAS;";

  try {
    const bitacoras = await mysqlConnection.query(query);
    return res.json(bitacoras["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};
