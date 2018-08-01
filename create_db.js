var couch = require('./couchdb');
// creates the database in cocuchdb
couch.db.create('utopi', function(err) { 
// validate if there a database with that name alredy in cocuchdb 
  if (err && err.statusCode != 412) {
    console.error(err);
  }
  else {
    console.log('database utopi exists');
  }
});
