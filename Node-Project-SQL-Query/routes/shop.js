const path = require("path");

const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

//path module is required for path because node don't know the path
// ../ tells you to go one level up
// views folder
router.get("/", shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct); //path param 

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
