const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Items = mongoose.model("Items");
const Orders = mongoose.model("Orders");

module.exports = app => {
    // Api get Items from MongoDB.
  app.get("/api/getItems", (req, res) => {
    Items.findOne().exec(function(err, items) {
      if (err) return handleError(err);
      res.send(items)
    });
  });

  // Api get orders from active client. This is used for ORDERS from ACCOUNT.
  app.get("/api/getOrders", (req, res) => {
    Orders.findOne({"customerID": "Put the id of the customer here."}).exec(function(err, orders) {
      if (err) return handleError(err);
      res.send(orders)
    });
  });
};
