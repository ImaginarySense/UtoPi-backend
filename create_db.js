var couch = require('./couchdb');

couch.db.create('utopi', function(err) {
		if(err) {
		console.error(err);
	}
});
