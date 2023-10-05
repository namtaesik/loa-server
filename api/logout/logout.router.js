var express = require("express");
var router = express.Router();
var user = require("./logout.controller");

router.post("/", user.logoutUser);

module.exports = router;
