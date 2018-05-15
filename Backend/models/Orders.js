const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  _customerId: String,
  _itemId: [String],
  value: String,
  date: Date,
  orderProcessed: Date,
});

mongoose.model("Orders", ordersSchema);
