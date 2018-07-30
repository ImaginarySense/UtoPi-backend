var nano = require('nano');

module.exports = nano(process.env.COUCHDB_URL ||'http://utoplan:3*tg1Q!v,>i8|t~5@localhost:5984/');
console.log(module.exports);
