const path = require("path");

const http = require("http");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

app.set('view engine', 'pug'); // setting express global configuration value

app.set('views', 'views'); // template location

const bodyParser = require("body-parser");

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

// this will automatically do request body parsing
app.use(bodyParser.urlencoded({ extended: false })); //  The extended option determines whether to use the querystring library
app.use(express.static(path.join(__dirname, "public"))); //to provide access to static files
app.use("/admin", adminData.routes); // adding filter segment now path will be like /admin/add-product

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" }); // we are already in root folder so no need of ../
});

app.listen(3000); //app.listen create server and listen to port 3000
