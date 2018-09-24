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

var Joi = require('joi');
var Boom = require('boom');
var schemaNames = [
                   'doctor_report',
                   'dyalisis_center_report',
                   'energy_service_report',
                   'flood_report',
                   'food_place_report',
                   'food_aid_report',
                   'gas_station_report',
                   'recharging_station_report',
                   'hospital_service_report',
                   'landfall_report',
                   'oasis_report',
                   'person_report',
                   'pharmacy_report',
                   'roadblock_report',
                   'shelter_report',
                   'water_service_report'
                  ];
var schemas = {};
/*
 * Check validation of the given document, and call the continuation function if it is valid.
 * If the given document does not respect the schema,
 * instead of calling the continuation function it will directly call the callback with the validation error.
 */
/// verify whether a certain object respects the schema or not:
schemaNames.forEach(function(schemaName) {
  schemas[schemaName] = require('./' + schemaName);
});
exports.validate = validate;
var validate = function validate(doc, schema, cb) {
  if (typeof schema == 'string') {
    schema = schemas[schema];
  }
  if (! schema) {
    cb(new Error('Unknown schema'));
  }
  else {
    Joi.validate(doc, schema, function(err, value) {
      if (err) {
        Boom.badRequest(err);
        cb(err);
      }
      else {
        cb(null, doc);
      }
    });
  }
};
exports.validating = function validating(schemaName, fn) {
  var schema = schemas[schemaName];
  if (! schema) {
    throw new Error('Unknown schema: ' + schemaName);
  }
  return function(doc, cb, id) {
    validate(doc, schema, function(err, doc) {
      if (err) {
        cb(err);
      }
      else {
        fn.call(null, doc, cb, id);
      }
    });
  };
};

///Disallowing changes to specific fields( dons't work)
/*var schemaNames = ['user',
                   'personReport',
                   'locationReport',
                   'roadReport',
                   'gas',
                   'businesspremise',
                   'business'];
var schemas = {};

schemaNames.forEach(function(schemaName) {
  schemas[schemaName] = require('./' + schemaName);
});
exports.validate = validate;
function validate(doc, schema, op, cb) {
  if (typeof schema == 'string') {
    schema = schemas[schema];
  }
  if (! schema) {
    cb(new Error('Unknown schema'));
  }
  else {
    schema = schema[op];
    if (! schema) {
      throw new Error('Undefined op ' + op);
    }
    else {
      Joi.validate(doc, schema, function(err, value) {
        if (err) {
  Boom.badRequest('invalid query');
          cb(err);
        }
        else {
          cb(null, doc);
        }
      });
    }
  }
};
exports.validating = function validating(schemaName, op, fn) {
  var schema = schemas[schemaName];
  if (! schema) {
    throw new Error('Unknown schema: ' + schemaName);
  }
  return function(doc, cb) {
    validate(doc, schema, op, function(err, doc) {
      if (err) {
        cb(err);
      }
      else {
        fn.call(null, doc, cb);
      }
    });
  };
};*/
