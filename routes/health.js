var express = require('express');
var router = express.Router();
// NOTE: we need to validate entry data
var place = require('../db/hospitalServiceReport');
var doctor = require('../db/doctorReport');
var pharmacy = require('../db/pharmacyReport');
var dyalisis = require('../db/dyalisisCenterReport');
///////////////////////// HOSPITAL REPORTS ////////////////////////////
// GET All hospital services
router.get('/hospital', function(req, res, next) {
   hospital.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One hospital service
router.get('/hospital/:id', function(req, res, next) {
 hospital.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT  hospital service
router.put('/hospital', function(req, res, next) {
   hospital.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH  hospital service
router.patch('/hospital', function(req, res, next) {
   hospital.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE  hospital service
router.delete('/hospital', function(req, res, next) {
  hospital.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
///////////////////////// DOCTOR REPORTS ///////////////////////////////
// GET All doctor reports
router.get('/doctor', function(req, res, next) {
     doctor.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One doctor report
router.get('/doctor/:id', function(req, res, next) {
 doctor.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT doctor report
router.put('/doctor', function(req, res, next) {
  place.doctor(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH doctor report
router.patch('/doctor', function(req, res, next) {
    doctor.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE doctor report
router.delete('/doctor', function(req, res, next) {
   doctor.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
///////////////////////// PHARMACIES REPORTS ///////////////////////////
// GET All pharmacy reports
router.get('/pharmacy', function(req, res, next) {
    pharmacy.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One pharmacy report
router.get('/pharmacy/:id', function(req, res, next) {
 pharmacy.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT pharmacy report
router.put('/pharmacy', function(req, res, next) {
 pharmacy.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH pharmacy report
router.patch('/pharmacy', function(req, res, next) {
  pharmacy.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE pharmacy report
router.delete('/pharmacy', function(req, res, next) {
  pharmacy.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
///////////////////////// DYALISIS CENTER REPORTS //////////////////////
// GET All dyalisis center reports
router.get('/dyalisis', function(req, res, next) {
    dyalisis.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One dyalisis center report
router.get('/dyalisis/:id', function(req, res, next) {
 dyalisis.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT dyalisis center report
router.put('/dyalisis', function(req, res, next) {
  dyalisis.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH dyalisis center report
router.patch('/dyalisis', function(req, res, next) {
    dyalisis.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE dyalisis center report
router.delete('/dyalisis', function(req, res, next) {
  dyalisis.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
