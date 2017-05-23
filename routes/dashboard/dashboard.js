var express = require('express');
var router = express.Router();
var dashboard_01 = require('../../mock/V00/dashboard/dashboard/dashboard_01.json');
var dashboard_02 = require('../../mock/V00/dashboard/dashboard/dashboard_02.json');

// var dashboard_error = require('../../mock/V00/dashboard/dashboard/dashboard_error.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
});

// handler for query http://localhost:5000/dashboard/V00/dashboard
router.get('/V00/dashboard', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == null || tsec == '')
	   return res.json(dashboard_02);
    else
        return res.json(dashboard_01);
  next();
});
4152313000466834

module.exports = router;