/*
 * Copyright 2018 Imaginary Sense <support@imaginary.tech>
 * Copyright 2018 Kevin J. Ponce García <kevin@imaginary.tech>
 * Copyright 2018 Javier O. Cordero Pérez <javier@imaginary.tech>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

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
