var express = require('express');
var router = express.Router();
var refund01 = require('../../mock/V00/clarifications/createRefund/refund01.json');
var refund02 = require('../../mock/V00/clarifications/createRefund/refund02.json');
var refund03 = require('../../mock/V00/clarifications/createRefund/refund03.json');
var refund04 = require('../../mock/V00/clarifications/createRefund/refund04.json');
var refund05 = require('../../mock/V00/clarifications/createRefund/refund05.json');
var refunderr = require('../../mock/V00/clarifications/createRefund/refunderr.json');
var validateRef = require('../../mock/V00/clarifications/validateRefund/validateOK.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.get('/', function(req, res, next) {
  res.render('clarifications', { title: '' });
});

// handler for query http://localhost:4000/clarifications/v0/createRefund/TCMXP000001
router.post('/v0/createRefund1/:cardid', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var sId = req.body.movementId.substring(0,4);

    if (tsec === '111OK111'){
      return res.json(refund01);
    }else if (tsec === '222NOK222'){
      return res.status(400).json(refund02);
    }else if (tsec === '333NOK333'){
      return res.status(400).json(refund03);
    }else if (tsec === '444NOK444'){
      return res.status(400).json(refund04);
    }else if (tsec === '555NOK555'){
      return res.status(400).json(refund05);
    }else{
      return res.status(400).json(refunderr);
    }
     
  
  next();
});

router.post('/v0/createRefund/', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var sId = req.body.movementId.substring(0,4);

    if (tsec === 'null'){
      return res.json(refund01);
    }else if (tsec.includes("222NOK222")){
      return res.status(409).json(refund02);
    }else if (tsec.includes("333NOK333")){
      return res.status(409).json(refund03);
    }else if (tsec.includes("444NOK444")){
      return res.status(409).json(refund04);
    }else if (tsec.includes("555NOK555")){
      return res.status(409).json(refund05);
    }else{
      return res.status(409).json(refunderr);
    }
     
  
  next();
});

router.post('/v0/validateRefund/', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var sId = req.body.movementId.substring(0,4);

    if (tsec === 'null'){
      return res.json(validateRef);
    }else if (tsec.includes("222NOK222")){
      return res.status(409).json(refund02);
    }else if (tsec.includes("333NOK333")){
      return res.status(409).json(refund03);
    }else if (tsec.includes("444NOK444")){
      return res.status(409).json(refund04);
    }else if (tsec.includes("555NOK555")){
      return res.status(409).json(refund05);
    }else{
      return res.status(409).json(refunderr);
    }
     
  
  next();
});


module.exports = router;