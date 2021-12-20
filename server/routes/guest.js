const express = require("express");
const router = express.Router();
const guest = require("../controllers/guest");

router.post("/counter", guest.countEnter);
router.get("/images", guest.getFbImages);

module.exports = router;
