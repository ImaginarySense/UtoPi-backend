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

'use strict';

// Load modules
const Joi = require('../Schemas');

const now = new Date();
const javascriptTimestamp = now.getTime();
const unixTimestamp = now.getTime() / 1000;

const schema = Joi.object().options({ abortEarly: false }).keys({
  javascript1: Joi.date().timestamp(),
  javascript2: Joi.date().timestamp('javascript'),
  unix: Joi.date().timestamp('unix')
});

const data = {
  javascript1: javascriptTimestamp,
  javascript2: javascriptTimestamp,
  unix: unixTimestamp
};

Joi.assert(data, schema);
