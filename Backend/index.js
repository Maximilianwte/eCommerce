const passport = require("passport");
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors');

const keys = require("./config/keys");
require("./models/Customers");
require("./models/Items");
require("./models/Orders");
require("./services/passport");

const app = express()

mongoose.connect(keys.mongoURI);

const cookieSession = require("cookie-session");
// Mit app.use sind alle Middlewares verbunden.
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // Hier ist der Cookie der den Nutzer indetifiziert.
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session()); 
app.use(cors());


require("./routes/authRoutes")(app);
require("./routes/dataRoutes")(app);
require("./routes/salesRoutes")(app);
require("./routes/paymentRoutes")(app);

// Get the Port from Production Server (Heroku) or if not declared use 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("200: Server Succesfully Started.");
