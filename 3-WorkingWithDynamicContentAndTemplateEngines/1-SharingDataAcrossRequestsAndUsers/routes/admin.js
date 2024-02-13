const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

const products = [];

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log({title: req.body.title});
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
