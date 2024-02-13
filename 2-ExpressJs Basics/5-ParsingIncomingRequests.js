const http = require("http");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

const bodyParser = require('body-parser');

// this will automatically do request body parsing 
app.use(bodyParser.urlencoded({extended: false})); //  The extended option determines whether to use the querystring library

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>submit</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(res.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // '/' is a default path if we write '/add-product'to url and path
  // doesn't exist it will be redirected toward this path
  res.send("<h1>Hello from Express JS</h1>");
});

app.listen(3000); //app.listen create server and listen to port 3000
