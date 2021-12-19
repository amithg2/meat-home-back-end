const express = require("express");
const router = express.Router();
const reservations = require("../controllers/reservations");
const jwtAuth =require('../jwtAuth').jwtAuth

router.post("/add", reservations.add);

router.post("/edit",jwtAuth, reservations.edit );

router.post("/delete",jwtAuth, reservations.delete );

module.exports = router;
