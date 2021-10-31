const { Router } = require("express");
const express = require("express");
const router = express.Router();

//controllers
const { RolUser } = require("../controllers/RolesCtrl");

router.get("/:cod", RolUser);

module.exports = router;
