const express = require("express");
const router = express.Router();
const addRoute = require("./addRoutes")
const subRoute = require("./subRoutes")
const multRoute = require("./multRoutes")
const divRoute = require("./divRoutes")

const { getStatus, getUsers } = require("../controllers/apiController");

router.get("/", getStatus);
router.get("/users", getUsers);

router.use("/add", addRoute)
router.use("/sub", subRoute)
router.use("/mult", multRoute)
router.use("/div", divRoute)

module.exports = router;
