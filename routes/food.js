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
var router = express.Router();
// NOTE: we need to validate entry data
var place = require('../db/foodPlaceReport');
var place = require('../db/foodAidReport');
///////////////////////// FOOD PLACES REPORTS //////////////////////////
// GET All food places
router.get('/place', function(req, res, next) {
 place.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One food place
router.get('/place/:id', function(req, res, next) {
 place.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT food place
router.put('/place', function(req, res, next) {
 place.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH food place
router.patch('/place', function(req, res, next) {
     place.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE food place
router.delete('/place', function(req, res, next) {
 place.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
///////////////////////// FOOD AID REPORTS ////////////////////////////
// GET All food aids
router.get('/aid', function(req, res, next) {
aid.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One food aid
router.get('/aid/:id', function(req, res, next) {
 aid.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT food aid
router.put('/aid', function(req, res, next) {
 aid.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH food aid
router.patch('/aid', function(req, res, next) {
 aid.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE food aid
router.delete('/aid', function(req, res, next) {
   aid.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
