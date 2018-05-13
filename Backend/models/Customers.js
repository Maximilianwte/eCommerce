const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  googleId: String,
  name: String
});

mongoose.model("Customers", customerSchema);
