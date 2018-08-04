var nano = require('nano')('http://utoplan:makeawok@localhost:5984/'),
  db = nano.db.use('utopi');
  //           rev #                  id#
db.destroy("document_id", "2-d2965ec49dc07e15cae358dfd5324f7d", function(err, body, header) {
  if (!err) {
    console.log("Successfully deleted doc", "document_id");
  }
});
