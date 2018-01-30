var express = require('express');
var router = express.Router();
var listAccount_all = require('../../mock/V00/transfers/listAccountTr/listAccount_all.json');
var listAccount_01 = require('../../mock/V00/transfers/listAccountTr/listAccount_01.json');
var listAccount_02 = require('../../mock/V00/transfers/listAccountTr/listAccount_02.json');
var listSender_tdc01 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc01.json');
var listSender_tdc02 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc02.json');
var listReceiver_tdc01 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc01.json');
var listReceiver_tdc02 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc02.json');
var listSender_tdcEmpty = require('../../mock/V00/transfers/listAccountTr/listSender_tdcEmpty.json');
var listSender_tdc03 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc03.json');
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

var error_period = require('../../mock/V00/transfers/interbankTransfers/intert_error_prog.json'); 
var error_tax = require('../../mock/V00/transfers/interbankTransfers/intert_error_tax.json'); 
var error_line = require('../../mock/V00/transfers/interbankTransfers/intert_error_line.json');

//cashAdvanceFree
var CASH_OK = require('../../mock/V00/transfers/cashAdvanceFee/response_ok.json'); 
var CASH_ERROR = require('../../mock/V00/transfers/cashAdvanceFee/response_err.json');

//creditCardPayment
var CREDIT_OK = require('../../mock/V00/transfers/creditCardPayment/response_ok.json'); 
var OK_period = require('../../mock/V00/transfers/creditCardPayment/response_ok_period.json'); 
var CREDIT_ERROR = require('../../mock/V00/transfers/creditCardPayment/response_err.json');

//FrequentOperations
var frequent_01 = require('../../mock/V00/transfers/frequentOperations/listFrequents_01.json');
var frequent_02 = require('../../mock/V00/transfers/frequentOperations/listFrequents_02.json');
var frequent_03 = require('../../mock/V00/transfers/frequentOperations/listFrequents_03.json');
var frequents_I = require('../../mock/V00/transfers/frequentOperations/frequents_Interbank_01.json');
var frequents_TP = require('../../mock/V00/transfers/frequentOperations/frequents_ThirdParty_01.json');
var frequents_A1 = require('../../mock/V00/transfers/frequentOperations/frequentsA_01.json');
var frequent_01_01 = require('../../mock/V00/transfers/frequentOperations/listFrequents_01_01.json');
var frequent_02_01 = require('../../mock/V00/transfers/frequentOperations/listFrequents_02_01.json');
var frequent_empty = require('../../mock/V00/transfers/frequentOperations/listFrequents_empty.json');

var frequent_error = require('../../mock/V00/transfers/frequentOperations/ERROR.json');

//Search frequents
var search_frequent = require('../../mock/V00/transfers/searchFrequents/searchFrequents_ALL.json');
var freq_error = require('../../mock/V00/transfers/searchFrequents/searchFrequents_error.json');

//getSequences
var json_OK = require('../../mock/V00/transfers/getSequences/json_ok.json');
var json_ERR = require('../../mock/V00/transfers/getSequences/json_err.json');

//otherAccountsTransfer
var RESP_OK = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok.json'); 
var OK_period = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok_period.json'); 
var RESP_ERROR = require('../../mock/V00/transfers/otherAccountsTransfer/response_err.json');

//myAccountsTransfer
var MYACCOUNTS_OK = require('../../mock/V00/transfers/creditCardPayment/response_ok.json'); 
var OK_period_resp = require('../../mock/V00/transfers/creditCardPayment/response_ok_period.json'); 
var MYACCOUNTS_ERROR = require('../../mock/V00/transfers/creditCardPayment/response_err.json');

//sendEmailTransfers
var json_true = require('../../mock/V00/transfers/sendEmailTransfers/true_json.json');
var json_false = require('../../mock/V00/transfers/sendEmailTransfers/false_json.json');
var json_ERR = require('../../mock/V00/transfers/sendEmailTransfers/err_json.json');

//advancedSearch
var advancedSearch01 = require('../../mock/V00/transfers/advancedSearch/advancedSearch_01.json');
var advancedSearch02 = require('../../mock/V00/transfers/advancedSearch/advancedSearch_02.json');
var advancedSearch03 = require('../../mock/V00/transfers/advancedSearch/advancedSearch_03.json');
var advancedSearchErr = require('../../mock/V00/transfers/advancedSearch/advancedSearch_err.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec,otp');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
});


// handler for query http://localhost:5000/transfers/V00/cashAdvanceFee
router.post('/V00/cashAdvanceFee', function(req, res, next) {
    var receiverAccountId = req.body.receiverAccountId;
   var  senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var isPeriodic =req.body.isPeriodic;
    var aplicationDate =req.body.aplicationDate;
    var endDate =req.body.endDate;
    //var reference =req.body.reference;
    var amount =req.body.amount;
    var period =req.body.period;

    if (receiverAccountId!= '' && senderAccountId != '' && amount !=''  && aplicationDate != '' && receiverAccountId!= null && senderAccountId != null && amount !=null  && aplicationDate != null){
        
        if (isPeriodic){
             if (endDate != '' && concept != '' &&  period != '' && endDate != null && concept != null &&  period != null){
                return res.json(CASH_OK);
             }else{
                return res.json(CASH_ERROR); 
             }
        }

        return res.json(CASH_OK); 
    }else{
       return res.json(CASH_ERROR); 
    }
    return res.json(CASH_ERROR);
  next();
});

