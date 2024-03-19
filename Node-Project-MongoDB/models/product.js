const { ObjectId } = require("mongodb");

const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new ObjectId(id) : null;
    this.userId= userId;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db
        .collection("Products")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("Products").insertOne(this);
    }
    return dbOp
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("Products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchById(prodId) {
    const db = getDb();
    return db
      .collection("Products")
      .find({ _id: new ObjectId(prodId) })
      .next()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => { 
        console.log(err);
      });
  }

  static deleteById(prodId) {
    const db = getDb();
    console.log(prodId);
    return db
      .collection("Products")
      .deleteOne({ _id: new ObjectId(prodId) })
      .then((result) => console.log("Product Deleted!"))
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
