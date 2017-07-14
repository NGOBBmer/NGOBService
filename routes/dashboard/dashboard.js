var express = require('express');
var router = express.Router();
var dashboard_01 = require('../../mock/V00/dashboard/dashboard/dashboard_01.json');
var dashboard_02 = require('../../mock/V00/dashboard/dashboard/dashboard_02.json');
var dashboard_03 = require('../../mock/V00/dashboard/dashboard/dashboard_03.json');
var dashboard_02_SI = require('../../mock/V00/dashboard/dashboard/dashboard_02.SI.json');
var dashboard_03_IN = require('../../mock/V00/dashboard/dashboard/dashboard_03.IN.json');
var dashboard_04_IN = require('../../mock/V00/dashboard/dashboard/dashboard_04.IN.json');
var dashboard_05_IN = require('../../mock/V00/dashboard/dashboard/dashboard_05.IN.json');
var dashboard_error = require('../../mock/V00/dashboard/dashboard/dashboard_error.json');

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

// handler for query http://localhost:5000/dashboard/V00/dashboard?$filter=productType==TT
router.get('/V00/dashboard', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ((tsec == 'null' || tsec == '') && req.query.$filter === 'productType==TT' )
	   return res.json(dashboard_02);
    else if (req.query.$filter === 'productType==SI,idContract==SIMXP0000001')
        return res.json(dashboard_02_SI);
    else if ((tsec == 'null' || tsec != undefined || tsec == '') && req.query.$filter === 'productType==SI,idContract==SIMXP0000001')
        return res.json(dashboard_02_SI);
    else if ((tsec == 'null' || tsec == undefined || tsec == '') && req.query.$filter === 'productType==IN,idContract==INMXP0000001,currency==MXP')
        return res.json(dashboard_03_IN);
    else if (tsec === '123456' && req.query.$filter === 'productType==TT')
        return res.json(dashboard_03);
    else if (tsec === '1234567' && req.query.$filter === 'productType==TT')
        return res.json(dashboard_04);
    else if (tsec === '1234567890' && req.query.$filter === 'productType==TT')
        return res.status(400).json(dashboard_error);
    else if ((tsec != 'null' || tsec != undefined || tsec != '') && req.query.$filter === 'productType==TT')
        return res.json(dashboard_01);
    else if ((tsec == 'null' || tsec == undefined || tsec == '') && req.query.$filter === 'productType==IN,idContract==INMXP0000002,currency==MXP')
        return res.json(dashboard_04_IN);
    else if ((tsec == 'null' || tsec == undefined || tsec == '') && req.query.$filter === 'productType==IN,idContract==CAUSD0000001,currency==USD')
        return res.json(dashboard_05_IN);


    return res.status(400).json(dashboard_error);
  next();
});

module.exports = router;