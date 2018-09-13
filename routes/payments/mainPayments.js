var express = require('express');
var router = express.Router();
var moment = require('moment');
var fs = require("fs");
var path = require('path');

//getBalancePaymentPlan
var balancePaymentPlan_err = require('../../mock/V00/payments/getBalancePaymentPlan/getBalancePaymentPlan_Error.json');
var balancePaymentPlan_desactiveAgreement = require('../../mock/V00/payments/getBalancePaymentPlan/getBalancePaymentPlan_Desactive_Agreement.json');
var balancePaymentPlan_withAmount = require('../../mock/V00/payments/getBalancePaymentPlan/getBalancePaymentPlan_With_Amount.json');
var balancePaymentPlan_withoutAmount = require('../../mock/V00/payments/getBalancePaymentPlan/getBalancePaymentPlan_Without_Amount.json');

var createAgileOperationsPayment_Error = require('../../mock/V00/payments/createAgileOperationsPayment/createAgileOperationsPayment_Error.json');
var createAgileOperationsPayment_ErrorTSEC = require('../../mock/V00/payments/createAgileOperationsPayment/createAgileOperationsPayment_ErrorTSEC.json');
var createAgileOperationsPayment_ErrorOTP = require('../../mock/V00/payments/createAgileOperationsPayment/createAgileOperationsPayment_ErrorOTP.json');
var createAgileOperationsPayment_Success = require('../../mock/V00/payments/createAgileOperationsPayment/createAgileOperationsPayment_Success.json');

var err_tsec_01 = require('../../mock/V00/genericError/error_invalid_tsec.json');
var err_tsec_02 = require('../../mock/V00/genericError/error_without_tsec.json');
var err_otp_01 = require('../../mock/V00/genericError/error_without_otp.json');
var err_generic = require('../../mock/V00/genericError/error_generic.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec, otp');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.get('/', function(req, res, next) {
  res.render('payments', { title: '' });
});

// handler for query http://localhost:5000/payments/V00/getBalancePaymentPlan/123?reference=PRUEBAAPICIE&concept=&agreement=001131508 POST
router.get('/V00/getBalancePaymentPlan/', function(req, res, next) {
	var tsec = req.headers['tsec'];
  
	if( tsec == 'null' || tsec == 'undefined' || tsec == ''){
		return res.json(balancePaymentPlan_err);
	}
	
	if (req.query.agreement !== '001131508'){
		return res.json(balancePaymentPlan_desactiveAgreement);
	}else if (req.query.reference === 'PRUEBAAPICIE'){
		return res.json(balancePaymentPlan_withAmount);
	}else if (req.query.reference !== 'PRUEBAAPICIE'){
		return res.json(balancePaymentPlan_withoutAmount);
	} 
});


// handler for query http://localhost:5000/payments/V00/createAgileOperations
router.post('/V00/createAgileOperations', function(req, res, next) {
	
	var tsec = req.headers['tsec'];
	var otp = req.headers['otp'];
	
	var agileOperationType = req.body.agileOperationType;	
	var shortName = req.body.shortName;
	var operationId = req.body.operationId;	
	var number = req.body.receiver.number;
	var currency = req.body.receiver.name;
	var reference = req.body.receiver.reference;
  
	if( otp === 'null' || otp === undefined || otp === ''){
		return res.json(createAgileOperationsPayment_ErrorOTP);
	}
  
	if( tsec === 'null' || tsec === undefined || tsec === ''){
		return res.json(createAgileOperationsPayment_ErrorTSEC);
	}
	
	if( operationId === 'null' || operationId === undefined || operationId === ''){
		return res.json(createAgileOperationsPayment_Success);
	}else{
		return res.json(createAgileOperationsPayment_Error);		
	} 
});


// handler for query http://localhost:5000/payments/V00/createAgileOperationsPayment
var CSP_01_OK = require('../../mock/V00/payments/createServicePayment/CSP_01.json');
router.post('/V00/createServicePayment', function(req, res, next) {
	
	var tsec = req.headers['tsec'];
	var otp = req.headers['otp'];

	if (otp === undefined){
		return res.status(400).json(err_otp_01);
	}else if (req.body.frequentId==='11223344556677889900'){
		return res.json(CSP_01_OK);
	}
	res.status(406).json(err_generic);
	
});

