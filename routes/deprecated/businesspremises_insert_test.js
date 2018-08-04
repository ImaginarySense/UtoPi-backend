var businessPremisesReport = require('../db/businessespremises');
const now = new Date();
const unixTimestamp = now.getTime() / 1000;

var businessPremise = {
  apperture: unixTimestamp,
  closing: unixTimestamp+5,
  openingDate: unixTimestamp,
  closingDate: unixTimestamp+6000
};
businessPremisesReport.create(businessPremise, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('businessPremiseReport inserted');
  }
});
