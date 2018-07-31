var roadReports = require('./db/roadReports');
var roadReport = {  
  status: 'Blocked'
};
roadReports.create(roadReport, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('road status inserted');
  }
});
