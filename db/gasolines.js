var schemas = require('../schemas');  
var errors = require('../errors');
var gasolines = require('../couchdb').use('utopi');
/// Create gasoline document in the database
exports.create = schemas.validating('gas', createGasoline);
function createGasoline(gas, cb) {  
  gasolines.insert(gas, errors.wrapNano(cb));
}
