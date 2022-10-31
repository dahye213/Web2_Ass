let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let contactModel = mongoose.Schema(
  {
    name: String,
    email: String,
    number: String
   
  },

  {
    collection: "contacts",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("contact", contactModel);
