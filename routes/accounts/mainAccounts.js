var express = require('express');
var router = express.Router();

var movements_AH01 = require('../../mock/V00/accounts/movements/AHMXP0000001.json');
var movements_AH01_next= require('../../mock/V00/accounts/movements/AHMXP0000001_next.json');
var movements_AH01_filter= require('../../mock/V00/accounts/movements/AHMXP0000001_filter.json');
var movements_CH01 = require('../../mock/V00/accounts/movements/CHUSD0000001.json');
var movements_CH01_next= require('../../mock/V00/accounts/movements/CHUSD0000001_next.json');
var movements_CH01_filter= require('../../mock/V00/accounts/movements/CHUSD0000001_filter.json');
var movements_CH02 = require('../../mock/V00/accounts/movements/CHEUR0000001.json');
var movements_CH02_next= require('../../mock/V00/accounts/movements/CHEUR0000001_next.json');
var movements_CH02_filter= require('../../mock/V00/accounts/movements/CHEUR0000001_filter.json');
var movements_default= require('../../mock/V00/accounts/movements/default.json');
var movements_Prepag_MXP = require('../../mock/V00/accounts/movements/PrepagoMXP.json');
var movements_Prepag_USD = require('../../mock/V00/accounts/movements/PrepagoUSD.json');
var movements_err= require('../../mock/V00/accounts/movements/movements_err.json');

//accountStatement
var PERIOD0001 = require('../../mock/V00/accounts/accountstatement/PERIOD0001.json');
var PERIOD0002 = require('../../mock/V00/accounts/accountstatement/PERIOD0002.json');
var PERIOD0003 = require('../../mock/V00/accounts/accountstatement/PERIOD0003.json');
var PERIOD0004 = require('../../mock/V00/accounts/accountstatement/PERIOD0004.json');
var PERIOD0005_XML = require('../../mock/V00/accounts/accountstatement/PERIOD0005_XML.json');
var AS_NO_DATA = require('../../mock/V00/accounts/accountstatement/accountstatement_error_sinperiodos.json');
var AS_ERROR_ID = require('../../mock/V00/accounts/accountstatement/accountstatement_error_id.json');
var NOK = require('../../mock/V00/dashboard/validateOtp/otp_error.json');

//listAccounts
var accounts_4152313300116865 = require('../../mock/V00/accounts/listAccounts/accounts_4152313300116865.json');

var accounts_gio = require('../../mock/V00/accounts/listAccounts/accounts_gio.json');
// var accounts_4152313300116865 = require('../mock/V00/accounts/listAccounts/accounts_4152313300116865.json');
var accounts_sinAccountType = require('../../mock/V00/accounts/listAccounts/accounts_sinAccountType.json');
// var accounts_sinAccounts = require('../mock/V00/accounts/listAccounts/accounts_sinAccounts.json');


//Periods
var AHMXP0000001 = require('../../mock/V00/accounts/periods/AHMXP0000001.json');
var AHMXP0000001_next = require('../../mock/V00/accounts/periods/AHMXP0000001_next.json');
var CHUSD0000001 = require('../../mock/V00/accounts/periods/CHUSD0000001.json');
var CHUSD0000001_next = require('../../mock/V00/accounts/periods/CHUSD0000001_next.json');
var CHEUR0000001 = require('../../mock/V00/accounts/periods/CHEUR0000001.json');
var AS_NO_DATA = require('../../mock/V00/accounts/periods/periods_error_sinperiodos.json');
var AS_ERROR_ID = require('../../mock/V00/accounts/periods/periods_error_id.json');

//sendAccountStatement
var SPERIOD0001 = require('../../mock/V00/accounts/sendAccountStatement/PERIOD0001.json');
var SPERIOD0002 = require('../../mock/V00/accounts/sendAccountStatement/PERIOD0002.json');
var SPERIOD0003 = require('../../mock/V00/accounts/sendAccountStatement/PERIOD0003.json');
var SAS_NO_DATA = require('../../mock/V00/accounts/sendAccountStatement/error_sin_edc.json');
var SAS_ERROR_ID = require('../../mock/V00/accounts/sendAccountStatement/error_id.json');

//getAccountClabe
var clabe_Ok = require('../../mock/V00/accounts/getAccountClabe/accountClabe.json');
var clabe_NoOk = require('../../mock/V00/accounts/getAccountClabe/error_accountClabe.json');

//getLoanOffer
var case1 = require('../../mock/V00/accounts/getLoanOffer/case1.json');
var case2 = require('../../mock/V00/accounts/getLoanOffer/case2.json');
var caseError = require('../../mock/V00/accounts/getLoanOffer/caseError.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec,otp');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// handler for /V00/accounts/movements/AHMXP0000001?paginationKey=&initialDate=&finalDate=&period=&numMovements&period=&amountMin=&amountMax
router.get('/V00/accounts/movements/:id', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec === '1234567890'){
         return res.status(400).json(movements_err);
    }
    if (req.params.id == 'AHMXP0000001'){
        if (req.query.paginationKey) {
            return res.json(movements_AH01_next);
        }else if (req.query.period){
             return res.json(movements_AH01);
        }else if (req.query.initialDate && req.query.finalDate && req.query.amountMin && req.query.amountMax){
            return res.json(movements_AH01_filter);
        } else{
            return res.json(movements_AH01);
        }
        return res.json(movements_default);
    }
    if (req.params.id == 'CHUSD0000001'){
        if (req.query.paginationKey) {
            return res.json(movements_CH01_next);
        }else if (req.query.period){
             return res.json(movements_CH01);
        }else if (req.query.initialDate && req.query.finalDate && req.query.amountMin && req.query.amountMax){
            return res.json(movements_CH01_filter);
        } else{
            return res.json(movements_CH01);
        }
        return res.json(movements_default);
    }
    if (req.params.id == 'CHEUR0000001'){
        if (req.query.paginationKey) {
            return res.json(movements_CH02_next);
        }else if (req.query.period){
             return res.json(movements_CH02);
        }else if (req.query.initialDate && req.query.finalDate && req.query.amountMin && req.query.amountMax){
            return res.json(movements_CH02_filter);
        } else{
            return res.json(movements_CH02);
        }
        return res.json(movements_default);
    }
    if (req.params.id == 'TPMXP0000001'){
      return res.json(movements_Prepag_MXP);
    }
    if (req.params.id == 'TPUSD0000002'){
      return res.json(movements_Prepag_USD);
    }
  return res.json(movements_default);

});

