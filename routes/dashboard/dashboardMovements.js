var express = require('express');
var router = express.Router();
var dashMov_01 = require('../../mock/V00/dashboard/dashboardMovements/SIMovements_01.json');
var NO_MOVS = require('../../mock/V00/dashboard/dashboardMovements/SI_noMovs.json');
var ERROR = require('../../mock/V00/dashboard/dashboardMovements/error.json');

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

// handler for query http://localhost:5000/dashboard/V00/dashboardMovements?productType=SI&idContract=SIMXP0000009&period=1
router.get('/V00/dashboardMovements', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ((tsec == 'null' || tsec == '' || tsec == null || tsec == undefined) && req.query.productType === 'SI'&& req.query.idContract === 'SIMXP0000009' && req.query.period === '1'){
       return res.json(dashMov_01);
    } else if (req.query.productType === 'SI'&& req.query.idContract === 'SIMXP0000009' && req.query.period === '0'){
        return res.status(400).json(NO_MOVS);
    }else
         return ERROR;
  next();
});

module.exports = router;