const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  id: String,
  name: String,
  image: String,
  stock: String,
  price: String
});

mongoose.model("Items", itemsSchema);
