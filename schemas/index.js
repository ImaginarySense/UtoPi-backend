var Joi = require('joi');  
var Boom = require('boom');
var schemaNames = ['charging_station_report',
                   'doctor_report',
                   'dyalisis_center_report',
                   'energy_service',
                   'flood_report',
                   'food_place_report',
                   'gas_station_report',
                   'hospital_report',
                   'landfall_report',
                   'oasis_report',
                   'person_report',
                   'pharmacy_report',
                   'roadblock_report',
                   'shelter_report',
                   'water_service'
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
