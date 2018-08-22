var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
//Dashboard 
var dashboard_01 = require('../../mock/V00/dashboard/dashboard/dashboard_01.json');
var dashboard_ced = require('../../mock/V00/dashboard/dashboard/dashboard_ced.json');
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
var dashboard_especial = require('../../mock/V00/dashboard/dashboard/dashboard_especial.json');
var dashboard_all_nvo = require('../../mock/V00/dashboard/dashboard/dashboard_NVO_all.json');

//balanceDashboard
var balance_01 = require('../../mock/V00/dashboard/balanceDashboard/balanceDashboard.json');
var balance_02 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_01.json');
var balance_03 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_02.json');
var balance_04 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_03.json');
var balance_05 = require('../../mock/V00/dashboard/balanceDashboard/balanceD_04.json');
var error = require('../../mock/V00/dashboard/balanceDashboard/error.json');

//campaigns
var CAMPANIA01 = require('../../mock/V00/dashboard/campaigns/campaigns_01.json');
var CAMPANIA02 = require('../../mock/V00/dashboard/campaigns/campaigns_02.json');
var CAMPANIA03 = require('../../mock/V00/dashboard/campaigns/campaigns_03.json');
var CAMPANIA04 = require('../../mock/V00/dashboard/campaigns/campaigns_04.json');
var CAMPANIA_error = require('../../mock/V00/dashboard/campaigns/campaigns_error.json');
var CAMPANIA_error01 = require('../../mock/V00/dashboard/campaigns/campaigns_error01.json');


//Banners
var DATA_01 = require('../../mock/V00/dashboard/banners/banners_01.json');
var DATA_02 = require('../../mock/V00/dashboard/banners/banners_02.json');
var DATA_03 = require('../../mock/V00/dashboard/banners/banners_03.json');
var NO_DATA = require('../../mock/V00/dashboard/banners/banners_error.json');

//DashboardMovements
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
var ERROR_MOVS = require('../../mock/V00/dashboard/dashboardMovements/error.json');
var dashMovUSD = require('../../mock/V00/dashboard/dashboardMovements/INmovementsUS.json');

//DropDownMenu
var DropDown_01 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenu.json');
var DropDown_02 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuPesos.json');
var DropDown_03 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuTodo.json');
var DropDown_04 = require('../../mock/V00/dashboard/dropDownMenu/dropDownTarjetaCredito.json');
var DropDown_05 = require('../../mock/V00/dashboard/dropDownMenu/dropDownPesosFondosInversion.json');
var DropDown_06 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenu_01.json');
var DropDown_07 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuFondosInv_01.json');
var DropDown_ALL = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenu_01_all.json');
var ERRORDropDown = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuError.json');

//headlinesAccounts
var headlinesAccounts_01 = require('../../mock/V00/dashboard/headlinesAccounts/headlinesAccounts.json');
var headlinesAccounts_02 = require('../../mock/V00/dashboard/headlinesAccounts/headlinesAccounts_01.json');
var headlinesAccounts_03 = require('../../mock/V00/dashboard/headlinesAccounts/headlinesAccountsOneAc.json');
var headlinesAccounts_ERROR = require('../../mock/V00/dashboard/headlinesAccounts/headlinesAccountsError.json');

//logs
var LOGS = require('../../mock/V00/dashboard/logs/logs_01.json');
var urlTxt = '../../mock/V00/dashboard/logs/writeLog.txt';

//mobileTransfers
var mobileTransfers_01 = require('../../mock/V00/dashboard/mobileTransfers/mobileTransfers.json');
var mobileTransfers_ERROR = require('../../mock/V00/dashboard/mobileTransfers/mobileTransfersError.json');
var mobileTransfers_ERROR1 = require('../../mock/V00/dashboard/mobileTransfers/Error.json');

