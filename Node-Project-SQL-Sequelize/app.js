const path = require("path");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

app.set("view engine", "ejs"); // setting express global configuration value

app.set("views", "views"); // template location

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error");

const sequelize = require("./util/sql-database");

// this will automatically do request body parsing
app.use(bodyParser.urlencoded({ extended: false })); //  The extended option determines whether to use the querystring library
app.use(express.static(path.join(__dirname, "public"))); //to provide access to static files
app.use("/admin", adminRoutes); // adding filter segment now path will be like /admin/add-product

app.use(shopRoutes);

app.use(errorController.get404);

// sync your model with the db doesn't overwrite table if exist
sequelize
  .sync()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

app.listen(3000); //app.listen create server and listen to port 3000
