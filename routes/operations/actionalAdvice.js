var express = require('express');
var moment = require('moment');
var fs = require("fs");
var path = require('path');
var router = express.Router();

var ADVISE = require('../../mock/V00/operations/actionalAdvice/actionalAdvice.json');
var ERROR = require('../../mock/V00/operations/actionalAdvice/error.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/operations/V00/actionalAdvice
router.get('/V00/actionalAdvice', function(req, res, next) {

  return res.json(ADVISE);
  return res.json(ERROR);
  next();
});

module.exports = router;