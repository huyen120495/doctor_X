const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const HospitalRepository = require('./src/hospital/hospital-repository');
const LocationRepository = require('./src/location/location-repository');
const RateRepository = require('./src/rater/rater-repository');
const HospitalFactory = require('./src/hospital/hospital-factory');
const Searcher = require('./src/search-services/searcher');
const Connection = require('./database/connection');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.set('hospital.repo', new HospitalRepository(Connection));
app.set('location.repo', new LocationRepository(Connection));
app.set('hospital.fac', new HospitalFactory());
app.set('search', new Searcher(Connection, new HospitalFactory()));
app.set('rate.repo', new RateRepository(Connection));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
