const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Item = mongoose.model("Items");
const Order = mongoose.model("Orders");

module.exports = app => {
    app.post("/api/braintree", (req,res) => {
        
    });
};