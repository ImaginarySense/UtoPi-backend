var Joi = require('joi');
module.exports = Joi.object().keys({
// defining the scehma 
  _rev: Joi.string(),
  _id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  lastAppearance: Joi.string(),
  place: Joi.string().required(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  description: Joi.string(),
  type: Joi.string(),
  timestamp: Joi.date().timestamp('unix')
});
   

   
   
   
  
