var express = require('express');
var router = express.Router();
var LOGS = require('../../mock/V00/dashboard/logs/logs_01.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('tsec', '654321')
    next();
});

// handler for query http://localhost:4000/dashboard/V00/tsec
router.post('/V00/logs', function(req, res, next) {
	return res.json(LOGS);
  next();
});


module.exports = router;