// handler for query http://localhost:4000/transfers/V00/creditCardPayment/TCMXP0000001
router.post('/V00/creditCardPayment/:creditCardId', function(req, res, next) {
    var cardId = req.params.creditCardId;
   var  senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var isPeriodic =req.body.isPeriodic;
    var aplicationDate =req.body.aplicationDate;
    var repetitions =req.body.repetitions;
    //var reference =req.body.reference;
    var amount =req.body.amount;
    var period =req.body.period;

    if (cardId!= '' && senderAccountId != '' && amount !=''  && aplicationDate != '' && cardId!= null && senderAccountId != null && amount !=null  && aplicationDate != null){
        
        if (isPeriodic){
             if (repetitions != '' && concept != '' &&  period != '' && repetitions != null && concept != null &&  period != null){
                return res.json(OK_period);
             }else{
                return res.json(CREDIT_ERROR); 
             }
        }

        return res.json(CREDIT_OK); 
    }else{
       return res.json(CREDIT_ERROR); 
    }
    return res.json(CREDIT_ERROR);
  next();
});

// handler for query http://localhost:5000/transfers/V00/listSenderAccounts?operationType=PAY_CREDITCARD
router.get('/V00/listSenderAccounts', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == '1234567890'){
        return res.status(400).json(listAccount_err);
    }else  if (tsec == '09876543'){
        res.json(listSender_tdcEmpty);
    }else if (tsec == '123456' && req.query.operationType == 'PAY_CREDITCARD'){
        return res.json(listSender_tdc02);
    }else if (tsec == '567812' && req.query.operationType == 'PAY_CREDITCARD'){
        return res.json(listSender_tdc03);
    }else if (req.query.operationType == 'PAY_CREDITCARD'){
        return res.json(listSender_tdc01);
    }else if (tsec === '123456'){
        return res.json(listAccount_01);
    }else if (tsec === '1234567'){
        return res.json(listAccount_02);
    }else{
        return res.json(listAccount_all);
    }
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
    if ((tsec == 'null' || tsec == undefined) && req.query.operationType==='spei' && req.query.cveBank==='90628')
        return res.json(bankFound);
    else if ((tsec == 'null' || tsec == '11111111') && req.query.operationType==='otroscreditos' && req.query.cveBank==='30167')
        return res.json(bankFound01);
    else if ((tsec == 'null' || tsec == '11111111') && req.query.operationType==='spei')
        return res.json(banksCatalogSpei);
    else if ((tsec == 'null' || tsec == '11111111') && req.query.operationType==='clabe')
        return res.json(banksCatalogClabe);
    else if ((tsec == 'null' || tsec == '11111111') && req.query.operationType==='tdd')
        return res.json(banksCatalogTdd);
    else if ((tsec == 'null' || tsec == '11111111') && req.query.operationType==='tdc')
        return res.json(banksCatalogTdc);
    else if ((tsec == 'null' || tsec == '11111111') && req.query.operationType==='otroscreditos')
        return res.json(banksCatalogOtrosCreditos);

    return res.status(400).json(banksError);
  next();
});

// handler for query http://localhost:5000/transfers/V00/frequentOperations?typeOpFrequent&paginationKey=&numMovsFreq=10
router.get('/V00/frequentOperations', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '0' && req.query.numMovsFreq == '20')
        return res.json(frequent_01);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '6' && req.query.numMovsFreq == '10')
        return res.json(frequent_02);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '16' && req.query.numMovsFreq == '10')
        return res.json(frequent_03);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'third_party' && req.query.paginationKey === '' && req.query.numMovsFreq == '10')
        return res.json(frequent_01_01);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'interbank' && req.query.paginationKey === '' && req.query.numMovsFreq == '10')
        return res.json(frequent_02_01);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_A1);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'all' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_A1);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'interbank' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_I);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'third_party' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_TP);
    else if ((tsec == '3456789') && req.query.typeOpFrequent === 'all' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequent_empty);
    else if ((tsec == '3456789') && req.query.typeOpFrequent === 'interbank' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequent_empty);
    else if ((tsec == '3456789') && req.query.typeOpFrequent === 'third_party' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequent_empty);


    return res.status(400).json(frequent_error);
  next();
});

// handler for query http://localhost:4000/transfers/V00/searchFrequents?word=prue
router.get('/V00/searchFrequents', function(req, res, next) {
     var tsec = req.headers['tsec'];
     if ((tsec == '12345678') && req.query.word === 'prueba')
        return res.json(search_frequent);
    return res.status(400).json(freq_error);
    next();
});

