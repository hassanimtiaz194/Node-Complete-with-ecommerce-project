const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://himtiaz194:H12345678@cluster0.asgtm0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db()
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database Found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
