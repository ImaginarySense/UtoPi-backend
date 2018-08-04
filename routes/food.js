var express = require('express');
var router = express.Router();
// NOTE: we need to validate entry data
var place = require('../db/foodPlaceReport');
var place = require('../db/foodAidReport');
///////////////////////// FOOD PLACES REPORTS //////////////////////////
// GET All food places
router.get('/place', function(req, res, next) {
 place.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One food place
router.get('/place/:id', function(req, res, next) {
 place.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT food place
router.put('/place', function(req, res, next) {
 place.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH food place
router.patch('/place', function(req, res, next) {
     place.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE food place
router.delete('/place', function(req, res, next) {
 place.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
///////////////////////// FOOD AID REPORTS ////////////////////////////
// GET All food aids
router.get('/aid', function(req, res, next) {
aid.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One food aid
router.get('/aid/:id', function(req, res, next) {
 aid.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT food aid
router.put('/aid', function(req, res, next) {
 aid.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH food aid
router.patch('/aid', function(req, res, next) {
 aid.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE food aid
router.delete('/aid', function(req, res, next) {
   aid.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
