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

const DATABASE = 'doctor_report';

var schemas = require('../schemas');
var errors = require('../setup/errors');
var db = require('../setup/couchdb').use(DATABASE);
// insert data in the database
exports.create = schemas.validating(DATABASE, function (data, cb) {
		db.insert(data, errors.wrapNano(cb));
	}
);
// update the info o a doc by id and rev
exports.update = schemas.validating(DATABASE, function (data, cb, id) {
 		db.insert(data, id, errors.wrapNano(cb));
	}
);
// get one specific doc by the id
exports.readOne = function(id, cb) {
	return db.get(id);
};
// read all doc inserted in the database, also you can look the last 10 doc inserted using the limit
exports.readAll = function(cb, q={}, limit=10, skip=0) {  //DEV: Improve by testing q values
	const query = {
		selector: q,
		limit: limit,
		skip: skip
	};
	return db.find(query);
};
// destroy a doc in the database
exports.destroy = function(rev, cb, id) {
	return db.destroy(id, rev, errors.wrapNano(cb));
};