// handler for query http://localhost:3000/accounts/V00/accounts/AHMXP0000001/accountStatement?periodId=PERIOD0001&format=pdf
router.get('/V00/accounts/:id/accountStatement/', function(req, res, next) {
  var otp = req.headers['otp'];
    if(req.params && req.params.id){
    if (req.query.format === 'xml'){
      return res.json(PERIOD0005_XML);
    }else if (otp == "12345678"){
        if (req.params && req.query.periodId == 'PERIOD0001')  {
        return res.json(PERIOD0001);
        }
      if (req.params && req.query.periodId == 'PERIOD0002')  {
        return res.json(PERIOD0002);
      }
      if (req.params && req.query.periodId == 'PERIOD0003')  {
        return res.json(PERIOD0003);
      }
      if (req.params && req.query.periodId == 'PERIOD0004')  {
        return res.json(PERIOD0004);
      }
      if (req.params && req.params.id == 'PERIOD0005')  {
        return res.json(AS_NO_DATA);
      }
      return res.json(AS_ERROR_ID);
    }else{
      return res.status(400).json(NOK);
    }
  }
    return res.json(AS_ERROR_ID);
    next();
  });

// handler for query http://localhost:3000/accounts/V00/accounts?accountType=CHECK_ACCOUNT
router.get('/V00/accounts', function(req, res, next) {
    if(req.query && req.query.accountType){
        if (req.query && req.query.accountType== 'CHECK_ACCOUNT')  {
          res.json(accounts_4152313300116865);
        }
        if (req.query && req.query.accountType!= 'CHECK_ACCOUNT' || req.query.accountType==null)  {
          res.json(accounts_sinAccountType);
        }
    
    }else{
        return res.json(accounts_sinAccountType);
    }
     next();
  });


// handler for query http://localhost:4000/accounts/V00/accounts/AHMXP0000001/periods?paginationKey=
router.get('/V00/accounts/:id/periods/', function(req, res, next) {
  if(req.params && req.params.id){
    var id = req.params.id;
      if (req.params && (id.startsWith('AH') || id.startsWith('IN') || id.startsWith('CA') || id.startsWith('SI') )) {
        if (req.query.paginationKey != "" && req.query.paginationKey != null){
          return res.json(AHMXP0000001_next);
        }else{
          return res.json(AHMXP0000001);
        }
      }
      if (req.params && req.params.id == 'CHUSD0000001')  {
        if (req.query.paginationKey != "" && req.query.paginationKey != null){
          return res.json(CHEUR0000001_next);
        }else{
          return res.json(CHEUR0000001);
        }
      }
      if (req.params && req.params.id == 'CHEUR0000001')  {
        return res.json(CHUSD0000001);
      }
      if (req.params && req.params.id == 'CHMXP0000001')  {
        return res.json(AS_NO_DATA);
      }
      return res.json(AS_ERROR_ID);
    }
    next();
  });

// handler for query http://localhost:3000/accounts/V00/accounts/TCMXP0000001/sendAccountStatement
/* Object json in method post
  {
    "email": "userEmail@server.com",
    "password": "userPass4Edc",
    "periodId": "PERIOD0001"
  }
*/
router.post('/V00/accounts/:id/sendAccountStatement', function(req, res, next) {
  var otp = req.headers['otp'];
  var id = req.params.id;
  if (req.params && req.params.id && req.body.email && req.body.password && req.body.periodId && otp == "12345678") {
    if (req.params && (id.startsWith('AH') || id.startsWith('IN') || id.startsWith('CA') || id.startsWith('SI')))  {
      return res.json(SPERIOD0001);
    }
    if (req.params && req.params.id == 'CHUSD0000001')  {
      return res.json(SPERIOD0002);
    }
    if (req.params && req.params.id == 'CHEUR0000001')  {
      return res.json(SPERIOD0003);
    }
    if (req.params && req.params.id == 'CHMXP0000001')  {
      return res.json(SAS_NO_DATA);
    }
    
    return res.json(SAS_ERROR_ID);
  }
  next();
});

//getAccountClabe
// accounts/V00/accounts/getAccountCLABE?accountId=AHMXP0000011
router.get('/V00/accounts/getAccountCLABE', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var accountId = req.params.accountId;
  if(tsec == '123456789'){
    return res.status(400).json(clabe_NoOk);
  }else{
    return res.json(clabe_Ok);
  }   
  next();
});

//accounts/V00/accounts/getLoanOffer?accountId={accountId}
router.get('/V00/accounts/getLoanOffer', function(req, res, next) {
   var tsec = req.headers['tsec'];
   if(tsec == '098776'){
      return res.json(case1);
   }else if(tsec == '12345'){
      return res.json(case2);
   }else{
      return res.status(406).json(caseError);
   } 
    next();
  });

module.exports = router;