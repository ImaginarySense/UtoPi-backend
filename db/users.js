var schemas = require('../schemas');  
var errors = require('../errors');
var users = require('../couchdb').use('utopi');
/// Create user
exports.create = schemas.validating('user', createUser);
function createUser(user, cb) {  
  users.insert(user, errors.wrapNano(cb));
}
