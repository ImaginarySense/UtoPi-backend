var nano = require("nano")("'http://utoplan:3*tg1Q!v,>i8|t~5@localhost:5984/'"),
db = nano.db.use("utopi");
db.get(docUniqueId, function(err, body) {
  if (!err) {
    var latestRev = body._rev;
    db.destroy(docUniqueId, latestRev, function(err, body, header) {
      if (!err) {
          console.log("Successfully deleted doc", docUniqueId);
      }
    });
  }
})
