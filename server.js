// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// Sets up the Express App
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up Express static directory
app.use(express.static("public"));

//  let db = require("./models/transactions.js");

// Sets up Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Require routes
// =============================================================
 app.use(require("./routes/api.js"));


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
