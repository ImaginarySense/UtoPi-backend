const nano = require('nano')('http://utoplan:makeawok@localhost:5984/')
const utopi = nano.use('utopi');

// get all documents in the database

utopi.list().then((body) => {		
	body.rows.forEach((doc) => {
		console.log(doc);
	});
});

