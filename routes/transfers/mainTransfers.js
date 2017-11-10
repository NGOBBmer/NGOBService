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
var bankFound01 = require('../../mock/V00/transfers/loadBanks/BankFound_01.json');
var banksError = require('../../mock/V00/transfers/loadBanks/ERROR.json');

//interbank
var express = require('express');
var router = express.Router();
var OK = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok.json'); 
var OK_period = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok_period.json'); 
var ERROR = require('../../mock/V00/transfers/otherAccountsTransfer/response_err.json');




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

// handler for query http://localhost:4000/transfers/V00/QrData?account=002180700256&beneficiaryName=BANAMEX
router.get('/V00/QrData', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == '123456')
        return res.json(QrDataOcra);
    else  if (tsec == '123456789')
        return res.json(QrDataSoftokenOpt);
    else  if (tsec == 'cronto')
        return res.json(QrDataCronto);

    return res.status(400).json(qrError);
  next();
});


// handler for query http://localhost:4000/transfers/V00/loadBanks?operationType=spei
router.get('/V00/loadBanks', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == 'null' || tsec == undefined && req.query.operationType==='spei' && req.query.cveBank==='90628')
        return res.json(bankFound);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='otroscreditos' && req.query.cveBank==='30167')
        return res.json(bankFound01);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='spei')
        return res.json(banksCatalogSpei);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='clabe')
        return res.json(banksCatalogClabe);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='tdd')
        return res.json(banksCatalogTdd);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='tdc')
        return res.json(banksCatalogTdc);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='otroscreditos')
        return res.json(banksCatalogOtrosCreditos);

    return res.status(400).json(banksError);
  next();
});


router.post('/V00/interbankTransfer', function(req, res, next) {
    var otherTrasnferFreqId = req.body.frequentId;
   var  senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var isPeriodic =req.body.isPeriodic;
    var aplicationDate =req.body.aplicationDate;
    var repetitions =req.body.repetitions;
    //var reference =req.body.reference;
    var amount =req.body.amount;
    var period =req.body.period;
    var rfc =req.body.rfc;
    var iva =req.body.iva;
    var numericReference =req.body.numericReference;
    var taxReceipt =req.body.taxReceipt;
    var dayIndicator =req.body.dayIndicator;


    if (otherTrasnferFreqId!= '' && senderAccountId != '' && amount !=''  && aplicationDate != '' && otherTrasnferFreqId!= null && senderAccountId != null && amount !=null  && aplicationDate != null
          && numericReference != null && dayIndicator!= null   && numericReference != '' && dayIndicator!= ''){
        
        if (isPeriodic){
             if (repetitions != '' && concept != '' &&  period != '' && repetitions != null && concept != null &&  period != null){
                return res.json(OK_period);
             }else{
                return res.json(ERROR); 
             }
        }

        if (taxReceipt){
             if (iva != '' && rfc != '' && iva != null && rfc != null){
                 return res.json(OK); 
             }else{
                return res.json(ERROR); 
             }
        }

        return res.json(OK); 
    }else{
       return res.json(ERROR); 
    }
    return res.json(ERROR);
  next();
});

module.exports = router;