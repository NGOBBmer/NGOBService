var express = require('express');
var router = express.Router();
var dashMov_01 = require('../../mock/V00/dashboard/dashboardMovements/SIMovements_01.json');
var dashMov_01_02 = require('../../mock/V00/dashboard/dashboardMovements/SIMovements_01_02.json');
var dashMov_01_03 = require('../../mock/V00/dashboard/dashboardMovements/SIMovements_01_03.json');
var dashMov_02_01 = require('../../mock/V00/dashboard/dashboardMovements/SIMovements_02_01.json');
var dashMov_01_02_01 = require('../../mock/V00/dashboard/dashboardMovements/SImovements_01_02_01.json');
var dashMov_02 = require('../../mock/V00/dashboard/dashboardMovements/SIMovements_02.json');
var dashMov_03 = require('../../mock/V00/dashboard/dashboardMovements/INmovements_01.json');
var dashMov_04 = require('../../mock/V00/dashboard/dashboardMovements/INmovements_01_02.json');
var dashMov_05 = require('../../mock/V00/dashboard/dashboardMovements/INmovements_02_01.json');
var dashMov_06 = require('../../mock/V00/dashboard/dashboardMovements/INmovements_02_02.json');
var NO_MOVS = require('../../mock/V00/dashboard/dashboardMovements/SI_noMovs.json');
var ERROR = require('../../mock/V00/dashboard/dashboardMovements/error.json');
var dashMovUSD = require('../../mock/V00/dashboard/dashboardMovements/INmovementsUS.json');

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

// handler for query http://localhost:4000/dashboard/V00/dashboardMovements?$filter=productType==SI,idContract==SIMXP0000001,period==1
router.get('/V00/dashboardMovements', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ( tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000003,period==0'){
       return res.json(dashMov_01_02);
    }else if ((tsec == '' || tsec != 'null' || tsec === '2345678') && req.query.$filter === 'productType==SI,idContract==SIMXP0000001,period==0'){
       return res.json(dashMov_02_01);
    } else if ((tsec == '' || tsec != 'null' || tsec === '2345678') && req.query.$filter === 'productType==SI,idContract==SIMXP0000001,period==1'){
       return res.json(dashMov_01_02_01);
    } else if ((tsec == '' || tsec != 'null' || tsec === '2345678') && req.query.$filter === 'productType==SI,idContract==SIMXP0000001,period==2'){
       return res.json(dashMov_01_03);
    }else if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000005,period==0'){
       return res.json(dashMov_02_01);
    } else if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000005,period==1'){
       return res.json(dashMov_02_01);
    } else if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000005,period==2'){
       return res.json(NO_MOVS);
    } else if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000003,period==1'){
       return res.json(dashMov_01_03);
    } else if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000003,period==2'){
       return res.json(NO_MOVS);
    } else if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000004,period==1'){
       return res.json(dashMov_01);
    }else if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000004,period==0'){
        return res.status(400).json(NO_MOVS);
    }else  if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000004,period==0'){
       return res.json(dashMov_02);
    }else  if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000004,period==1'){
       return res.json(NO_MOVS);
    }else  if (tsec == undefined && req.query.$filter === 'productType==SI,idContract==SIMXP0000004,period==2'){
       return res.json(dashMov_02);
    }else  if ((tsec == '' || tsec == 'null') && req.query.$filter === 'productType==IN,idContract==INMXP0000001,period==0'){
       return res.json(dashMov_03);
    }else  if ((tsec == '' || tsec == 'null') && req.query.$filter === 'productType==IN,idContract==INMXP0000001,period==1'){
       return res.json(dashMov_04);
    }else  if ((tsec == '' || tsec == 'null') && req.query.$filter === 'productType==IN,idContract==INMXP0000001,period==2'){
       return res.json(dashMov_04);
    }else  if (tsec == undefined && req.query.$filter === 'productType==IN,idContract==INMXP0000002,period==0'){
       return res.json(dashMov_04);
    }else  if (tsec == undefined && req.query.$filter === 'productType==IN,idContract==INMXP0000002,period==1'){
       return res.json(dashMov_05);
    }else  if (tsec == undefined && req.query.$filter === 'productType==IN,idContract==INMXP0000002,period==2'){
       return res.json(NO_MOVS);
    }else  if (tsec == undefined && req.query.$filter === 'productType==IN,idContract==INMXP0000003,period==0'){
       return res.json(NO_MOVS);
    }else  if (tsec == undefined && req.query.$filter === 'productType==IN,idContract==INMXP0000003,period==1'){
       return res.json(NO_MOVS);
    }else  if (tsec == undefined && req.query.$filter === 'productType==IN,idContract==INMXP0000003,period==2'){
       return res.json(dashMov_06);
    }else  if (tsec == undefined && req.query.$filter === 'productType==IN,idContract==CAUSD0000001,period==0'){
       return res.json(dashMovUSD);
    }  
    else{
        return res.status(400).json(ERROR);
    }
  next();
});

module.exports = router;