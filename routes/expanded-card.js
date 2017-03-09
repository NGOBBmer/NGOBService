var express = require('express');
var router = express.Router();

var TCMXP0000001 = require('../mock/V00/cards/cardDetail/TCMXP0000001.json');
var TCMXP0000002 = require('../mock/V00/cards/cardDetail/TCMXP0000002.json');
var TCMXP0000003 = require('../mock/V00/cards/cardDetail/TCMXP0000003.json');
var TCMXP0000004 = require('../mock/V00/cards/cardDetail/TCMXP0000004.json');
var TCMXP0000005 = require('../mock/V00/cards/cardDetail/TCMXP0000005.json');
var TCMXP0000006 = require('../mock/V00/cards/cardDetail/TCMXP0000006.json');
var CARD_DETAIL_NO_DATA = require('../mock/V00/cards/cardDetail/card_detail_no_data.json');
var CARD_DETAIL_SERVICE_ERROR = require('../mock/V00/cards/cardDetail/card_detail_service_error.json');


/* GET users listing. */
router.use(function (req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// handler for query http://localhost:3001/cards/V00/cards?id=TCMXP0000003
router.get('/V00/cards', function(req, res, next) {
  if(req.query && req.query.id){
    if (req.query && req.query.id== 'TCMXP0000001')  {
      return res.json(TCMXP0000001);
    }
    if (req.query && req.query.id== 'TCMXP0000002')  {
      return res.json(TCMXP0000002);
    }
    if (req.query && req.query.id == 'TCMXP0000003') {
      return res.json(TCMXP0000003);
    }
    if (req.query && req.query.id == 'TCMXP0000004') {
      return res.json(TCMXP0000004);
    }
    if (req.query && req.query.id == 'TCMXP0000005') {
      return res.json(TCMXP0000005);
    }
    if (req.query && req.query.id == 'TCMXP0000006') {
      return res.json(TCMXP0000006);
    }
    if (req.query && req.query.id == 'SERVICE_ERROR') {
      return res.json(CARD_DETAIL_SERVICE_ERROR);
    }
    if (req.query && req.query.id == 'NO_DATA') {
      return res.json(CARD_DETAIL_NO_DATA);
    }
    return res.json(CARD_DETAIL_NO_DATA);
  }

    next();
  });

// handler for params http://localhost:3001/cards/V00/cards/TCMXP0000003
router.get('/V00/cards/:id', function(req, res, next) {
if(req.params && req.params.id ){

  if (req.params && req.params.id == 'TCMXP0000001') {
    return res.json(TCMXP0000001);
  }
  if (req.params && req.params.id == 'TCMXP0000002')  {
    return res.json(TCMXP0000002);
  }
  if (req.params && req.params.id == 'TCMXP0000003'){
    return res.json(TCMXP0000003);
  }
  if (req.params && req.params.id == 'TCMXP0000004'){
    return res.json(TCMXP0000004);
  }
  if (req.params && req.params.id == 'TCMXP0000005'){
    return res.json(TCMXP0000005);
  }
  if (req.params && req.params.id == 'TCMXP0000006') {
    return res.json(TCMXP0000006);
  }
  if (req.params && req.params.id == 'SERVICE_ERROR'){
    return res.status(500).json(CARD_DETAIL_SERVICE_ERROR);
  }
  if (req.params && req.params.id == 'NO_DATA'){
    return res.status(400).json(CARD_DETAIL_NO_DATA);
  }
  return res.status(500).json(CARD_DETAIL_NO_DATA);
}
  
  next();
});

module.exports = router;
