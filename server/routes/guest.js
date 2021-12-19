const express = require("express");
const router = express.Router();
const guest = require("../controllers/guest");

router.get('/amit', guest.amit);
router.post("/counter", guest.countEnter);
router.get("/images", guest.getFbImages);

module.exports = router;
