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

var extend = require('util')._extend;
var Joi = require('joi');
var updateAttributes = {
  _id: Joi.string(),
  _rev: Joi.string(),
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
};
/*module.exports = Joi.object().keys({
// defining the scehma
  _rev: Joi.string(),
  _id: Joi.string(),
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
});*/


// disallow changes to some specific fields
exports.update = Joi.object().keys(updateAttributes);

var createAttributes = extend({
  email: Joi.string().email()
}, updateAttributes);
exports.create = Joi.object().keys(createAttributes);


