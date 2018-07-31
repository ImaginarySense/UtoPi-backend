var personReports = require('./db/personReports');
const now = new Date();
const unixTimestamp = now.getTime() / 1000;

var personReport = {
  firstName: 'John',
  lastName:'Doe',
  place:'Bayamon',
  lat:'12345678',
  lng:'87654321',
   timestamp: unixTimestamp
};
personReports.create(personReport, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('personReport inserted');
  }
});
