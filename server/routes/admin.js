const express = require("express");
const router = express.Router();
const admin = require('../controllers/admin')
const jwtAuth =require('../jwtAuth').jwtAuth

router.get("/",jwtAuth, admin.getAdminData);

module.exports = router;
