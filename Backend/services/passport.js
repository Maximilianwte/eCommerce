const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

// Hier importieren wir unsere Datenbank/ Collection.
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Hier suchen wir in unserer Collection nach einem User mit dieser Id und wiederherstellen das was serializeUser gemacht hat.
  User.findById(id)
  .then(user => {
    done(null, user);
  })
});

passport.use(
  // Wir legen neue Passport Funktion mit der ausgewählten oAuth Google Strategy an. Die wählen wir hier
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback"
    },
    // Das bedeutet dass wenn wir ein AccessToken erhalten, das einfach über console.log ausgegeben werden soll.
    // Das .then ist ein Promise. Den benutzen wir für async Code wie hier gerade. Darin wird eine Arrow Function eingeschlossen.
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          // Das bedeuetet wir haben einen existierenden User.
          // Done zeigt Passport das wird fertig sind. Null steht für hier kein Error, ExistingUser wollen wir aus passport mitnehmen.
          done(null, existingUser);
        } else {
          new User({
            googleID: profile.id
          }).save()
          // Hier packen wir unser then direkt an das .save() um sicherzustellen das wir nicht done sind bevor alles gespeichert ist.
          .then(user => done(null, user));
        }
      });
    }
  )
);
