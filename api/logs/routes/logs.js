const express = require("express");
const router = express.Router();
const { readAll, readOne } = require("../controllers/logs");

// GET ALL
router.route("/").get(readAll);
// GET ONE
router.route("/:id").get(readOne);

module.exports = router;
