var schemas = require('../schemas');  
var errors = require('../errors');
var businesses = require('../couchdb').use('utopi');
/// Create buisness document in the database
exports.create = schemas.validating('business', createBuisness);
function createBuisness(business, cb) {  
  businesses.insert(business, errors.wrapNano(cb)); 
}
 
