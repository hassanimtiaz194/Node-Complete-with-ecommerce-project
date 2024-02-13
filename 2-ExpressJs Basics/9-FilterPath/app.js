const http = require("http");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

const bodyParser = require("body-parser");

const adminRoutes =require("./routes/admin");

const shopRoutes =require("./routes/shop");

// this will automatically do request body parsing
app.use(bodyParser.urlencoded({ extended: false })); //  The extended option determines whether to use the querystring library

app.use('/admin', adminRoutes); // adding filter segment now path will be like /admin/add-product

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000); //app.listen create server and listen to port 3000
