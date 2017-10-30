var express = require('express');
var router = express.Router();
var QrDataOcra = require('../../mock/V00/transfers/QrData/QrOcra.json');
var QrDataSoftokenOpt = require('../../mock/V00/transfers/QrData/QrSoftokenOptico.json');
var QrDataCronto = require('../../mock/V00/transfers/QrData/QrCronto.json');
var ERROR = require('../../mock/V00/transfers/QrData/error.json');


/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:4000/transfers/V00/QrData?account=002180700256&beneficiaryName=BANAMEX

router.get('/V00/QrData', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if(tsec == '12345678')
    return res.json(QrDataOcra);
  else if(tsec == '10293847')
    return res.json(QrDataSoftokenOpt);
  else if(tsec == '123456789')
    return res.json(QrDataCronto);

  return res.json(ERROR);
  next();
});


module.exports = router;