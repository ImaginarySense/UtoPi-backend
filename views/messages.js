exports.by_to = {  
// map function that will run inside CouchDB. This function will be called each time there is an updated or a new message document. 
  map: function(doc) {
    if (doc.to) {
      emit(doc.to, {_id: doc._id});
    }
  }
};
