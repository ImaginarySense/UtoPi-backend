var async = require('async');  
var couch = require('./couchdb');
var databases = ['charging_station_report',
                 'doctor_report',
                 'dyalisis_center_report',
                 'energy_service',
                 'flood_report',
                 'food_place_report',
                 'gas_station_report',
                 'hospital_report',
                 'landfall_report',
                 'oasis_report',
                 'person_report',
                 'pharmacy_report',
                 'roadblock_report',
                 'shelter_report',
                 'water_service'
                ];
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
  couch.db.create(db).then((data) => {
    // success
  }).catch((err) => {
    if (err && err.statusCode == 412) {
      err = null;
      couch.db.use(db);
    }
    cb(err);
  })
}
