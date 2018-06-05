const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Item = mongoose.model("Items");
const Order = mongoose.model("Orders");

module.exports = app => {
  // Process the order that the user sends. Req.user is the user string that is send with the request from the client side.
  app.post("/api/confirmInfo", (req, res) => {
    console.log("Backend Got ConfirmInfo Req");
    console.log(req.body);
    if (!req.user) {
    } else {
      Customer.findOne({ _id: req.body.id }).then(existingCustomer => {
        if (existingCustomer) {
          console.log("Backend: ConfirmInfo: Found Entry with Req Id");
          existingCustomer
            .update({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              street: req.body.street,
              zip: req.body.zip,
              city: req.body.city,
              country: req.body.country
            })
            .save()
            .then(res.send("Success!"));
        } else {
        }
      });
    }
  });
};

Customer.findOne({_id: '5b168ec71bcca10a1e1a1c13'}).then(i => {console.log(i)})
/* Customer.findOne({email: "test@test.de"}).then(i => {console.log(i)}) */