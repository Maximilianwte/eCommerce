const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Hier legen wir ein neues Schema an. Also welche Werte die Nutzer in unserer Datenbank haben sollen. Mit Mongoose verlieren wir die NoSQL Funktionen.
const userSchema = new Schema({
  googleID: String
});

// Diese Line baut eine MongoDB Datenbank namens users mit dem Schema userSchema
mongoose.model("users", userSchema);
