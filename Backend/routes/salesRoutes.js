const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Order = mongoose.model("Orders");

function addValues(total, num) {
  return total + num;
}

// Function that creates a random Id for customer and order Id's.
function makeId() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

module.exports = app => {
  // Process the order that the user sends. Req.user is the user string that is send with the request from the client side.
  app.post("/api/updateCustomer", (req, res) => {
    const client_id = req.body.customerId;
    Customer.findOne({ _id: client_id }).then(existingCustomer => {
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
          .save();
        console.log("Database 200: Customer Succesfully Updated.");
      }
    });
  });

  // Process the order that the user sends. Req.user is the user string that is send with the request from the client side.
  app.post("/api/processOrder", (req, res) => {
    console.log("Server 200: ProcessOrder without Errors.");
    const order_id = makeId();
    const client_id = req.body.id;
    const itemId = req.body.itemId;
    const value_item = req.body.value_item;
    const amount = req.body.amount;
    const value_order = value_item.reduce(addValues);

    new Order({
      _orderId: order_id,
      _customerId: client_id,
      _itemId: itemId,
      value_item: value_item,
      amount: amount,
      value_order: value_order,
      date: Date.now(),
      pending: true
    }).save();
  });
};
// Weirdly the query fails when I write test@test.de but when I copy the same test@test.de from mlab it works.
// I still dont know how to query the _id
// Customer.findOne({_id: '5b168ec71bcca10a1e1a1c13'}).then(i => {console.log(i)})
/* Customer.findOne({email: "test@test.de"}).then(i => {console.log(i)}) */
