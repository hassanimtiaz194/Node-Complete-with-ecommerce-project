const http = require("http");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

const bodyParser = require("body-parser");

const adminRoutes =require("./routes/admin");

const shopRoutes =require("./routes/shop");

// this will automatically do request body parsing
app.use(bodyParser.urlencoded({ extended: false })); //  The extended option determines whether to use the querystring library

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000); //app.listen create server and listen to port 3000
