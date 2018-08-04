var express = require('express');
var router = express.Router();

var gas = require('../db/gasStationReport');

// POWER SERVICES REPORTS
router.get('/service', function(req, res, next) {
  res.send('Not implemented...');
});
router.get('/service/:id', function(req, res, next) {
  res.send('Not implemented...');
});
router.put('/service/:id', function(req, res, next) {
  res.send('Not implemented...');
});
router.patch('/service/:id', function(req, res, next) {
  res.send('Not implemented...');
});
router.delete('/service/:id', function(req, res, next) {
  res.send('Not implemented...');
});

// GAS STATIONS REPORTS
// GET All gas stations
router.get('/gas', function(req, res, next) {
  gas.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One gas station
router.get('/gas/:id', function(req, res, next) {
  gas.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT gas station
router.put('/gas', function(req, res, next) {
  gas.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH gas station
router.patch('/gas/:id', function(req, res, next) {
  gas.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE gas station
router.delete('/gas/:id', function(req, res, next) {
  gas.destroy(req.body.rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

// RECHARGE STATIONS REPORTS
router.get('/station', function(req, res, next) {
  res.send('Not implemented...');
});
router.get('/station/:id', function(req, res, next) {
  res.send('Not implemented...');
});
router.put('/station', function(req, res, next) {
  res.send('Not implemented...');
});
router.patch('/station/:id', function(req, res, next) {
  res.send('Not implemented...');
});
router.delete('/station/:id', function(req, res, next) {
  res.send('Not implemented...');
});

module.exports = router;