//modifyAlias
var alias_ok = require('../../mock/V00/dashboard/modifyAlias/alias_ok.json');
var alias_nok = require('../../mock/V00/dashboard/modifyAlias/alias_nok.json');
var dashboard_roor = '../../mock/V00/dashboard/dashboard/dashboard_01.json';

//userInfo
var userInfo_user01 = require('../../mock/V00/dashboard/userInfo/userInfo_user01.json');
var userInfo_user02 = require('../../mock/V00/dashboard/userInfo/userInfo_user02.json');
var userInfo_user03 = require('../../mock/V00/dashboard/userInfo/userInfo_user03.json');
var userInfoS1  = require('../../mock/V00/dashboard/userInfo/userInfoS1.json');
var userInfoS2  = require('../../mock/V00/dashboard/userInfo/userInfoS2.json');
var userInfoT1  = require('../../mock/V00/dashboard/userInfo/userInfoT1.json');
var userInfoT3  = require('../../mock/V00/dashboard/userInfo/userInfoT3.json');
var userInfoT6  = require('../../mock/V00/dashboard/userInfo/userInfoT6.json');
var userInfoT7  = require('../../mock/V00/dashboard/userInfo/userInfoT7.json');
var userInfo_error = require('../../mock/V00/dashboard/userInfo/userInfo_error.json');

//validateOtp
var OK = require('../../mock/V00/dashboard/validateOtp/otp_01.json');
var NOK = require('../../mock/V00/dashboard/validateOtp/otp_error.json');

// mytest
var OK = require('../../mock/V00/dashboard/mytest/test_ok.json');
var NOK = require('../../mock/V00/dashboard/mytest/test_no-ok.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec,otp');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.get('/', function(req, res, next) {
  res.render('pg', { title: '' });
});

