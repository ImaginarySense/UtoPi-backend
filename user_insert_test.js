var users = require('./db/users');
var user = {  
  email: 'johndoe@example.com',
  name: 'John',
  lastName:'Doe'
};
users.create(user, function(err) {  
  if (err) {
    throw err;
  }
  else {
    console.log('user inserted');
  }
});
