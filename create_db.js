var couch = require('./couchdb');
couch.db.create('utopi', function(err) {  
  if (err && err.statusCode != 412) {
    console.error(err);
  }
  else {
    console.log('database utopi exists');
  }
});
