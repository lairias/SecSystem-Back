// Importing the packages required for the project.
const { validationResult } = require("express-validator");
const mysqlConnection = require("../../../config/db");

//const express = require('express-validator');

// CRUD Methods
//Get all Employees

exports.obtenerPersonasCli = async (req, res, next) => {
  const query = "CALL SHOW_PERSONAS_CLI;";

  try {
    const personascliente = await mysqlConnection.query(query);
    return res.json(personascliente["0"]);
  } catch (error) {
    console.log(error);
    next();
  }
};
