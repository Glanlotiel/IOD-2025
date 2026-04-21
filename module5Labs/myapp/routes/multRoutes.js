const express = require("express");
const router = express.Router();
const { multNumbers } = require("../controllers/multController");

router.post("/", multNumbers)

module.exports = router;
