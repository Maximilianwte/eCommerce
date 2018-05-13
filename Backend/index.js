const passport = require("passport");
const express = require('express')
const mongoose = require("mongoose");

const keys = require("./config/keys");
require("./models/Customers");
require("./services/passport");

const app = express()

mongoose.connect(keys.mongoURI);

const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    // Wie lange der Cookie aktiv ist. Müssen wir in Millisekunden angeben. Das sind 30 Tage.
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // Hier ist der Cookie der den Nutzer indetifiziert.
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session()); 

require("./routes/authRoutes")(app);

// Get the Port from Heroku or if not declared use 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Server Online.");
