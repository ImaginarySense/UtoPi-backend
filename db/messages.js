var extend = require('util')._extend;  
var schemas = require('../schemas');  
var errors = require('../errors');
var messages = require('../couchdb').use('messages');
/// Create user
//exports.create = schemas.validate('message', 'create', createMessage);
//exports.create = schemas.validating('message', createMessage);
exports.create = schemas.validating('message', 'create', createMessage);
function createMessage(message, cb) {  
  message.createdAt = Date.now();
  messages.insert(message, errors.wrapNano(cb));
}
