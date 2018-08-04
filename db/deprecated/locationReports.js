var schemas = require('../schemas');  
var errors = require('../errors');
var locationReports = require('../couchdb').use('utopi');
/// Create a location report document in the database
exports.create = schemas.validating('locationReport', createLocationReports);
function createLocationReports(locationReport, cb) {  
  locationReports.insert(locationReport, errors.wrapNano(cb));
}