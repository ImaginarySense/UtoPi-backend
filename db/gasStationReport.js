const DATABASE = 'gas_station_report';

var schemas = require('../schemas');  
var errors = require('../setup/errors');
var db = require('../setup/couchdb').use(DATABASE);

exports.create = schemas.validating(DATABASE, function (data, cb) {
		db.insert(data, errors.wrapNano(cb));
	}
);

exports.update = schemas.validating(DATABASE, function (data, cb, id) {
 		db.insert(data, id, errors.wrapNano(cb));
	}
);

exports.readOne = function(id, cb) {
	return db.get(id);
};

exports.readAll = function(cb, q={}, limit=10, skip=0) {  //DEV: Improve by testing q values
	const query = {
		selector: q,
		limit: limit,
		skip: skip
	};
	return db.find(query);
};

exports.destroy = function(rev, cb, id) {
	return db.destroy(id, rev, errors.wrapNano(cb));
};
