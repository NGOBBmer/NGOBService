var express = require('express');
var moment = require('moment');
var fs = require("fs");
var path = require('path');
var router = express.Router();

var LISTA_ALL = require('../../mock/V00/operations/suggestedOperations/lista_all.json');
var LISTA_TT = require('../../mock/V00/operations/suggestedOperations/lista_tt.json');
var LISTA_TI = require('../../mock/V00/operations/suggestedOperations/lista_ti.json');
var LISTA_TP = require('../../mock/V00/operations/suggestedOperations/lista_tp.json');
var LISTA_PDS = require('../../mock/V00/operations/suggestedOperations/lista_pds.json');
var LISTA_TCP = require('../../mock/V00/operations/suggestedOperations/lista_tcp.json');
var LISTA_TCI = require('../../mock/V00/operations/suggestedOperations/lista_tci.json');
var ERROR = require('../../mock/V00/operations/suggestedOperations/error.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/operations/V00/suggestedOperations?suggestedOperationType=
router.get('/V00/suggestedOperations', function(req, res, next) {
  if (req.query.suggestedOperationType === 'all')
  	return res.json(LISTA_ALL);
  else if (req.query.suggestedOperationType === 'TT'){
	return res.json(LISTA_TT);
  }
  else if (req.query.suggestedOperationType === 'TI'){
  	return res.json(LISTA_TI);
  } 
  else if (req.query.suggestedOperationType === 'TP'){
  	return res.json(LISTA_TP);
  } else if (req.query.suggestedOperationType === 'PS'){
  	return res.json(LISTA_PDS);
  } else if (req.query.suggestedOperationType === 'TCP'){
  	return res.json(LISTA_TCP);
  } else if (req.query.suggestedOperationType === 'TCI'){
  	return res.json(LISTA_TCI);
  }
  return res.json(ERROR);
  next();
});

module.exports = router;