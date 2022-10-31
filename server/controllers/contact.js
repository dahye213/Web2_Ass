let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const contact = require("../models/contact");


module.exports.displaybusinessList = (req, res, next) => {
    contact.find((err, contacts) =>{ // this contacts is same as contacts : contacts(this)
        if(err)
        {
            return console.error(err);
        } else {
            //console.log(ContactList);
            res.render('contact/list', 
            {title: 'Contact List', 
            contacts : contacts, 
            displayName: req.user ? req.user.displayName : "",});
        }
    });
};

  module.exports.addpage = (req, res, next) => {
    res.render("contact/add", {
      title: "Add Contact",
      displayName: req.user ? req.user.displayName : "",
    });
  };
  
  module.exports.addprocesspage = (req, res, next) => {
    let newContact = contact({
      name: req.body.name,
      number: req.body.number,
      email: req.body.email
    });

    contact.create(newContact,(err, contact)=> {
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
  
    contact.findById(id, (err, contactEdit) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("contact/edit", {
          title: "Edit contact",
          contacts: contactEdit,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updateContact = contact({
      _id: id,
      name: req.body.name,
      number: req.body.number,
      email: req.body.email
    });
    contact.updateOne({ _id: id }, updateContact, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the book list
        res.redirect("/contact-list");
      }
    });
  };
  
  module.exports.deletepage = (req, res, next) => {
    let id = req.params.id;
    contact.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh book list
        res.redirect("/contact-list");
      }
    });
  };