const path = require("path");

const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/", productsController.getProducts);

module.exports = router;
