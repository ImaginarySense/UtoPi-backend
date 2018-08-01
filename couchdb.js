var nano = require('nano');
//construct a database wrapper that points to the CouchDB server specified by the URL 
module.exports = nano(process.env.COUCHDB_URL ||'http://utoplan:3*tg1Q!v,>i8|t~5@localhost:5984/');
console.log(module.exports);
