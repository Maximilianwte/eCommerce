const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema ({
    id: String,
    name: String,
    Address: String,
    ZipCode: String,
    City: String,
    googleId: String,
    facebookId: String
})

mongoose.model("users", userSchema);