var search_telmex = require('../../mock/V00/payments/advancedSearch/search_telmex.json');
var search_telmex_0035241 = require('../../mock/V00/payments/advancedSearch/search_telmex_0035241.json');
var search_telmex_0035241 = require('../../mock/V00/payments/advancedSearch/search_telmex_0035241.json');
var search_telmex_0624101 = require('../../mock/V00/payments/advancedSearch/search_telmex_0624101.json');
var search_telmex_0074172 = require('../../mock/V00/payments/advancedSearch/search_telmex_0074172.json');
var search_CFE = require('../../mock/V00/payments/advancedSearch/search_CFE.json');
var search_CFE_0039862 = require('../../mock/V00/payments/advancedSearch/search_CFE_0039862.json');
var search_CFE_0578869 = require('../../mock/V00/payments/advancedSearch/search_CFE_0578869.json');
var search_liverpool = require('../../mock/V00/payments/advancedSearch/search_liverpool.json');
var search_liverpool_0084946 = require('../../mock/V00/payments/advancedSearch/search_liverpool_0084946.json');
var search_liverpool_1207865 = require('../../mock/V00/payments/advancedSearch/search_liverpool_1207865.json');
var search_palacio_de_hierro = require('../../mock/V00/payments/advancedSearch/search_palacio_de_hierro.json');
var search_palacio_de_hierro_0516203 = require('../../mock/V00/payments/advancedSearch/search_palacio_de_hierro_0516203.json');
var search_palacio_de_hierro_0516212 = require('../../mock/V00/payments/advancedSearch/search_palacio_de_hierro_0516212.json');
var search_error = require('../../mock/V00/payments/advancedSearch/search_error.json');
var search_no_encontrado = require('../../mock/V00/payments/advancedSearch/search_no_encontrado.json');

var listAgreementsSponsors = require('../../mock/V00/payments/listAgreements/istAgreementsSPONSORS.json');
var listAgreementsError  = require('../../mock/V00/payments/listAgreements/listAgreementError.json');
var listAgreementsErrorTsec  = require('../../mock/V00/payments/listAgreements/errorTsec.json');

var agreementsOrderAmex  = require('../../mock/V00/payments/agreementsOrder/amex.json');
var agreementsOrderLiver = require('../../mock/V00/payments/agreementsOrder/liverpool.json');
var agreementsOrderTelmex= require('../../mock/V00/payments/agreementsOrder/telmex.json');
var agreementsOrderError = require('../../mock/V00/payments/agreementsOrder/errorAgreementsOrder.json');
var agreementsNoEncontrado = require('../../mock/V00/payments/agreementsOrder/noEcontrado.json');

// handler for query http://localhost:4000/payments/V00/advancedSearch?agreement=telemx
/*
* agreement: nombre o número del convenio
*/

router.get('/V00/advancedSearch', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var agreement = req.query.agreement;


  if(tsec!=null && tsec.includes("errorAdvancedSearch")){
    return res.status(400).json(search_error);

  } else if (agreement!=null && agreement!=undefined && agreement.length>1){
    if("telmex".includes(agreement.toLowerCase())){
      return res.json(search_telmex);
    
    } else if("0035241" === agreement){
      return res.json(search_telmex_0035241);

    } else if("0624101" === agreement){
      return res.json(search_telmex_0624101);
      
    } else if("0074172" === agreement){
      return res.json(search_telmex_0074172);
      
    } else if("cfe".includes(agreement.toLowerCase())){
      return res.json(search_CFE);
    
    } else if("0039862" === agreement){
      return res.json(search_CFE_0039862);
      
    } else if("0578869" === agreement){
      return res.json(search_CFE_0578869);
      
    } else if("liverpool".includes(agreement.toLowerCase())){
      return res.json(search_liverpool);
    
    } else if("0084946" === agreement){
      return res.json(search_liverpool_0084946);
      
    } else if("1207865" === agreement){
      return res.json(search_liverpool_1207865);
      
    } else if("palacio de hierro".includes(agreement.toLowerCase())){
      return res.json(search_palacio_de_hierro);
    
    } else if("0516203" === agreement){
      return res.json(search_palacio_de_hierro_0516203);
      
    } else if("0516212" === agreement){
      return res.json(search_palacio_de_hierro_0516212);
      
    } else {
      return res.json(search_no_encontrado);
      
    }
  } else {
    return res.json(search_no_encontrado);
  }

 

  next();
});

//payments/V00/listAgreements?type=SPONSORS
router.get('/V00/listAgreements', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var type = req.query.type;
  if(tsec!=null && tsec.includes("errorListAgreements")){
    return res.status(400).json(search_error); 
    
  } else {
    return res.json(listAgreementsSponsors);
  }

  next();
});

//payments/V00/getAgreementsOrder?order=8
router.get('/V00/getAgreementsOrder', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var order = req.query.order;


  if(tsec!=null && tsec.includes("errorAgreementsOrder")){
    return res.status(400).json(agreementsOrderError); 
    
  } else {
    if (order==12){
      return res.json(agreementsOrderLiver);
    
    } else if (order==8){
      return res.json(agreementsOrderTelmex);

    } else if (order==7){
      return res.json(agreementsOrderAmex);
      
    } else {
       return res.json(agreementsNoEncontrado);
    }
  }

  next();
});

module.exports = router;