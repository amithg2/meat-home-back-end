const express = require("express");
const router = express.Router();
const guest = require("../controllers/guest");
const axios = require("axios");

router.post("/counter", guest.countEnter);
router.get("/images", guest.getFbImages);

module.exports = router;
