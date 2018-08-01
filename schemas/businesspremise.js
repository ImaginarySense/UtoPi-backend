var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma of Business Premises.
  _rev: Joi.string(),
  _id: Joi.string(),
  aperture:Joi.date().timestamp('unix'),
  closing:Joi.date().timestamp('unix') ,
  openingDate: Joi.date(),
  closingDate: Joi.date()
});
