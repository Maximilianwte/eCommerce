const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Item = mongoose.model("Items");
const Order = mongoose.model("Orders");

module.exports = app => {
  // Process the order that the user sends. Req.user is the user string that is send with the request from the client side.
  app.post("/api/confirmInfo", (req, res) => {
    console.log(req.body);
    if (!req.user) {
    } else {
      Customer.findOne({ _id: req.body.id }).then(existingCustomer => {
        if (existingCustomer) {
          existingCustomer.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            street: req.body.street,
            zip: req.body.zip,
            city: req.body.city,
            country: "Germany"
          }).save()
          .then(res.send("Success!"));
        
        } else {
        }
      });
    }
  });
};
