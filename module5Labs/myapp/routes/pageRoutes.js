const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getAboutPage,
  getCalculatorPage,
} = require("../controllers/pageController");

router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/calculator", getCalculatorPage);

module.exports = router;
