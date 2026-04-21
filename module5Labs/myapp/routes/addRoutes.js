const express = require("express");
const router = express.Router();
const { addNumbers } = require("../controllers/addController");

router.post("/", addNumbers)

module.exports = router;
