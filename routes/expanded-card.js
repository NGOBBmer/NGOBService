var express = require('express');
var moment = require('moment');
var fs = require("fs");
var path = require('path');
var router = express.Router();
var CARD_DETAIL_NO_DATA = require('../mock/V00/cards/cardDetail/card_detail_no_data.json');
var CARD_DETAIL_SERVICE_ERROR = require('../mock/V00/cards/cardDetail/card_detail_service_error.json');
var urlJson = '../mock/V00/cards/cardDetail/';
var cutOffDate = '';
var paymentDate = '';
var flag = false;
var CARD_DETAIL_NEW = require('../mock/V00/cards/cardDetail/newTDC.json');

/* GET users listing. */
router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// handler for params http://localhost:3001/cards/V00/cards/TCMXP0000003
router.get('/V00/cards/:id', function(req, res, next) {
  if (req.params && req.params.id) {
    if (req.params && req.params.id) {
      if (req.params && req.params.id == 'TCMXP0000001') {
        flag = true;
        cutOffDate = moment().add(20,'days').format('YYYY-MM-DD');
        // paymentDate = moment().add(12,'days').format('YYYY-MM-DD');
        paymentDate = moment();
      }
      else if (req.params && req.params.id == 'TCMXP0000002') {
        flag = true;
        cutOffDate = moment().add(14,'days').format('YYYY-MM-DD');
        paymentDate = moment().subtract(4,'days').format('YYYY-MM-DD');
        // paymentDate = moment().add(6,'days').format('YYYY-MM-DD');
      }
      else if (req.params && req.params.id == 'TCMXP0000003') {
        flag = true;
        cutOffDate = moment().add(10,'days').format('YYYY-MM-DD');
        paymentDate = moment().add(5,'days').format('YYYY-MM-DD');
      }
      else if (req.params && req.params.id == 'TCMXP0000004') {
        flag = true;
        cutOffDate = moment().add(11,'days').format('YYYY-MM-DD');
        paymentDate = moment().add(2,'days').format('YYYY-MM-DD');
      }
      else if (req.params && req.params.id == 'TCMXP0000005') {
        flag = true;
        cutOffDate = moment().add(5,'days').format('YYYY-MM-DD');
        paymentDate = moment().subtract(5,'days').format('YYYY-MM-DD');
      }
       else if (req.params && req.params.id == 'TCMXP0000006') {
        flag = true;
        cutOffDate = moment().add(3,'days').format('YYYY-MM-DD');
        paymentDate = moment().subtract(4,'days').format('YYYY-MM-DD');
      }
    }
    if (flag){
      var currentDate = moment().format('YYYY-MM-DD');
      var filePath = path.join(__dirname, urlJson + req.params.id + ".json");
      var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      json.data.cutOffDate = cutOffDate;
      json.data.paymentMethod.endDate = paymentDate;
      json.data.currentDate=currentDate;
      flag = false;
      return res.json(json);
    }else{
      flag = false;
      return res.json(CARD_DETAIL_NO_DATA);
    }
    return res.json(CARD_DETAIL_SERVICE_ERROR);
  }
  next();
});

// handler for query http://localhost:3001/cards/V00/cards?id=TCMXP0000003
router.get('/V00/cards', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if (req.query && req.query.id) {
    if(tsec === '12345678'){
      if (req.query && req.query.id == 'TCMXP0000001')  {
        return res.json(CARD_DETAIL_NEW);
      }
    }
    if (req.query && req.query.id == 'TCMXP0000001')  {
      return res.json(TCMXP0000001);
    }
    if (req.query && req.query.id == 'TCMXP0000002')  {
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

module.exports = router;
