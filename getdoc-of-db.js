const nano = require('nano')('http://utoplan:3*tg1Q!v,>i8|t~5@localhost:5984/')
const utopi = nano.use('utopi');

utopi.list().then((body) => {		
	body.rows.forEach((db) => {
		console.log(db);
	});
});




