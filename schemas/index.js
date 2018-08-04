var Joi = require('joi');  
var Boom = require('boom');
var schemaNames = ['user',
                   'personReport',
                   'locationReport',
                   'roadReport',
                   'gas',
                   'message',
                   'businesspremise',
                   'business'];
/*var schemas = {};

/// verify whether a certain object respects the schema or not:
schemaNames.forEach(function(schemaName) {  
  schemas[schemaName] = require('./' + schemaName);
});
exports.validate = validate;
function validate(doc, schema, cb) {  
  if (typeof schema == 'string') {
    schema = schemas[schema];
  }
  if (! schema) {
    cb(new Error('Unknown schema'));
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
};
exports.validating = function validating(schemaName, fn) {  
  var schema = schemas[schemaName];
  if (! schema) {
    throw new Error('Unknown schema: ' + schemaName);
  }
  return function(doc, cb) {
    validate(doc, schema, function(err, doc) {
      if (err) {
        cb(err);
      }
      else {
        fn.call(null, doc, cb);
      }
    });
  };
};*/

///Disallowing changes to specific fields
var schemaNames = ['user',
                   'personReport',
                   'locationReport',
                   'roadReport',
                   'gas',
                   'businesspremise',
                   'business',
                   'message'];
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
};
 
 
 

