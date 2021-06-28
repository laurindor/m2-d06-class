// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT
//standard imports
const express = require('express');
const router = express.Router(); //this is the router class inside the express libray (predefined)

// ********* require Book model in order to use it, we import *********
const Book = require('../models/Book.model');

// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

router.get('/', (req, res) => { //no hace falta poner /books porque ya asume desde app.js (linea 35) que empiezas desde books
  Book.find() //aqui reclamas todos los books con el find vacío
   .then(allBooks => {
    res.render ('books', {allBooks})})
});

//this answers to /books/add URL
router.post('/add', (req, res)=> { 
   const { title, description, author, rating } = req.body //this is called destructuring and does the same as below
  //const title= req.body.title
  //const description = req.body.description
  //const author = req.body.author
  //const rating = req.body.rating

  Book.create ( {title, description, author, rating})
 .then( createdBook => {
  console.log (createdBook);
  res.redirect('/books');//this is a mandatory closing condition for our route
 })
 .catch(err => console.log(err))

})


router.get('/add', (req, res) => {
  res.render('book-add')
})

router.post('/edit/:id', (req, res)=>{
  const id = req.params.id
  const { title, description, author, rating } = req.body
  Book.findByIdAndUpdate(id,{title, description, author, rating })
  .then(updatedBook => res.redirect(`/books`))
  .catch(err=>console.log(err))
})

router.get('/edit/:id', (req, res) =>{ //this is the twin route of the get
  const id = req.params.id
  Book.findById(id)
  .then( bookFromFindById => res.render ('book-edit', {book: bookFromFindById}))
})

router.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id).then( deletedBook => res.redirect("/books"))
});


// ****************************************************************************************
// GET route for displaying the book details page
// ****************************************************************************************

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id)
   .then (bookFromCollection => res.render ("book-details", bookFromCollection ))
});


// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************



router.get('/', (req, res) => { // What URL does this answer?
  Book.find()
  .then(allBooks => {
    res.render('books', {allBooks})})
   // You have to continue coding the route
});



module.exports = router; //this exports 
