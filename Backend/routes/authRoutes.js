const passport = require("passport");

const mongoose = require("mongoose");
const Customer = mongoose.model("Customers");

module.exports = app => {
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

/*   // Signin via email
  app.post("/auth/signIn", (req, res) => {
    Customer.findOne({"Email": req.body.email, "Password": req.body.Password}).exec(function(err, customer) {
      if (err) return handleError(err);
      res.send(customer._customerId);
    });
  });   */

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

  // Facebook oAuth
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

Customer.findOne({"Email": "maximilianwitte@live.de" , "Password": "007007"}).exec(function(err, customer) {
  if (err) return handleError(err);
  console.log(customer._id);
});