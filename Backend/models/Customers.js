const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  _id: String,
  googleId: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  street: String,
  zip: String,
  city: String,
  country: String,
  openOrder: String
});

mongoose.model("Customers", customerSchema);
