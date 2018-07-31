var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma of road reports
  _rev: Joi.string(),
  _id: Joi.string(),
  status: Joi.string().only('Collapsed', 'Blocked', 'Partially', 'Solved')
});
