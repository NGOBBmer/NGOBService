var express = require('express');
var router = express.Router();

var OK = require('../../mock/V00/operations/deleteAgileOps/delete_01.json');
var ERROR = require('../../mock/V00/operations/deleteAgileOps/delete_err.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/operations/V00/deleteAgileOperations/PR0001?agileOperationType=RECURRING
router.get('/V00/deleteAgileOperations/:id', function(req, res, next) {
  if (req.query.agileOperationType === 'RECURRING')
  	return res.json(OK);
  else if (req.query.agileOperationType === 'FAST')
  	return res.json(OK);

  return res.status(409).json(ERROR);
  next();
});

module.exports = router;