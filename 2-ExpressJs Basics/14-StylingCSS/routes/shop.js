const path = require('path');

const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports= router;