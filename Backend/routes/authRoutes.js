const passport = require("passport");

module.exports = (app) => {
  // Route Handler for Google oAuth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // RouteHandler for Google oAuth Callback
  app.get("/auth/google/callback", passport.authenticate("google"));
};
