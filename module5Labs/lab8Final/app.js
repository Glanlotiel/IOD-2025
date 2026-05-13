const express = require("express");
const path = require("path");
const cors = require("cors");
const productsRoutes = require("./routes/productsRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Serve static frontend files from /public
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/products", productsRoutes);

module.exports = app;
