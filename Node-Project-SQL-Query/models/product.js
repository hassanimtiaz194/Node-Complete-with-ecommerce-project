const sqlDb = require("../util/sql-database");

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
};