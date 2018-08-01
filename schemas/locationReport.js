var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma of location report
  _rev: Joi.string(),
  _id: Joi.string(),
  type: Joi.string(),
  place: Joi.string().required(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  description: Joi.string(),
  timestamp: Joi.date().timestamp('unix').required()
});
