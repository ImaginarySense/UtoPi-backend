'use strict';

// Load modules

const Joi = require('../Schemas');


// Declare internals

const internals = {};


const schema = {
    type: Joi.string().required(),
    subtype: Joi.alternatives()
        .when('type', {is: 'priceUnit', then: Joi.valid('l', 'gal', 'cm3', 'bbl')})
};  


Joi.assert({ type: 'priceUnit', subtype: 'l' }, schema); // Pass
Joi.assert({ type: 'other', subtype: 'something' }, schema); // Fail