// handler for query http://localhost:5000/dashboard/V00/dashboard?$filter=productType==TT
router.get('/V00/dashboard', function(req, res, next) {
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
    var filters = getFilters(req.query.$filter);

    var tsec = req.headers['tsec'];
    if(( tsec == 'null' || tsec == 'undefined' || tsec == '') && filters[0] === 'productType==TT'){
        return res.json(dashboard_01);
    }else if (tsec.includes("usdPagare")){
        if (filters[1]==='idContract==CAUSD0000001' && filters[2]==='currency==USD'){
           return res.json(dashboard_05_IN);
        }else{
            return res.json(dashboard_06_INALL);
        }
    }else if((tsec == '' || tsec == undefined || tsec == null) && filters[0] === 'productType==SI'){
        if(filters[1]==='idContract==SIMXP0000001'){
            return res.json(dashboard_02_SI);
        }else if (filters[1]==='idContract==SIMXP0000002'){
            return res.json(dashboard_02_SI);
        }else if (filters[1]==='idContract==SIMXP0000003' || filters[1]==='idContract==SIMXP0000005'){
            return res.json(dashboard_04_SI);
        }else if (filters[1] === '' && filters[2] === ''){
            return res.json(dashboard_06_SI);
        }  
    }else if((tsec == '' || tsec == undefined || tsec == null) && filters[0] === 'productType==IN'){
        if (filters[0] === 'idContract==INMXP0000001' && filters[2]==='currency==MXP'){
            return res.json(dashboard_03_IN);
        }else if (filters[1]==='idContract==INMXP0000002' && filters[2]==='currency==MXP'){
            return res.status(409).json(dashboard_error_02);
        }else if (filters[1]==='idContract==INMXP0000003' && filters[2]==='currency==MXP'){
            return res.json(dashboard_04_IN);
        }else if (filters[1]==='idContract==CAUSD0000001' && filters[2]==='currency==USD'){
            return res.json(dashboard_05_IN);
        }
    }else if(tsec.includes("dashboard_nvo")){
        return res.json(dashboard_all_nvo);
    }else if(tsec.includes("dashboard_2cards")){
        return res.json(dashboard_2cards);
    }else if (tsec.includes("dashboardEspecial") && filters[0] === 'productType==TT'){
        return res.json(dashboard_especial);
    }else if (tsec.includes("dashboard_ced") && filters[0] === 'productType==TT'){
        return res.json(dashboard_ced);
    }else if (tsec.includes("monoproducto") && filters[0] === 'productType==TT'){
        return res.json(dashboard_monoprod);
    }else if (tsec.includes("patrimonial") && filters[0] === 'productType==TT'){
        return res.json(dashboard_01);
    }else if (tsec.includes("prepaidCard") && filters[0] === 'productType==TT'){
        return res.json(dashboard_01);
    }else if(tsec.includes("investmentsFund") && filters[0] === 'productType==TT'){
        return res.json(dashboard_SI_IN);
    }else if (tsec.includes("checkAccountDolares") && filters[0] === 'productType==TT'){
        return res.json(dashboard_all);
    }else if (tsec.includes('savingAccount') && filters[0] === 'productType==TT' ){
	   return res.json(dashboard_02);
    }else if (tsec.includes('savingPrepaid') && filters[0] === 'productType==TT'){
        return res.json(dashboard_03);
    }else if (tsec.includes('savingPrepaidCredit') && filters[0] === 'productType==TT'){
        return res.json(dashboard_04);
    }else if (tsec.includes('dashboardError') && filters[0] === 'productType==TT'){
        return res.status(406).json(dashboard_error);
    }else if(filters[0] === 'productType==TT'){
        return res.json(dashboard_01);
    }
    if(tsec.includes("investmentsFund")){
        if (filters[0] === 'productType==SI'){
            if(filters[1]==='idContract==SIMXP0000001'){
                return res.json(dashboard_02_SI);
            }else if (filters[1]==='idContract==SIMXP0000002'){
                return res.json(dashboard_02_SI);
            }else if (filters[1]==='idContract==SIMXP0000003'){
                return res.json(dashboard_04_SI);            
            }else if (filters[0] === 'productType==SI' && filters[1] === '' && filters[2] === ''){
                return res.json(dashboard_06_SI);
            }      
        }
    }else if (tsec.includes('pagareBancomer')){
        if( filters[1] === 'productType==IN'){
            if (filters[1] === '' && filters[2] === ''){
                return res.json(dashboard_06_INALL);
            }else if (filters[1] === '' && filters[2] === 'currency==MXP'){
                return res.json(dashboard_06_INMXP);       
            }else if (filters[1] === '' && filters[2] === 'currency==USD'){
                return res.json(dashboard_06_INUSD);
            }else if (filters[0] === 'idContract==INMXP0000001' && filters[2]==='currency==MXP'){
                return res.json(dashboard_03_IN);
            }else if (filters[1]==='idContract==CAUSD0000001' && filters[2]==='currency==USD'){
                return res.json(dashboard_05_IN);
            }
        }
    }else if(tsec.includes("dashboardError") && (filters[0] === 'productType==SI' || filters[0] === 'productType==IN')){
        return res.status(400).json(dashboard_error_02);
    }else{
        if( filters[1] === 'productType==IN'){
            return res.json(dashboard_03_IN);
        }else{
            return res.json(dashboard_02_SI);
        }
    }    
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
 
    return res.status(406).json(error);
  next();
});


// handler for query http://localhost:4000/dashboard/V00/campaigns
router.get('/V00/campaigns', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == 'null' || tsec == undefined )
        return res.json(CAMPANIA01);
    else if (tsec.includes("CAMPANIA02"))
        return res.json(CAMPANIA02);
    else if (tsec.includes("CAMPANIA03"))
        return res.json(CAMPANIA03);
    else if (tsec.includes("CAMPANIA04"))
        return res.json(CAMPANIA04);
    else if (tsec.includes("CAMPANIA_ERROR"))
        return res.status(406).json(CAMPANIA_error01);
    else
        return res.json(CAMPANIA01);
    return res.status(406).json(CAMPANIA_error);
  next();
});

