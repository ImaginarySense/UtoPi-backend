var Joi = require('joi');  
var Boom = require('boom');
var schemaNames = ['user',
                   'personReport',
                   'locationReport',
                   'roadReport',
                   'business'];
var schemas = {};
/*
 * Check validation of the given document, and call the continuation function if it is valid. 
 * If the given document does not respect the schema, 
 * instead of calling the continuation function it will directly call the callback with the validation error. 
 */
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
};
