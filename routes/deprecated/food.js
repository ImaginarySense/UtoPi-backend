var location = require('../db/location');
var businesses = require('../db/businesses');
var business = {  
  name: 'Engine-4'

};
businesses.create(business, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('business has been inserted');
  }
});
 