// handler for query http://localhost:4000/dashboard/V00/banners
router.get('/V00/banners/', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if (tsec == 'null' || tsec == undefined ){
    return res.json(DATA_01);
  }else if (tsec.includes("Banners01"))
    return res.json(DATA_01);
  else if (tsec.includes("banner_02"))
    return res.json(DATA_02);
  else if (tsec.includes("banner03"))
    return res.json(DATA_03);
  else if (tsec.includes("banners_error"))
    return res.status(406).json(NO_DATA);
  else
    return res.json(DATA_03);
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
    }else  if ((tsec == '' || tsec == 'null' || tsec === '2345678') && req.query.$filter === 'productType==IN,idContract==INMXP0000001,period==0'){
       return res.json(dashMov_03);
    }else  if ((tsec == '' || tsec == 'null' || tsec === '2345678') && req.query.$filter === 'productType==IN,idContract==INMXP0000001,period==1'){
       return res.json(dashMov_04);
    }else  if ((tsec == '' || tsec == 'null' || tsec === '2345678') && req.query.$filter === 'productType==IN,idContract==INMXP0000001,period==2'){
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
    }else  if (tsec.includes("usdPagare") && req.query.$filter === 'productType==IN,idContract==CAUSD0000001,period==0'){
       return res.json(dashMovUSD);
    }  
    else{
        return res.status(406).json(ERROR_MOVS);
    }
  next();
});

// handler for query http://localhost:4000/dashboard/V00/dashboard/dropDownMenu?typeProduct&page=page
router.get('/V00/dashboard/dropDownMenu/', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if(tsec === '' || tsec == 'null' || tsec == undefined){
    return res.json(DropDown_03);
  }else if(tsec.includes("ERROR")){
    return res.status(406).json(ERRORDropDown);
  }else if(tsec.includes("DropDown")){
    return res.json(DropDown_06);
  }else if (tsec.includes("dropDown_fondos")){
    return res.json(DropDown_07);
  }else if(tsec.includes("PG") && req.query.page=="posicionGlobal"){
    return res.json(DropDown_ALL);
  }else if(tsec.includes("dropDown_tc")){
    if(req.query.typeProduct=='tarjetasCredito'){
     return res.json(DropDown_04);
    }else{    
      if(req.query.typeProduct==""&& req.query.page=="posicionGlobal"){
        return res.json(DropDown_03);
      }else {
        if(req.query.typeProduct=='pesos'){
         return res.json(DropDown_02);
        }else{
            return res.json(DropDown_01);
        }
      }
    }
  }
    return res.json(DropDown_ALL);
  next();
  });

// handler for query http://localhost:4000/dashboard/V00/dashboard/headlinesAccounts
router.get('/V00/dashboard/headlinesAccounts', function(req, res, next) {
  var tsec = req.headers['tsec'];
   if(tsec == '012345' && req.query)
    return res.json(headlinesAccounts_03);
  else if(tsec == '123456' && req.query){
    return res.json(headlinesAccounts_02);
  }else if(req.query){
    return res.json(headlinesAccounts_01);
  }
  return res.status(406).json(headlinesAccounts_ERROR);
  next();
});

router.post('/V00/logs', function(req, res, next) {
  
  var filePath= path.join(__dirname, urlTxt);

  var tmp = fs.readFileSync(filePath, 'utf8');
  var nvoTexto = "Se agrega nueva linea: " + req.body.message + "\n";

  fs.truncate(filePath, 0, function() {
    fs.writeFile(filePath, tmp + nvoTexto , function (err) {
        if (err) {
            return console.log("Error writing log: " + err);
        }
    });
  });

  return res.json(LOGS);
  next();
});

