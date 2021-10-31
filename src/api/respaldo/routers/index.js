const { Router } = require("express");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Importer = require("mysql-import");
const { validationResult } = require("express-validator");

//********************** Configuracion del DUMP */
let Fichero;
const fecha = new Date();
//***********Confuguracoion del multer */
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/UPLOAD");
  },
  filename: (req, file, cb) => {
    const SQL =
      file.fieldname +
      "-" +
      fecha.getFullYear() +
      "-" +
      fecha.getMonth() +
      "-" +
      fecha.getDate() +
      "-" +
      fecha.getHours() +
      "-" +
      fecha.getMinutes();

    cb(null, SQL + path.extname(file.originalname));
    Fichero = SQL;
    console.log(Fichero);
  },
});
const upload = multer({ storage });
//Fin de configuracion del multer
//********************** FIN Configuracion del DUMP */

//********************confuguracion del  Import
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const importer = new Importer({ host, user, password, database });

//********************FIN confuguracion del  Import

//controllers
const Respaldo = require("../controllers/RespaldoCtrl");

router.get("/", Respaldo.CrearRespaldo);

//Metodo de importacion a la base
router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {

    console.log("********************************************")
    await importer.onProgress((progress) => {
      var percent =
        Math.floor((progress.bytes_processed / progress.total_bytes) * 10000) /
        100;
      console.log(`${percent}% Completed`);
    });
    console.log(Fichero);
    await importer
      .import(`./src/UPLOAD/${Fichero}.sql`)
      .then(() => {
        console.log("funciona");
        var files_imported = importer.getImported();
        console.log(`${files_imported.length} SQL file(s) imported.`);
      })
      .catch((err) => {
        console.error(err);
      });
    return res.redirect("http://localhost:8000/admin/respaldos");
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;

