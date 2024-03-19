const path = require("path");

const express = require("express"); // exports a top level function

const app = express(); // creates incomingf request handler

app.set("view engine", "ejs"); // setting express global configuration value

app.set("views", "views"); // template location

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const mongoose = require("mongoose");

const errorController = require("./controllers/error");

const User = require("./models/user");

// this will automatically do request body parsing
app.use(bodyParser.urlencoded({ extended: false })); //  The extended option determines whether to use the querystring library
app.use(express.static(path.join(__dirname, "public"))); //to provide access to static files

// this will only execute when server start after sequelize sync
app.use((req, res, next) => {
  User.findById("65fa05d0b02d9d6a5c381866")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes); // adding filter segment now path will be like /admin/add-product

app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://himtiaz194:H12345678@cluster0.asgtm0w.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Hassan",
          email: "hassan@test.com",
          cart: { item: [] },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => console.log(err));
