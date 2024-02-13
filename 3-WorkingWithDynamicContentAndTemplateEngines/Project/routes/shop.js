const path = require('path');

const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

const adminData = require('./admin');

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/", (req, res, next) => {
  const product = adminData.products;
  res.render('shop', {prods: product, pageTitle: 'Shop', path:'/'}) // look for pug file
});

module.exports= router;