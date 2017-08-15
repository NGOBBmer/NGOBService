var express = require('express');
var router = express.Router();
var listAccount_all = require('../../mock/V00/transfers/listAccountTr/listAccount_all.json');
var listSender_tdc01 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc01.json');
var listSender_tdc02 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc02.json');
var listReceiver_tdc01 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc01.json');
var listReceiver_tdc02 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc02.json');
var listAccount_err = require('../../mock/V00/transfers/listAccountTr/listAccount_err.json');

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

// handler for query http://localhost:5000/transfers/V00/listSenderAccounts?operationType=PAY_CREDITCARD
router.get('/V00/listSenderAccounts', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == '1234567890')
        return res.status(400).json(listAccount_err);
    else if (tsec == '123456' && req.query.operationType == 'PAY_CREDITCARD')
        return res.json(listSender_tdc02);
    else if (req.query.operationType == 'PAY_CREDITCARD')
        return res.json(listSender_tdc01);
    else 
        return res.json(listAccount_all);
    return res.status(400).json(listAccount_err);
  next();
});

// handler for query http://localhost:5000/transfers/V00/listReceiverAccounts?accountId=TCMXP0000001&operationType=PAY_CREDITCARD
router.get('/V00/listReceiverAccounts', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == '1234567890')
        return res.status(400).json(listAccount_err);
    else if (tsec == '123456' && req.query.operationType == 'PAY_CREDITCARD')
        return res.json(listReceiver_tdc02);
    else if (req.query.operationType == 'PAY_CREDITCARD')
        return res.json(listReceiver_tdc01);
    else 
        return res.json(listAccount_all);
    return res.status(400).json(listAccount_err);
  next();
});


module.exports = router;