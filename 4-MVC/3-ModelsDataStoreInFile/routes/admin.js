const path = require("path");

const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

const products = [];

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
