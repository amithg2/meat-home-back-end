const express = require("express");
const router = express.Router();
const login = require("../controllers/login").login;

router.post("/", login);

module.exports = router;
