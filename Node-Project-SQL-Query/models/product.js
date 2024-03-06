/* const sqlDb = require("../util/sql-database");

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    (this.id = id), (this.title = title);
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    return sqlDb.execute(
      // we are using ? to avoid sql injection
      "INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  delete() {
  }

  static fetchAll() {
    return sqlDb.execute("SELECT * FROM products");
  }

  static fetchById(id) {
    return sqlDb.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
}; */

const Sequelize = require('sequelize');

const sequelize = require('../util/sql-database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Product;