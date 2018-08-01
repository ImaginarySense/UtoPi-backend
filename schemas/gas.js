var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma of gasoline
  _rev: Joi.string(),
  _id: Joi.string(),
  priceUnit: Joi.string().only('l', 'gal', 'cm3', 'bbl')
});
