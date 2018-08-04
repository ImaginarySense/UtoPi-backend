var schemas = require('../schemas');  
var errors = require('../errors');
var personReports = require('../couchdb').use('utopi');
/// Create a person report document in the database
exports.create = schemas.validating('personReport', createPersonReports);
function createPersonReports(personReport, cb) {  
  personReports.insert(personReport, errors.wrapNano(cb));
}