// handler for query http://localhost:4000/transfers/V00/getSequences?initDate=2017-10-30&transferType=PAYMENT_CREDITCARD&period=WEEKLY&repetitions=5
router.get('/V00/getSequences', function(req, res, next) {
    //var tsec = req.headers['tsec'];
    if (req.query.initDate != '' && req.query.transferType != '' && req.query.period != '' && req.query.repetitions != ''){
        return res.json(json_OK);
    }else{
        return res.json(json_ERR);
    }
  next();
});

// handler for query http://localhost:5000/transfers/V00/otherAccountsTransfer

router.post('/V00/interbankTransfer', function(req, res, next) {
    var tsec = req.headers['tsec'];
    var otp = req.headers['otp'];
    var frequentId = req.body.frequentId;
   var  senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var periodicName = req.body.periodicName;
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


    if (senderAccountId != "" && senderAccountId != null &&  frequentId != "" && frequentId != null &&
        aplicationDate != "" && aplicationDate != null && tsec != "" && tsec != null &&
        amount != "" && amount != null && otp == "11111111" && otp != null){
        
        if (isPeriodic){
                     if (repetitions != '' && concept != '' &&  period != '' && repetitions != null && concept != null &&  period != null){
                            if (taxReceipt){
                                 if (iva != '' && rfc != '' &&  iva != null && rfc != null){
                                    return res.json(OK_period);
                                 }else{
                                    return res.json(error_tax); 
                                 }
                              }

                              return res.json(OK_period);
                     }else{
                        return res.json(error_period); 
                     }
        }
        if (taxReceipt){
             if (iva != '' && rfc != '' &&  iva != null && rfc != null){
                return res.json(RESP_OK);
             }else{
                return res.json(error_tax); 
             }
        }


        return res.json(RESP_OK); 
    }else{
       return res.json(error_line); 
    }
    return res.json(RESP_ERROR);
  next();
});


// handler for query http://localhost:5000/transfers/V00/creditCardPayment/TCMXP0000001
router.post('/V00/myAccountsTransfer', function(req, res, next) {
    var receiverAccountId = req.body.receiverAccountId;
   var  senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var isPeriodic =req.body.isPeriodic;
    var aplicationDate =req.body.aplicationDate;
    var repetitions =req.body.repetitions;
    //var reference =req.body.reference;
    var amount =req.body.amount;
    var period =req.body.period;

    if (receiverAccountId!= '' && senderAccountId != '' && amount !=''  && aplicationDate != '' && receiverAccountId!= null && senderAccountId != null && amount !=null  && aplicationDate != null){
        
        if (isPeriodic){
             if (repetitions != '' && concept != '' &&  period != '' && repetitions != null && concept != null &&  period != null){
                return res.json(OK_period_resp);
             }else{
                return res.json(MYACCOUNTS_ERROR); 
             }
        }

        return res.json(MYACCOUNTS_OK); 
    }else{
       return res.json(MYACCOUNTS_ERROR); 
    }
    return res.json(MYACCOUNTS_ERROR);
  next();
});

//sendEmailTransfers
router.get('/V00/sendEmailTransfers', function(req, res, next) {
    //var tsec = req.headers['tsec'];
    if (req.query.operationId != '' && req.query.beneficiaryEmail != '' && req.query.titularCopy){
        return res.json(json_true);
    }else if (req.query.operationId != '' && req.query.beneficiaryEmail != '' && !req.query.titularCopy){
        return res.json(json_false);
    }else{
        return res.json(json_ERR);

    }
  next();
});

// handler for query http://localhost:5000/transfers/V00/otherAccountsTransfer
router.post('/V00/otherAccountsTransfer', function(req, res, next) {
    var tsec = req.headers['tsec'];
    var otp = req.headers['otp'];
    var otherTrasnferFreqId = req.body.frequentId;
   var  senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var isPeriodic =req.body.isPeriodic;
    var aplicationDate =req.body.aplicationDate;
    var repetitions =req.body.repetitions;
    //var reference =req.body.reference;
    var amount =req.body.amount;
    var period =req.body.period;

    if (otherTrasnferFreqId!= '' && senderAccountId != '' && amount !=''  && aplicationDate != '' && otherTrasnferFreqId!= null && senderAccountId != null && amount !=null  && aplicationDate != null
        && tsec != "" && tsec != null 
        && otp == "11111111" && otp != null){
        
        if (isPeriodic){
             if (repetitions != '' && concept != '' &&  period != '' && repetitions != null && concept != null &&  period != null){
                return res.json(OK_period);
             }else{
                return res.json(RESP_ERROR); 
             }
        }

        return res.json(RESP_OK); 
    }else{
       return res.json(RESP_ERROR); 
    }
    return res.json(RESP_ERROR);
  next();
});

//advancedSearch
router.get('/V00/advancedSearch', function(req, res, next) {
    if (req.query.number == undefined || req.query.number === ''){
       return res.status(400).json(advancedSearchErr); 
    }else  if (req.query.number === '2800160237'){
        return res.json(advancedSearch01);
    }else if (req.query.number === '002180700256551903'){
        return res.json(advancedSearch02);
    }else{
        return res.json(advancedSearch03);
    }
  next();
});

module.exports = router;