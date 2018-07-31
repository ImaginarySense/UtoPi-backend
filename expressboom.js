module.exports = function (err, req, res, next) {  
  res.set(err.output.headers);
  res.status(err.output.statusCode);
  res.json(err.output.payload);
};
