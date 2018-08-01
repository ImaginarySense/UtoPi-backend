var schemas = require('../schemas');  
var errors = require('../errors');
var businessPremises. = require('../couchdb').use('utopi');
/// Create a Business Premise document in the database
exports.create = schemas.validating('businessPremise', createBusinessPremise);
function createBusinessPremise(businessPremise, cb) {  
  businessPremises.insert(businessPremise, errors.wrapNano(cb));
}
