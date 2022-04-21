var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Engine = require("./models/engine");

const connectionString = process.env.MONGO_CON
var mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

var engine = require('./models/engine');
var resourceRouter = require('./routes/resource')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var engineRouter = require('./routes/engine');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');

let reseed = true;
if (reseed) { recreateDB(); }

async function recreateDB() {
  // Delete everything 
  await engine.deleteMany();

  let instance1 = new engine({ turboengine_name: 'Hyundai', size: '40lbs', turboengine_cost: 100 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new engine({ turboengine_name: 'Sonata', size: '60lbs', turboengine_cost: 80 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  let instance3 = new engine({ turboengine_name: 'Elantra', size: '20lbs', turboengine_cost: 60 });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/engine', engineRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/', resourceRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
