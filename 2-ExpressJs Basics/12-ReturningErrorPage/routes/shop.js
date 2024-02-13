const path = require('path');

const express = require("express");

const router = express.Router();

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports= router;