var express = require('express');
var router = express.Router();
var dashboard_01 = require('../../mock/V00/dashboard/dashboard/dashboard_lucy.json');
var dashboard_02 = require('../../mock/V00/dashboard/dashboard/dashboard_02.json');
var dashboard_03 = require('../../mock/V00/dashboard/dashboard/dashboard_03.json');
var dashboard_02_SI = require('../../mock/V00/dashboard/dashboard/dashboard_02.SI.json');
var dashboard_03_SI = require('../../mock/V00/dashboard/dashboard/dashboard_03.SI.json');
var dashboard_04_SI = require('../../mock/V00/dashboard/dashboard/dashboard_04.SI.json');
var dashboard_03_IN = require('../../mock/V00/dashboard/dashboard/dashboard_03.IN.json');
var dashboard_04_IN = require('../../mock/V00/dashboard/dashboard/dashboard_04.IN.json');
var dashboard_05_IN = require('../../mock/V00/dashboard/dashboard/dashboard_05.IN.json');
var dashboard_2cards= require('../../mock/V00/dashboard/dashboard/dashboard_2cards.json');
var dashboard_all = require('../../mock/V00/dashboard/dashboard/dashboard_01_all.json');
var dashboard_SI_IN = require('../../mock/V00/dashboard/dashboard/dashboard_SI_IN.json');
var dashboard_06_SI = require('../../mock/V00/dashboard/dashboard/dashboard_06_SI.json');
var dashboard_06_INALL = require('../../mock/V00/dashboard/dashboard/dashboard_06_INALL.json');
var dashboard_06_INMXP = require('../../mock/V00/dashboard/dashboard/dashboard_06_INMXP.json');
var dashboard_06_INUSD = require('../../mock/V00/dashboard/dashboard/dashboard_06_INUSD.json');
var dashboard_error = require('../../mock/V00/dashboard/dashboard/dashboard_error.json');
var dashboard_error_02 = require('../../mock/V00/dashboard/dashboard/error_01.json');
var dashboard_monoprod= require('../../mock/V00/dashboard/dashboard/dashboardMonoproducto.json');

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
    var filters = getFilters(req.query.$filter);

    var tsec = req.headers['tsec'];
    if (tsec === '9412' && filters[0] === 'productType==TT'){
        return res.json(dashboard_monoprod);
    }else if (tsec === '456789012' && filters[0] === 'productType==TT'){
        return res.json(dashboard_01);
    }else if(tsec === '2345678' && filters[0] === 'productType==TT'){
        return res.json(dashboard_SI_IN);
    }else if (tsec === '123456789' && filters[0] === 'productType==TT'){
        return res.json(dashboard_all);
    }else if ((tsec === '012345678') && filters[0] === 'productType==TT'){
        return res.json(dashboard_2cards);
    }else if (tsec == '419032' && filters[0] === 'productType==TT' ){
	   return res.json(dashboard_02);
    }else if (tsec === '456789012' && filters[0] === 'productType==SI' && filters[1]==='idContract==SIMXP0000001'){
        return res.json(dashboard_02_SI);
    }else if (filters[0] === 'productType==SI' && filters[1]==='idContract==SIMXP0000001'){
        return res.json(dashboard_02_SI);
    }else if ((tsec != undefined || tsec == '') && filters[0] === 'productType==SI'){
        if (filters[1]==='idContract==SIMXP0000001'){
            return res.json(dashboard_03_SI);
        }else if (filters[1]==='idContract==SIMXP0000002'){
            return res.json(dashboard_02_SI);
        }else if (filters[1]==='idContract==SIMXP0000003' || filters[1]==='idContract==SIMXP0000005'){
            return res.json(dashboard_04_SI);
        }
    }else if (tsec == '12345678' && filters[1] === 'productType==IN'){
        if (filters[0] === 'idContract==INMXP0000001' && filters[2]==='currency==MXP'){
            return res.json(dashboard_03_IN);
        }
    }else if (tsec === '123456' && filters[0] === 'productType==TT'){
        return res.json(dashboard_03);
    }else if (tsec === '1234567' && filters[0] === 'productType==TT'){
        return res.json(dashboard_04);
    }else if (tsec === '1234567890' && filters[0] === 'productType==TT'){
        return res.status(400).json(dashboard_error);
    }else if ((tsec != undefined || tsec != '') && filters[0] === 'productType==TT'){
        return res.json(dashboard_01);
    }else if(tsec == '12345678' && filters[0] === 'productType==IN'){
        if (filters[1]==='idContract==INMXP0000001' && filters[2]==='currency==MXP'){
            return res.json(dashboard_03_IN);
        }else if (filters[1]==='idContract==INMXP0000002' && filters[2]==='currency==MXP'){
            return res.status(409).json(dashboard_error_02);
        }else if (filters[1]==='idContract==INMXP0000003' && filters[2]==='currency==MXP'){
            return res.json(dashboard_04_IN);
        }else if (filters[1]==='idContract==CAUSD0000001' && filters[2]==='currency==USD'){
            return res.json(dashboard_05_IN);
        }
    }else if (filters[0] === 'productType==SI' && filters[1] === '' && filters[2] === ''){
        return res.json(dashboard_06_SI);
    }else if (filters[0] === 'productType==IN'){
        if (filters[1] === '' && filters[2] === ''){
            return res.json(dashboard_06_INALL);
        }else if (filters[1] === '' && filters[2] === 'currency==MXP'){
            return res.json(dashboard_06_INMXP);       
        }else if (filters[1] === '' && filters[2] === 'currency==USD'){
            return res.json(dashboard_06_INUSD);
        }     
    }
    return res.status(400).json(dashboard_error_02);
  next();
});

function getFilters(filter){
    var sFilter = filter.split(",");
    if (sFilter.length == 1){
        sFilter[1] = '';
        sFilter[2] = '';
    }else if (sFilter.length == 2){
        sFilter[2] = '';
    }
    var filters = ['','',''];
    for (var i = 0; i < 3; i++){
        if (sFilter[i].includes('productType')){
            console.log(sFilter[i]);
            filters[0] = sFilter[i];
        }
        if (sFilter[i].includes('idContract')){
            filters[1] = sFilter[i];
        }
        if (sFilter[i].includes('currency')){
            filters[2] = sFilter[i];
        }
    }

    return filters;
}
module.exports = router;