var express = require('express');
var router = express.Router();
var CAMPANIA = require('../../mock/V00/dashboard/campaigns/campaigns_01.json');

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
	if(req.query){
		return res.json(CAMPANIA);
	}
	return res.json(CAMPANIA);
  next();
});


module.exports = router;