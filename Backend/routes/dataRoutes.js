const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Item = mongoose.model("Items");
const Order = mongoose.model("Orders");

/* new Order({
 _customerId: "001",
 _itemId: [001],
 value: "19.99€",
 date: Date.now()
}).save() */

/* // Working Query without the get handling.
Order.findOne({ _customerId: "1"}).then(orders => console.log(orders)); */

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
    Order.find({ _customerId: "001" }).exec(function(err, orders) {
      if (err) return handleError(err);
      res.send(orders);
    });
  });

  // Process the order that the user sends. Req.user is the user string that is send with the request from the client side.
  app.post("/api/processOrder", (req, res) => {
    if (!req.user) {
    } else {
      const { _customerId, _itemId } = req.body;

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

  // HERE WE HANDLER A AXIOS POST REQUEST FOR TESTING PURPOSES.
  app.post("/api/test_post", function(req, res) {
    const body = req.body.test_data;
    console.log(req.body);
    res.set("Content-Type", "text/plain");
    res.send(`You sent: ${body} to Express`);
  });
};
