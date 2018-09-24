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
var shelter = require('../db/shelterReport');
/////////////////////////  SHELTER LOCATION REPORTS/////////////////////

router.get('/', function(req, res, next) {
  shelter.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
router.put('/', function(req, res, next) {
  shelter.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
router.patch('/', function(req, res, next) {
  shelter.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
router.delete('/', function(req, res, next) {
   shelter.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
