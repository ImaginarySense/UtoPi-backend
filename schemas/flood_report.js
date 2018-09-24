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

// FLOOD REPORT
// Import data validation tool
var Joi = require('joi');
// Define and export Scheme
module.exports = Joi.object().keys({
  _rev: Joi.string(),
  _id: Joi.string(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  timestamp: Joi.date().timestamp('unix').required(),
  status: Joi.string().valid(['Flooded', 'Resolved']),
  place: Joi.string().required().max(50, 'utf8'),
  description: Joi.string().max(140, 'utf8')
});
