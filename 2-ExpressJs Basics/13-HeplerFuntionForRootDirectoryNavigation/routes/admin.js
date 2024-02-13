const path = require('path');

const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  console.log(res.body);
  res.redirect("/");
});

module.exports= router;