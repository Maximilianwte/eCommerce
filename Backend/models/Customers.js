const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  googleId: String,
  Email: String,
  FirstName: String,
  LastName: String,
  Address: String,
  ZipCode: String,
  City: String,
  Country: String,
  OpenOrder: String
});

mongoose.model("Customers", customerSchema);
