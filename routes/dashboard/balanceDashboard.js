var express = require('express');
var router = express.Router();
var balance_01 = require('../../mock/V00/dashboard/balanceDashboard/balanceDashboard.json');
var balance_02 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_01.json');
var balance_03 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_02.json');
var balance_04 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_03.json');
var balance_05 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_04.json');
var error = require('../../mock/V00/dashboard/balanceDashboard/error.json');

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

// handler for query http://localhost:5000/dashboard/V00/balanceDashboard?$filter=idContract==SIMXP0000001
router.get('/V00/balanceDashboard', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ((tsec != 'null' || tsec == undefined) && req.query.$filter === 'idContract==SIMXP0000001' )
     return res.json(balance_01);
    else  if ((tsec != 'null' || tsec == undefined) && req.query.$filter === 'idContract==SIMXP0000003' )
     return res.json(balance_02);
    else  if ((tsec != 'null' || tsec == undefined) && req.query.$filter === 'idContract==SIMXP0000005' )
     return res.json(balance_03);
    else  if ((tsec != 'null' || tsec == undefined) && req.query.$filter === 'idContract==INMXP0000001' )
     return res.json(balance_04);
    else  if ((tsec != 'null' || tsec == undefined) && req.query.$filter === 'idContract==INMXP0000002' )
     return res.json(balance_05);
    else  if ((tsec != 'null' || tsec == undefined) && req.query.$filter === 'idContract==INMXP0000003' )
     return res.json(balance_01);
 
    return res.status(400).json(error);
  next();
});

module.exports = router;