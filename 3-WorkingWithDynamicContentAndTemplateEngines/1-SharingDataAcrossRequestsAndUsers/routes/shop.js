const path = require('path');

const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

const adminData = require('./admin');

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/", (req, res, next) => {
  console.log(adminData.products); // right now data is being shared to all users
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports= router;