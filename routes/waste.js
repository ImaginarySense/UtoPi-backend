var express = require('express');
var router = express.Router();

//  GARBAGE COLLECTION SERVICE REPORTS
router.get('/service', function(req, res, next) {
  res.send('Not implemented...');
});
router.put('/service', function(req, res, next) {
  res.send('Not implemented...');
});
router.patch('/service', function(req, res, next) {
  res.send('Not implemented...');
});
router.delete('/service', function(req, res, next) {
  res.send('Not implemented...');
});

//  RECYCLING CENTER REPORTS
router.get('/recycle', function(req, res, next) {
  res.send('Not implemented...');
});
router.put('/recycle', function(req, res, next) {
  res.send('Not implemented...');
});
router.patch('/recycle', function(req, res, next) {
  res.send('Not implemented...');
});
router.delete('/recycle', function(req, res, next) {
  res.send('Not implemented...');
});

module.exports = router;
