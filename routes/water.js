var express = require('express');
var router = express.Router();

// OASIS REPORTS
router.get('/oasis', function(req, res, next) {
  res.send('Not implemented...');
});
router.put('/oasis', function(req, res, next) {
  res.send('Not implemented...');
});
router.patch('/oasis', function(req, res, next) {
  res.send('Not implemented...');
});
router.delete('/oasis', function(req, res, next) {
  res.send('Not implemented...');
});

// WATER SERVICE REPORTS
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

module.exports = router;
