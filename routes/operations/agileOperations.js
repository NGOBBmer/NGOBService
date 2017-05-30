var express = require('express');
var router = express.Router();

var LISTA_ALL = require('../../mock/V00/operations/agileOperations/lista_all.json');
var LISTA_PR = require('../../mock/V00/operations/agileOperations/lista_pr.json');
var LISTA_RP = require('../../mock/V00/operations/agileOperations/lista_rp.json');
var ERROR = require('../../mock/V00/operations/agileOperations/error.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/operations/V00/agileOperations?agileOperationType=
router.get('/V00/agileOperations', function(req, res, next) {
  if (req.query.agileOperationType === 'ALL')
  	return res.json(LISTA_ALL);
  else if (req.query.agileOperationType === 'RECURRING')
  	return res.json(LISTA_PR);
  else if (req.query.agileOperationType === 'FAST')
  	return res.json(LISTA_RP);

  return res.json(ERROR);
  next();
});

module.exports = router;