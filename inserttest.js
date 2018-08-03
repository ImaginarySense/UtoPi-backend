 var nano = require('nano')('http://utoplan:makeawok@localhost:5984/'),
  db = nano.db.use('utopi');
  
  // insert {foo: "baz"} into the "foobaz" document
  db.insert({"foo": "baz"}, "foobaz", function (error, foo) {   
    if(!error) {
      console.log("it worked");
    } else {
      console.log("sad panda");
    }
  });
