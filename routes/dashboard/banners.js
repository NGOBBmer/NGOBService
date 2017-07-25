var express = require('express');
var router = express.Router();
var DATA_01 = require('../../mock/V00/dashboard/banners/banners_01.json');
var DATA_02 = require('../../mock/V00/dashboard/banners/banners_02.json');
var DATA_03 = require('../../mock/V00/dashboard/banners/banners_03.json');
var NO_DATA = require('../../mock/V00/dashboard/banners/banners_error.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:4000/dashboard/V00/banners
router.get('/V00/banners/', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if (tsec === '123456')
    return res.json(DATA_01);
  else if (tsec === '1234567')
    return res.json(DATA_02);
  else if (tsec === '12345678')
    return res.json(DATA_03);
  else
    return res.status(400).json(NO_DATA);
  
  next();
  });

module.exports = router;