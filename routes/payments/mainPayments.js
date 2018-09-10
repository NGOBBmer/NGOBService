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
var createAgileOperationsPayment_Success = require('../../mock/V00/payments/createAgileOperationsPayment/createAgileOperationsPayment_Success.json');

var err_tsec_01 = require('../../mock/V00/genericError/error_invalid_tsec.json');
var err_tsec_02 = require('../../mock/V00/genericError/error_without_tsec.json');
var err_otp_01 = require('../../mock/V00/genericError/error_without_otp.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
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


// handler for query http://localhost:5000/payments/V00/createAgileOperationsPayment
router.post('/V00/createAgileOperationsPayment', function(req, res, next) {
	
	var tsec = req.headers['tsec'];
	
	var agileOperationType = req.body.agileOperationType;	
	var shortName = req.body.shortName;
	var operationId = req.body.operationId;	
	var number = req.body.receiver.number;
	var currency = req.body.receiver.name;
	var reference = req.body.receiver.reference;;
  
	if( tsec === 'null' || tsec === 'undefined' || tsec === ''){
		return res.json(createAgileOperationsPayment_ErrorTSEC);
	}
	
	if( operationId === 'null' || operationId === 'undefined' || operationId === ''){
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
	}else if (req.body.operationId==='11223344556677889900'){
		return res.json(CSP_01_OK);
	}
	next();
});

module.exports = router;