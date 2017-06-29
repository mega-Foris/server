 const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')


const app = express();

const authMiddleware = require('./auth/middleware.js')
const auth = require('./auth');
const events = require('./api/events.js');
const persons = require('./api/persons.js');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use(authMiddleware.checkTokenSetUser)

app.use('/auth', auth);

//app.use('/api/v1/persons', persons);
app.use('/api/v1/events', authMiddleware.ensureLoggedIn, events);
app.use('/api/v1/persons', authMiddleware.ensureLoggedIn, persons);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'production' ? {} : err.stack
    //could also be
    //stack: process.env.NODE_ENV == 'development' ? err.stack : {}
  });
});

module.exports = app;
