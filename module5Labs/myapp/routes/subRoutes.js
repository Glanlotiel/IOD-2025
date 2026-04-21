const express = require("express");
const router = express.Router();
const { subNumbers } = require("../controllers/subController");

router.post("/", subNumbers)

module.exports = router;
