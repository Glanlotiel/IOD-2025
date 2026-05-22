const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/:name", (req, res) => {
  controllers.pokeController.getPokemon(req.params.name, res);
});

module.exports = router;
