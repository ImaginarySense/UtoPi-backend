/*
 * Copyright 2018 Imaginary Sense <support@imaginary.tech>
 * Copyright 2018 Kevin J. Ponce García <kevin@imaginary.tech>
 * Copyright 2018 Javier O. Cordero Pérez <javier@imaginary.tech>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

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
