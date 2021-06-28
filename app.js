//const mongoose = require('mongoose');
require('dotenv').config();

const express = require('express');
const favicon = require('serve-favicon');
//const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

// require database configuration
require('./configs/db.config');

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);

<<<<<<< HEAD
const bookRouter = require ('./routes/book.routes')

app.use('/books', bookRouter);
=======
const booksRouter = require('./routes/book.routes');
app.use('/books', booksRouter);
>>>>>>> 0a74a06954b0f7f7630811656d7280d6d56068bf

module.exports = app;
