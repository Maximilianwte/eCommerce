const keys = require("../config/keys");
const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Item = mongoose.model("Items");
const Order = mongoose.model("Orders");

var stripe = require("stripe")(keys.stripeSecret);

// Get the customers email from the user id in cookie in start payment process.
module.exports = app => {
  app.post("/api/processPayment", (req, res) => {
    const client_id = req.body.customerId;
    const charge = req.body.charge * 100;
    console.log("Payment Reached with: " + client_id);
    Customer.findOne({ _id: client_id }).then(existingCustomer => {
      if (existingCustomer) {
        console.log("Customer Found.");
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
            console.log("Charge Created. Amount Charged: " + charge.toFixed(0));
            return stripe.charges.create({
              amount: charge.toFixed(0),
              currency: "eur",
              customer: source.customer
            });
          })
          .then(function(charge) {
            console.log("Stripe 200: Charge Succesfully Created.");
            // New charge created on a new customer
          })
          .catch(function(err) {
            // Deal with an error
          });
      } else {
        console.log(
          "Database 404: No Customer Entry Found with clientId: " + client_id
        );
      }
    });
  });
};

Customer.findOne({ _id: "0001" }).then(existingCustomer => {
  console.log(existingCustomer.email);
});

/* new Customer({
 _id: "0001",
 email: "test@test.de",
 password: "1234",
 firstName: "Max"
}).save()  */
