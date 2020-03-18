const express = require('express');
const indexRouter = require('./routes/index');
const path = require('path');


var app = express();

// view engine setup
app.use(express.static('views'));
app.use('/', indexRouter);






module.exports = app;