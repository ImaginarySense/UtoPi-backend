var express = require('express');
var router = express.Router();
// NOTE: we need to validate entry data
var gas = require('../db/gasStationReport');
var service = require('../db/energyServiceReport');
var station = require('../db/rechargingStationReport');
///////////////////////// ENERGY SERVICES REPORTS //////////////////////
// GET All energy service
router.get('/service', function(req, res, next) {
  service.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One energy service
router.get('/service/:id', function(req, res, next) {
 service.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT energy service
router.put('/service/', function(req, res, next) {
  service.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH energy service
router.patch('/service/:id', function(req, res, next) {
   service.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE energy service
router.delete('/service/:id', function(req, res, next) {
  service.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

///////////////////////// GAS STATIONS REPORTS /////////////////////////
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
  gas.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
///////////////////////// RECHARGE STATIONS REPORTS ////////////////////
// GET All recharge stations
router.get('/station', function(req, res, next) {
   station.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One recharge station
router.get('/station/:id', function(req, res, next) {
  station.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT recharge station
router.put('/station', function(req, res, next) {
  station.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH recharge station
router.patch('/station/:id', function(req, res, next) {
  station.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE recharge station
router.delete('/station/:id', function(req, res, next) {
    station.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
