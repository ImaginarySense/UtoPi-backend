var business = require('./db/business');
var busines = {  
  name: 'Engine-4'

};
business.create(busines, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('busines inserted');
  }
});