// handler for query http://localhost:4000/dashboard/V00/dashboard/mobileTransfers
router.post('/V00/dashboard/mobileTransfers/', function(req, res, next) {
  console.log(req.body);
    var otp = req.headers['otp'];
  var tsec = req.headers['tsec'];
  var amou= req.body.amount%100
  
    if(otp == '12345678' && (tsec != '' || tsec != null || tsec == '556790' || tsec == '123456789' || tsec == '890765' || tsec == '18234' || tsec == '34567')){
      if(req.body.amount!=null && req.body.concept!= "" && req.body.idAccount !="" &&  amou== 0 || req.body.concept === ""){
        return res.json(mobileTransfers_01);
      }else{ 
          return res.status(406).json(mobileTransfers_ERROR);
      }
    }else
      return res.status(406).json(mobileTransfers_ERROR1);
  next();
  });

// handler for query http://localhost:5000/dashboard/V00/modifyAlias/CHMXP0000001
/*
{
    "shortName": "AliasPr001" <- solo 10 caracteres
}
*/
router.post('/V00/modifyAlias/:id', function(req, res, next) {
    var alias = req.body.shortName;
    var tsec = req.headers['tsec'];
    if (alias == undefined)
        alias = "";
    if ( tsec==='456789012' && req.params.id == 'SIMXP0000002' && alias == 'AliasPr002')
        return res.status(502).json(alias_nok);
    if (req.params.id == 'AHMXP0000001' || req.params.id == 'TCMXP0000001'){
        var filePath = path.join(__dirname, dashboard_roor);
        var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        json.product.checkAccount[0].branch.alias=alias;
        var nvoJson = JSON.stringify(json);
        fs.truncate(filePath, 0, function() {
            fs.writeFile(filePath, nvoJson , function (err) {
                if (err) {
                    return res.json(alias_nok); 
                }
            });
          });
        return res.json(alias_ok); 
    }else  if (tsec != null || tsec==='456789012' || req.params.id == 'SIMXP0000002'){
        var filePath = path.join(__dirname, dashboard_roor);
        var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        json.product.checkAccount[0].branch.alias=alias;
        var nvoJson = JSON.stringify(json);
        fs.truncate(filePath, 0, function() {
            fs.writeFile(filePath, nvoJson , function (err) {
                if (err) {
                    return res.json(alias_nok); 
                }
            });
          });
        return res.json(alias_ok); 
    }else{
        return res.status(502).json(alias_nok);
    }
    return res.json(alias_nok);
  next();
});

var dates01 = require('../../mock/V00/dashboard/systemDate/date01.json');

// handler for query http://localhost:4000/users/V00/systemDate
router.get('/V00/systemDate', function(req, res, next) {
    function getDate(now) {
       var yyyy = now.getFullYear();
       var mm = now.getMonth()+1;
       var dd  = now.getDate();

       return String(10000*yyyy + 100*mm + dd); 
    }

    function getTime(now){
      var hh = now.getHours();
      var mm = now.getMinutes();
      var ss = now.getSeconds();
      var ms = now.getMilliseconds();

      hh < 10 ? hh = '0' + hh : hh = hh;
      mm < 10 ? mm = '0' + mm : mm = mm;
      ss < 10 ? ss = '0' + ss : ss = ss;

      return hh + ":" +  mm + ":" + ss;
    }

    function getJson(){
      var now = new Date();
      var dt = getDate(now);
      var newDate = dt.substring(0,4) + "-" + dt.substring(4,6) + "-" + dt.substring(6);
      var obj = { 
        "data": 
        { 
          "date":  newDate,
          "time": getTime(now)
        }
      }
      return obj;
    }
    if(req.query){
    return res.json(getJson());
    }else{
        return res.json(getJson());
    }
    
  });

