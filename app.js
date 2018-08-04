var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var initCouch = require('./setup/init_couch');
var indexRouter = require('./routes/index');
var roadsRouter = require('./routes/roads');
var foodRouter = require('./routes/food');
var waterRouter = require('./routes/water');
var energyRouter = require('./routes/energy');
var healthRouter = require('./routes/health');
var shelterRouter = require('./routes/shelter');
var transportationRouter = require('./routes/transportation');
var moneyRouter = require('./routes/money');
var wasteRouter = require('./routes/waste');
var peopleRouter = require('./routes/people');
var petsRouter = require('./routes/pets');
var mailRouter = require('./routes/mail');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

initCouch(function(err) {  
  if (err) {
    throw err
  }
  else {
    console.log('CouchDB initialized');
  }
});

// MAIN ROUTE DEFINITIONS 
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/roads', roadsRouter);
app.use('/food', foodRouter);
app.use('/water', waterRouter);
app.use('/energy', energyRouter);
app.use('/health', healthRouter);
app.use('/shelter', shelterRouter);
app.use('/transporation', transportationRouter);
app.use('/money', moneyRouter);
app.use('/waste', wasteRouter);
app.use('/people', peopleRouter);
app.use('/pets', petsRouter);
app.use('/mail', mailRouter);

module.exports = app;
