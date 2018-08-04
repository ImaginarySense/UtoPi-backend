var gasolines = require('./db/gasolines');
var gas = {  
  priceUnit: 'l'
};
gasolines.create(gas, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('gasoline priceunit has been inserted');
  }
});
