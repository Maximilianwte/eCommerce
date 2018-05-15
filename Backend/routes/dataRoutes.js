const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Items = mongoose.model("Items");
const Orders = mongoose.model("Orders");

module.exports = app => {
  // Api get Items from MongoDB.
  app.get("/api/getItems", (req, res) => {
    Items.findOne().exec(function(err, items) {
      if (err) return handleError(err);
      res.send(items);
    });
  });

  // Api get orders from active client. This is used for ORDERS from ACCOUNT.
  app.get("/api/getOrders", (req, res) => {
    Orders.findOne({ customerID: "Put the id of the customer here." }).exec(
      function(err, orders) {
        if (err) return handleError(err);
        res.send(orders);
      }
    );
  });

  // Process the order that the user sends. Req.user is the user string that is send with the request from the client side.
  app.post("/api/processOrder", (req, res) => {
    if (!req.user) {
    } else {
      const { customerID, itemId } = req.body;

      /*   // While there are items in the order add all prices up.
      const orderValueVar
      const orderValue = while (itemId) {
       orderValueVar = orderValueVar + item.price
      } */
      const order = new Order({
        _customerId: req.user.id,
        // Maybe wrong and we just have to use _itemId,
        _itemId: Items.split(",").map(id => ({ id: id.trim() })),
       // value: orderValue,
        date: Date.now()
      });
    }
  });
};
