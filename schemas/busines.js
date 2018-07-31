var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma 
  _rev: Joi.string(),
  _id: Joi.string(),
  name: Joi.string().required()

});
