const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // '/' is a default path if we write '/add-product'to url and path
  // doesn't exist it will be redirected toward this path
  res.send("<h1>Hello from Express JS</h1>");
});

module.exports= router;