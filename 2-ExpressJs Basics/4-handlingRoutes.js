const http = require("http");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

// middleware run using top to bottom approach
app.use("/", (req, res, next) => {
  console.log("This alwasys work");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("Hassan");
  res.send("<h1>Add Product Page</h1>");
});

app.use("/", (req, res, next) => {
// '/' is a default path if we write '/add-product'to url and path 
// doesn't exist it will be redirected toward this path
  console.log("Hassan");
  res.send("<h1>Hello from Express JS</h1>");
});

app.listen(3000); //app.listen create server and listen to port 3000
