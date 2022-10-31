let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const business_contact = require("../models/business_contact");

module.exports.displaybusinessList = (req, res, next) => {
  business_contact.find((err, business_List) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(business_List);

      res.render("business_contact/list", {
        title: "Business contact",
        Business_List: business_List,
        displayName: req.user ? req.user.displayName : "",
      });
      //render list.ejs and pass title and Business_List variable we are passing business_List object to Business_List property
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("business_contact/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newbusiness_contact = business_contact({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    
  });
  business_contact.create(newbusiness_contact, (err, business_contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/contact-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  business_contact.findById(id, (err, business_contactedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("business_contact/edit", {
        title: "Edit contact",
        business_contact: business_contactedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatebusiness_contact = business_contact({
    _id: id,
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    
  });
  business_contact.updateOne({ _id: id }, updatebusiness_contact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the Business ListZ
      res.redirect("/contact-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  business_contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh  Business ListZ
      res.redirect("/contact-list");
    }
  });
};
