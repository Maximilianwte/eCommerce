const keys = require("../config/keys");
const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Item = mongoose.model("Items");
const Order = mongoose.model("Orders");

var stripe = require("stripe")(keys.stripeSecret);

// Get the customers email from the user id in cookie in start payment process.
module.exports = app => {
  app.post("/api/processPayment", (req, res) => {
    if (!req.user) {
    } else {
      Customer.findOne({ _id: req.body.id }).then(existingCustomer => {
        if (existingCustomer) {
          stripe.customers
            .create({
              email: existingCustomer.email
            })
            .then(function(customer) {
              return stripe.customers.createSource(customer.id, {
                source: "tok_visa"
              });
            })
            .then(function(source) {
              return stripe.charges.create({
                amount: req.body.amount,
                currency: "eur",
                customer: source.customer
              });
            })
            .then(function(charge) {
              // New charge created on a new customer
            })
            .catch(function(err) {
              // Deal with an error
            });
        }
      });
    }
  });
};
