const path = require("path");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

app.set("view engine", "ejs"); // setting express global configuration value

app.set("views", "views"); // template location

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error");

const mongoConnect = require("./util/database").mongoConnect;

const User = require("./models/user");

// this will automatically do request body parsing
app.use(bodyParser.urlencoded({ extended: false })); //  The extended option determines whether to use the querystring library
app.use(express.static(path.join(__dirname, "public"))); //to provide access to static files

// this will only execute when server start after sequelize sync
app.use((req, res, next) => {
  User.findById('65f8bb9a897ea4414c782a5a')
    .then((user) => {
      req.user = new User (user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes); // adding filter segment now path will be like /admin/add-product

app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
