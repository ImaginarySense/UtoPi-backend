var schemas = require('../schemas');  
var errors = require('../errors');
var users = require('../couchdb').use('utopi');
// Create user document in the database
exports.create = schemas.validating('user', 'create', createUser);
function createUser(user, cb) {  
  users.insert(user, errors.wrapNano(cb));
}
var diff = require('object-versions').diff;
// Update user
exports.update = updateUser;
function updateUser(user, cb) {  
// Get the current version of the user document before sending it to CouchDB 
  users.get(user._id, errors.wrapNano(function(err, currentUser) {
    if (err) {
      cb(err);
    }
    else {
//Find the difference, and validate it:
      var userDiff = diff(currentUser, user);
      schemas.validate(userDiff, 'user', 'update', function(err) {
        if (err) {
          cb(err);
        }
        else {
          users.insert(user, errors.wrapNano(cb));
        }
      });
    }
  }));
}
//Exports a new updateDiff function that accepts an incomplete user document, containing only the attributes that have changed. 
exports.updateDiff = updateUserDiff;
function updateUserDiff(userDiff, cb) {
//Validate it before merging the current document with the diff document
  schemas.validate(userDiff, 'user', 'update', function(err) {
    if (err) {
      cb(err);
    }
    else {
      merge();
    }
  });
//Applying the given changes to this document;
  function merge() {
    users.get(userDiff._id, errors.wrapNano(function(err, user) {
      if (err) {
        cb(err);
      }
      else {
        extend(user, userDiff);
        users.insert(user, errors.wrapNano(done));
      }
    }));
//Trying to save it into CouchDB.
//If this last step has a conflict error (which can happen when two or more clients are updating the same document concurrently), we try again from the beginning.
    function done(err) {
      if (err && err.statusCode == 409 && !userDiff._rev) {
        merge(); // try again
      }
      else {
        cb.apply(null, arguments);
      }
    }
  }
}















