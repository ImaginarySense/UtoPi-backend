var schemas = require('../schemas');  
var errors = require('../errors');
var roadReports = require('../couchdb').use('utopi');
/// Create road report
exports.create = schemas.validating('roadReport', createRoadReports);
function createRoadReports(roadReport, cb) {  
  roadReports.insert(roadReport, errors.wrapNano(cb));
}
