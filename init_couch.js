var async = require('async');  
var couch = require('./couchdb');
var databases = ['utopi', 'messages'];
// Each database gets created by calling the createDatabase, which in turn uses nano to create the database, ignoring any error that occurs if the database already exists.
module.exports = initCouch;
//starts the database creation by calling the createDatabases
function initCouch(cb) {  
  createDatabases(cb);
}
//This function uses async to create each database defined in the databases configuration array. 
function createDatabases(cb) {  
  async.each(databases, createDatabase, cb);
}
// validate 
function createDatabase(db, cb) {  
  couch.db.create(db, function(err) {
    if (err && err.statusCode == 412) {
      err = null;
    }
    cb(err);
  });
}
