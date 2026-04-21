const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const cors = require("cors");
// ---------------------------------- //
// // Data server
const dataApp = express();

dataApp.use(express.json());
dataApp.use(cors());
dataApp.use("/", apiRoutes);

module.exports = dataApp;
