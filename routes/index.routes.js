const express = require('express');
const router = express.Router();

/* GET home page */

// Code the  get('/') route here rendering index
router.get('/', (req, res) => {
res.render('index', {title: "home page TEST"})
});

module.exports = router;
