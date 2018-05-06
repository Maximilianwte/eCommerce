const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
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
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
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
      User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ facebookId: profile.Id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
 */