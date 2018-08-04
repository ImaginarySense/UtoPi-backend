var express = require('express');
var router = express.Router();
// NOTE: we need to validate entry data
var shelter = require('../db/shelterReport');
/////////////////////////  SHELTER LOCATION REPORTS/////////////////////

router.get('/', function(req, res, next) {
  shelter.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
router.put('/', function(req, res, next) {
  shelter.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
router.patch('/', function(req, res, next) {
  shelter.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
router.delete('/', function(req, res, next) {
   shelter.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
