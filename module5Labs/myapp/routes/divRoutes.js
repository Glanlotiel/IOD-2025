const express = require("express");
const router = express.Router();
const { divNumbers } = require("../controllers/divController");

router.post("/", divNumbers)

module.exports = router;
