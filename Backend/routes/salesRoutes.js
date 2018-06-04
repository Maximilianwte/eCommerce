const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Item = mongoose.model("Items");
const Order = mongoose.model("Orders");

module.exports = app => {
  // Process the order that the user sends. Req.user is the user string that is send with the request from the client side.
  app.post("/api/confirmInfo", (req, res) => {
    if (!req.user) {
    } else {
      const { _customerId, _itemId } = req.body;

      /*   // While there are items in the order add all prices up.
      const orderValueVar
      const orderValue = while (itemId) {
       orderValueVar = orderValueVar + item.price
      } */
      const Customer = new Customer({
        _customerId: req.user.id,
        // Maybe wrong and we just have to use _itemId,
        _itemId: Items.split(",").map(id => ({ id: id.trim() })),
        // value: orderValue,
        date: Date.now()
      });
    }
  });

};
