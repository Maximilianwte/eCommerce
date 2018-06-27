const passport = require("passport");

const mongoose = require("mongoose");
const Customer = mongoose.model("Customers");

module.exports = app => {
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  // Signin via email
  app.post("/auth/try_login", (req, res) => {
    console.log("Backend Console: Try Reached");
    Customer.findOne({
      email: req.body.email,
      password: req.body.password
    }).then(existingCustomer => {
      if (existingCustomer) {
        console.log("Backend Console:" + existingCustomer);
        res.send(existingCustomer._id);
      }
    });
  });

  // Route Handler for Google oAuth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // RouteHandler for Google oAuth Callback
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  // Route Handler for Facebook oAuth
  app.get("/auth/facebook", passport.authenticate("facebook"));

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );
};
