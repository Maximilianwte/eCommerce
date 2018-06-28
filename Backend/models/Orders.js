const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  _orderId: String,
  _customerId: String,
  _itemId: [String],
  value_item: [String],
  amount: [String],
  value_order: String,
  date: Date,
  orderProcessed: Date,
  pending: Boolean
});

mongoose.model("Orders", ordersSchema);
