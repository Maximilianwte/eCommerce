const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  customerId: String,
  itemId: String,
  value: String,
});

mongoose.model("Orders", ordersSchema);
