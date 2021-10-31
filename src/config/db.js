require("dotenv").config();
const mysql = require("mysql");
const { promisify } = require("util");

const mysqlConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

mysqlConnection.getConnection((error, connection) => {
  if (error) {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (error.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has to many connections");
    }
    if (error.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
    if (error.code === "ER_NOT_SUPPORTED_AUTH_MODE") {
      console.error(error.sqlMessage);
    }
  }

  if (connection) connection.release();
  console.log("DB is connected  😎");
  return;
});

// callback  a promesas
mysqlConnection.query = promisify(mysqlConnection.query);

module.exports = mysqlConnection;
