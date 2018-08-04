var extend = require('util')._extend; 
var Joi = require('joi');
var updateAttributes = {  
  _id: Joi.string(),
  _rev: Joi.string(),
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
};
/*module.exports = Joi.object().keys({
// defining the scehma 
  _rev: Joi.string(),
  _id: Joi.string(),
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
});*/


// disallow changes to some specific fields
exports.update = Joi.object().keys(updateAttributes);

var createAttributes = extend({  
  email: Joi.string().email()
}, updateAttributes);
exports.create = Joi.object().keys(createAttributes);


