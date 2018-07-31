var schemas = require('../schemas');  
var errors = require('../errors');
var personReports = require('../couchdb').use('utopi');
/// Create a person report
exports.create = schemas.validating('personReport', createPersonReports);
function createPersonReports(personReport, cb) {  
  personReports.insert(personReport, errors.wrapNano(cb));
}
