var locationReports = require('./db/locationReports');
const now = new Date();
const unixTimestamp = now.getTime() / 1000;

var locationReport = {
  place:'Bayamon',
  lat:'12345678',
  lng:'87654321',
  timestamp: unixTimestamp
};
locationReports.create(locationReport, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('locationReport inserted');
  }
});