// handler for query http://localhost:3000/dashboard/V00/userInfo?filter=email
router.get('/V00/userInfo', function(req, res, next) {
  var tsec = req.headers['tsec'];

  if(tsec==undefined || tsec===''){
    return res.json(userInfoS1);
  } else if (tsec.includes("userInfoS1")){
    return res.json(userInfoS1);
  } else if (tsec.includes("userInfoS2")){
    return res.json(userInfoS2);
  } else if (tsec.includes("userInfoT1")){
    return res.json(userInfoT1);
  } else if (tsec.includes("userInfoT3")){
    return res.json(userInfoT3);
  } else if (tsec.includes("userInfoT6")){
    return res.json(userInfoT6);
  } else if (tsec.includes("userInfoT7")){
    return res.json(userInfoT7);
  } else if (tsec.includes("userInfoNoNominated")){
    return res.json(userInfo_user01);
  } else if (tsec.includes("userInfoWithOutAlerts")){
     return res.json(userInfo_user02);
  } else if (tsec.includes("userInfoWithOperations")){
     return res.json(userInfo_user03);
  } else if (tsec.includes("userInfoError")){
     return res.json(userInfo_error);
  } else {
    return res.json(userInfoS1);
  }
});

// handler for query http://localhost:4000/dashboard/V00/validateOtp
/*se espera
{
  "otp": "12345678";
}
*/
router.post('/V00/validateOtp', function(req, res, next) {
  if (req.body.otp && req.body.otp=="12345678"){
    return res.json(OK);
  }
  return res.status(406).json(NOK);
  next();
});
// handler for query http://localhost:4000/dashboard/V00/validateOtp?otp=12345678
router.get('/V00/validateOtp', function(req, res, next) {
  if (req.query.otp && req.query.otp=="12345678"){
    return res.json(OK);
  }
  return res.status(406).json(NOK);
  next();
});

// handler for query http://localhost:4000/dashboard/V00/tsec
router.post('/V00/tsec', function(req, res, next) {
  return res.json({});
  next();
});

// Mytest for query http://localhost:4000/dashboard/V00/mytest
router.post('/V00/mytest', function(req, res, next) {
  return res.json({});
  next();
});

// Mytest for query http://localhost:4000/dashboard/V00/mytest?test=test
router.get('/V00/mytest', function(req, res, next) {
  if (req.query.test && req.query.test=="test"){
    return res.json(OK);
  }
  return res.status(406).json(NOK);
  next();
});

// handler for query http://localhost:3000/dashboard/V00/userInfo?filter=email
router.get('/V00/userInfo2', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var num = Math.floor(Math.random() * 10000);
  var tsec2= "tsec"+num;

  if(tsec==undefined || tsec===''){
    res.setHeader("tsec", tsec2);
    return res.json(userInfoS1);
  } else if (tsec.includes("userInfoS1")){
    res.setHeader("tsec", tsec2);
    return res.json(userInfoS1);
  } else if (tsec.includes("userInfoS2")){
     res.setHeader("tsec", tsec2);
    return res.json(userInfoS2);
  } else if (tsec.includes("userInfoT1")){
     res.setHeader("tsec", tsec2);
    return res.json(userInfoT1);
  } else if (tsec.includes("userInfoT3")){
     res.setHeader("tsec", tsec2);
    return res.json(userInfoT3);
  } else if (tsec.includes("userInfoT6")){
     res.setHeader("tsec", tsec2);
    return res.json(userInfoT6);
  } else if (tsec.includes("userInfoT7")){
     res.setHeader("tsec", tsec2);
    return res.json(userInfoT7);
  } else if (tsec.includes("userInfoNoNominated")){
     res.setHeader("tsec", tsec2);
    return res.json(userInfo_user01);
  } else if (tsec.includes("userInfoWithOutAlerts")){
     res.setHeader("tsec", tsec2);
     return res.json(userInfo_user02);
  } else if (tsec.includes("userInfoWithOperations")){
     res.setHeader("tsec", tsec2);
     return res.json(userInfo_user03);
  } else if (tsec.includes("userInfoError")){
     res.setHeader("tsec", tsec2);
     return res.json(userInfo_error);
  } else {
     res.setHeader("tsec", tsec2);
    return res.json(userInfoS1);
  }
});

module.exports = router;