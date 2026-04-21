const path = require("path");

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

const getAboutPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
};

const getCalculatorPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/calculator.html"));
};

module.exports = { getHomePage, getAboutPage, getCalculatorPage };
