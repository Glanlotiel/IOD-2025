const express = require("express");
const router = express.Router();
const {
  getAdminPage,
  getServerStatus,
} = require("../controllers/adminController");

router.get("/", getAdminPage);
router.get("/status", getServerStatus);

module.exports = router;
