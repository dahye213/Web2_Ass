let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

// connect to our contact Model
//let Book = require("../models/business_contact");

let business_contactController = require("../controllers/business_contact");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Book List page - READ Operation */
router.get("/contact-list", requireAuth, business_contactController.displaybusinessList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/contact-list/add", requireAuth, business_contactController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/contact-list/add", requireAuth, business_contactController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/contact-list/edit/:id", requireAuth, business_contactController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/contact-list/edit/:id", requireAuth, business_contactController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/contact-list/delete/:id", requireAuth, business_contactController.deletepage);

module.exports = router;
