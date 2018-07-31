var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma 
  _rev: Joi.string(),
  _id: Joi.string(),
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  lastName: Joi.string().required(),
});
