const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

const products = [];

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/add-product", (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product'})
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
