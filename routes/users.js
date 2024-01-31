var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const users = ["Emile", "Martin", "Fleur", "élégante"];
  res.json({ users });
});
/* GET users listing. */
router.get("/prives", function (req, res, next) {
  const animaux = ["Chacha", "Enesto", "singe", "elephant"];
  res.json({ animaux });
});

module.exports = router;
