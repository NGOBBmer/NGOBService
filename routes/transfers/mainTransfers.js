var express = require('express');
var router = express.Router();
var listAccount_all = require('../../mock/V00/transfers/listAccountTr/listAccount_all.json');
var listSender_tdc01 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc01.json');
var listSender_tdc02 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc02.json');
var listReceiver_tdc01 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc01.json');
var listReceiver_tdc02 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc02.json');
var listAccount_err = require('../../mock/V00/transfers/listAccountTr/listAccount_err.json');

//CardInformation
var cardInformation_01 = require('../../mock/V00/transfers/cardInfo/cardInformation_01.json');
var cardInformation_02 = require('../../mock/V00/transfers/cardInfo/cardInformation_02.json');
var cardInformation_03 = require('../../mock/V00/transfers/cardInfo/cardInformation_03.json');
var cardInformation_04 = require('../../mock/V00/transfers/cardInfo/cardInformation_04.json');
var cardInformation_def = require('../../mock/V00/transfers/cardInfo/cardInformation_00.json');
var cardInformation_err = require('../../mock/V00/transfers/cardInfo/cardInformation_err.json');

//QrData
var QrDataOcra = require('../../mock/V00/transfers/QrData/QrOcra.json');
var QrDataSoftokenOpt = require('../../mock/V00/transfers/QrData/QrSoftokenOptico.json');
var QrDataCronto = require('../../mock/V00/transfers/QrData/QrCronto.json');
var qrError = require('../../mock/V00/transfers/QrData/error.json');

//loadBanks
var banksCatalogSpei = require('../../mock/V00/transfers/loadBanks/loadBanks_Spei.json');
var banksCatalogClabe = require('../../mock/V00/transfers/loadBanks/loadBanks_clabe.json');
var banksCatalogTdd = require('../../mock/V00/transfers/loadBanks/loadBanks_tdd.json');
var banksCatalogTdc = require('../../mock/V00/transfers/loadBanks/loadBanks_tdc.json');
var banksCatalogOtrosCreditos = require('../../mock/V00/transfers/loadBanks/loadBanks_OtrosCreditos.json');
var bankFound = require('../../mock/V00/transfers/loadBanks/bankFound.json');
var bankFound01 = require('../../mock/V00/transfers/loadBanks/bankFound_01.json');
var banksError = require('../../mock/V00/transfers/loadBanks/ERROR.json');


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

// handler for query http://localhost:5000/transfers/V00/cardInformation/TCMXP0000001
router.get('/V00/cardInformation/:id', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (req.params.id == 'TCMXP0000001')
        return res.json(cardInformation_01);
    else if (req.params.id == 'TCMXP0000002')
        return res.json(cardInformation_02);
    else if (req.params.id == 'TCMXP0000003')
        return res.json(cardInformation_03);
    else if (req.params.id == 'TCMXP0000004')
        return res.json(cardInformation_04);
    else if (tsec == '123456')
        return res.json(cardInformation_def);

    return res.status(400).json(cardInformation_err);
  next();
});

module.exports = router;