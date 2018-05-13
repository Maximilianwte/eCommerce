const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
/* var FacebookStrategy = require("passport-facebook").Strategy; */
const mongoose = require("mongoose");

const keys = require("../config/keys");
const Customer = mongoose.model("Customers");

passport.serializeUser((customer, done) => {
  done(null, customer.id);
});

passport.deserializeUser((id, done) => {
  Customer.findById(id).then(customer => {
    done(null, customer);
  });
  console.log("oAuth Done.");
});

/* oAuth2.0 Google */
passport.use(
  // Wir legen neue Passport Funktion mit der ausgewählten oAuth Google Strategy an. Die wählen wir hier
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    // Das bedeutet dass wenn wir ein AccessToken erhalten, das einfach über console.log ausgegeben werden soll.
    // Das .then ist ein Promise. Den benutzen wir für async Code wie hier gerade. Darin wird eine Arrow Function eingeschlossen.
    (accessToken, refreshToken, profile, done) => {
      // Zum verstehen von Promises: Wenn der Promise fertig ist wird das Ergebnis als existingCustomer(vor der Arrow Function) gespeichert. Damit können wir dann was machen.
      Customer.findOne({ googleId: profile.id }).then(existingCustomer => {
        if (existingCustomer) {
          done(null, existingCustomer);
        } else {
          new Customer({
            googleId: profile.id
          })
            .save()
            .then(customer => done(null, customer));
          // Ab der done Funktion -> failed to serialize customer.
        }
      });
    }
  )
);

/* oAuth2.0 Facebook */

/* passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback"
    },
     (accessToken, refreshToken, profile, done) => {
      // Zum verstehen von Promises: Wenn der Promise fertig ist wird das Ergebnis als existingCustomer(vor der Arrow Function) gespeichert. Damit können wir dann was machen.
      Customer.findOne({ googleId: profile.id }).then(existingCustomer => {
        if (existingCustomer) {
          done(null, existingCustomer);
        } else {
          new Customer({
            googleId: profile.id
          })
            .save()
            .then(customer => done(null, customer));
          // Ab der done Funktion -> failed to serialize customer.
        }
      });
    }
  )
);
 */
