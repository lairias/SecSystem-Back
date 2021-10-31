"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var router = express.Router(); //controllers

var _require2 = require("../controllers/RolesCtrl"),
    RolUser = _require2.RolUser;

router.get("/:cod", RolUser);
module.exports = router;