const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookies-session");
const passport = require("passport");
const keys = require("./config/keys");
// Das lädt eine Datei in unserer File. Dadurch wird auch jede Funktion ausgeführt.
require("./models/User");
require("./services/passport");

// Hier verbinden wir unsere MongooseSchnittstelle mit unserer Datenbank.
mongoose.connect(keys.mongoURI);

const app = express();

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
