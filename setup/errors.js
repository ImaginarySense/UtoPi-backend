var Boom = require('boom');
exports.wrapNano = function wrapNanoError(cb) {  
  return function(err) {
    if (err) {
      Boom.boomify(err, err.statusCode || 500);
    }
    cb.apply(null, arguments);
  };
}
