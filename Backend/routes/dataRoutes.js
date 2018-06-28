const mongoose = require("mongoose");

const Customer = mongoose.model("Customers");
const Order = mongoose.model("Orders");

/* new Order({
 _customerId: "001",
 _itemId: [001],
 value: "19.99€",
 date: Date.now()
}).save() */

module.exports = app => {
  // Get all selling items from Database
  app.get("/api/getItems", (req, res) => {
    Items.findOne().exec(function(err, items) {
      if (err) return handleError(err);
      res.send(items);
    });
  });

  // Get all orders the user account has ever made.
  app.post("/api/getOrders", (req, res) => {
    const client_id = req.body.customerId;

    Order.find({ _customerId: client_id }).then(orders => {
      if (!err) {
        if (orders) {
          res.send(orders);
        } else {
          console.log("Database 404: No Orders Found.");
        }
      } else {
        throw err;
      }
    });
  });

  // Get all orders the user account has ever made.
  app.post("/api/getCustomerInfo", (req, res) => {
    const client_id = req.body.customerId;

    Customer.findOne({ _customerId: client_id }).then(customer => {
      if (!err) {
        if (customer) {
          res.send(customer);
        } else {
          console.log("Database 404: No Orders Found.");
        }
      } else {
        throw err;
      }
    });
  });

  // HERE WE HANDLER A AXIOS POST REQUEST FOR TESTING PURPOSES.
  app.post("/api/test_post", function(req, res) {
    const body = req.body.test_data;
    console.log(req.body);
    res.set("Content-Type", "text/plain");
    res.send(`You sent: ${body} to Express`);
  });
};

