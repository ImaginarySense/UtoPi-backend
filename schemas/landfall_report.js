// LANDFALL REPORT
// Import data validation tool
var Joi = require('joi');
// Define and export Scheme
module.exports = Joi.object().keys({
  _rev: Joi.string(),
  _id: Joi.string(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  timestamp: Joi.date().timestamp('unix').required(),
  status: Joi.string().valid(['Collapsed', 'Blocked', 'Partially blocked', 'Resolved']),
  description: Joi.string().max(140, 'utf8')
});
