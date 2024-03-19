const path = require("path");

const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

const products = [];

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.get("/delete-product/:productId", adminController.deleteProduct);

router.get('/products',adminController.getProducts); 

module.exports = router;
