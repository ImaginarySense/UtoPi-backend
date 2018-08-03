 var nano = require('nano')('http://utoplan:makeawok@localhost:5984/'),
  db = nano.db.use('utopi');
 //       attribute|inftoUpdate|          rev #                                         id #
 db.insert({"name": "kevin", "_rev": "1-f331dfa625bd3cbe14e62fc38c65d660"}, "1-45903e32da8358697e97a2d63f24ffd8", 
    function (error, response) {
      if(!error) {
        console.log("Successfully updated");
      } else {
        console.log(" could not update user");
      }
    });
