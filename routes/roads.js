var express = require('express');
var router = express.Router();
// NOTE: we need to validate entry data
var block = require('../db/roadBlockReport');
var landfall = require('../db/landFallReport');
var flood = require('../db/floodReport');
/////////////////////////  ROADBLOCK REPORT ////////////////////////////
// GET All road blocks
router.get('/block', function(req, res, next) {
 block.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One road block
router.get('/block/:id', function(req, res, next) {
 block.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT One road block
router.put('/block', function(req, res, next) {
   block.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH road block
router.patch('/block', function(req, res, next) {
   block.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE road block
router.delete('/block', function(req, res, next) {
   block.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
/////////////////////////  LANDFALL REPORT ////////////////////////////
// GET All land falls
router.get('/landfall', function(req, res, next) {
   landfall.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One land fall
router.get('/landfall/:id', function(req, res, next) {
 landfall.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT land fall
router.put('/landfall', function(req, res, next) {
  landfall.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH land fall
router.patch('/landfall', function(req, res, next) {
     landfall.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE land fall
router.delete('/landfall', function(req, res, next) {
    landfall.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
/////////////////////////  FLOOD REPORT ////////////////////////////
// GET All floods
router.get('/flood', function(req, res, next) {
  flood.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One flood
router.get('/flood/:id', function(req, res, next) {
 flood.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT flood
router.put('/flood', function(req, res, next) {
   flood.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH flood
router.patch('/flood', function(req, res, next) {
    flood.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE flood
router.delete('/flood', function(req, res, next) {
   flood.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
