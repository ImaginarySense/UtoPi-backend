var schemas = require('../schemas');  
var errors = require('../errors');
var business = require('../couchdb').use('utopi');
/// Create buisness
exports.create = schemas.validating('busines', createBuisness);
function createBuisness(busines, cb) {  
  business.insert(busines, errors.wrapNano(cb)); 
}
 
