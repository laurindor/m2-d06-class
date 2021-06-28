// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require('express');
const router = express.Router();

// ********* require Book model in order to use it *********
const Book = require('../models/Book.model');

// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

router.get('/books', (req, res) => {
  Book.find()
   // You have to continue coding the route
});

// ****************************************************************************************
// GET route for displaying the book details page
// ****************************************************************************************

router.get('/books/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id)
   // You have to continue coding the route
});

module.exports = router; //this exports 
