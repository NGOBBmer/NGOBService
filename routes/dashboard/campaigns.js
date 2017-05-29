var express = require('express');
var router = express.Router();
var CAMPANIA01 = require('../../mock/V00/dashboard/campaigns/campaigns_01.json');
var CAMPANIA02 = require('../../mock/V00/dashboard/campaigns/campaigns_02.json');
var CAMPANIA_error = require('../../mock/V00/dashboard/campaigns/campaigns_error.json');
var CAMPANIA_error01 = require('../../mock/V00/dashboard/campaigns/campaigns_error01.json');

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

// handler for query http://localhost:4000/dashboard/V00/campaigns
router.get('/V00/campaigns', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec === '123456')
		return res.json(CAMPANIA01);
	else if (tsec === '654321')
        return res.json(CAMPANIA02);
    else if (tsec === '123654')
        return res.status(400).json(CAMPANIA_error01);

	return res.status(500).json(CAMPANIA_error);
  next();
});


module.exports = router;