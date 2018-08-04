const DATABASE = 'dyalisis_center_report';

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
