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

// handler for query http://localhost:5000/payments/V00/getBalancePaymentPlan/123?reference=PRUEBAAPICIE&concept=&agreement=001131508
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

module.exports = router;