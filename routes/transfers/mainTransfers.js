var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
var listAccount_all = require('../../mock/V00/transfers/listAccountTr/listAccount_all.json');
var listAccount_01 = require('../../mock/V00/transfers/listAccountTr/listAccount_01.json');
var listAccount_02 = require('../../mock/V00/transfers/listAccountTr/listAccount_02.json');
var listSender_tdc01 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc01.json');
var listSender_tdc02 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc02.json');
var listReceiver_tdc01 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc01.json');
var listReceiver_tdc02 = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdc02.json');
var listReceiver_tdcError = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdcError.json');
var listReceiver_empty = require('../../mock/V00/transfers/listAccountTr/listReceiver_tdcEmpty.json');
var listSender_tdcEmpty = require('../../mock/V00/transfers/listAccountTr/listSender_tdcEmpty.json');
var listSender_tdc03 = require('../../mock/V00/transfers/listAccountTr/listSender_tdc03.json');
var listSender_paco = require('../../mock/V00/transfers/listAccountTr/listSender_paco.json');
var listAccount_err = require('../../mock/V00/transfers/listAccountTr/listAccount_err.json');

var listSender_regla01 = require('../../mock/V00/transfers/listAccountTr/listSender_regla01.json');
var listSender_regla02 = require('../../mock/V00/transfers/listAccountTr/listSender_regla02.json');
var listSender_regla03 = require('../../mock/V00/transfers/listAccountTr/listSender_regla03.json');
var listSender_regla04 = require('../../mock/V00/transfers/listAccountTr/listSender_regla04.json');

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
var banksCatalog_bancomer = require('../../mock/V00/transfers/loadBanks/loadBanks_bbva.json');
var bankFound = require('../../mock/V00/transfers/loadBanks/bankFound.json');
var bank_002 = require('../../mock/V00/transfers/loadBanks/bank_002.json');
var bank_0103 = require('../../mock/V00/transfers/loadBanks/bank_0103.json');
var bank_0030 = require('../../mock/V00/transfers/loadBanks/bank_0030.json');
var bank_0127 = require('../../mock/V00/transfers/loadBanks/bank_0127.json');
var bank_0127_2 = require('../../mock/V00/transfers/loadBanks/bank_0127_2.json');
var bankFound01 = require('../../mock/V00/transfers/loadBanks/BankFound_01.json');
var banksError = require('../../mock/V00/transfers/loadBanks/ERROR.json');
var bank_bancomer = require('../../mock/V00/transfers/loadBanks/bank_0012.json');


//interbank
var express = require('express');
var router = express.Router();
var OK = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok.json'); 
var OK_period = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok_period.json'); 
var ERROR = require('../../mock/V00/transfers/otherAccountsTransfer/response_err.json');

var OK_interbank_traking = require('../../mock/V00/transfers/interbankTransfers/response_ok_traking.json'); 
var OK_interbank = require('../../mock/V00/transfers/interbankTransfers/response_ok.json'); 
var OK_interbank_period = require('../../mock/V00/transfers/interbankTransfers/response_ok_period.json'); 
var OK_interbank_traking_period = require('../../mock/V00/transfers/interbankTransfers/response_ok_traking_period.json'); 
var error_token_transfer= require('../../mock/V00/transfers/interbankTransfers/error_token.json'); 


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
var frequents_I = require('../../mock/V00/transfers/frequentOperations/frequents_Interbank_01.json');
var frequents_TP = require('../../mock/V00/transfers/frequentOperations/frequents_ThirdParty_01.json');
var frequents_A1 = require('../../mock/V00/transfers/frequentOperations/frequentsA_01.json');
var frequent_2 = require('../../mock/V00/transfers/frequentOperations/frequent_2.json');
var frequent_01_01 = require('../../mock/V00/transfers/frequentOperations/listFrequents_01_01.json');
var frequent_empty = require('../../mock/V00/transfers/frequentOperations/listFrequents_empty.json');
var frequent_mobile_01 = require('../../mock/V00/transfers/frequentOperations/frequents_mobile_01.json');
var frequent_mobile_02 = require('../../mock/V00/transfers/frequentOperations/frequent_mobile_02.json');


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
var otheraccounts_err = require('../../mock/V00/transfers/otherAccountsTransfer/otheraccounts_err.json');

//myAccountsTransfer
var MYACCOUNTS_OK = require('../../mock/V00/transfers/creditCardPayment/response_ok.json'); 
var OK_period_resp = require('../../mock/V00/transfers/creditCardPayment/response_ok_period.json'); 
var MYACCOUNTS_ERROR = require('../../mock/V00/transfers/creditCardPayment/response_err.json');

//sendEmailTransfers
var json_true_err = require('../../mock/V00/transfers/sendEmailTransfers/err_true_json.json');
var json_true_err2 = require('../../mock/V00/transfers/sendEmailTransfers/err_true_json_2.json');
var json_false_err = require('../../mock/V00/transfers/sendEmailTransfers/err_false_json.json');
var json_true = require('../../mock/V00/transfers/sendEmailTransfers/true_json.json');
var json_false = require('../../mock/V00/transfers/sendEmailTransfers/false_json.json');
var json_ERR = require('../../mock/V00/transfers/sendEmailTransfers/err_json.json');
var err_mandatory = require('../../mock/V00/transfers/sendEmailTransfers/set_err_01.json');

//advancedSearch
var advancedSearch01 = require('../../mock/V00/transfers/advancedSearch/advancedSearch_01.json');
var advancedSearch02 = require('../../mock/V00/transfers/advancedSearch/advancedSearch_02.json');
var advancedSearch03 = require('../../mock/V00/transfers/advancedSearch/advancedSearch_03.json');
var advancedSearch_varios = '../../mock/V00/transfers/advancedSearch/advancedSearch_varios.json';
var advancedSearchErr = require('../../mock/V00/transfers/advancedSearch/advancedSearch_err.json');
var advancedSearchErr_02 = require('../../mock/V00/transfers/advancedSearch/advancedSearch_err02.json');
var advancedSearchErr_STN = require('../../mock/V00/transfers/advancedSearch/advancedSearch_STN.json');

//getBeneficiary
var beneficiary01 ='../../mock/V00/transfers/beneficiary/beneficiary01.json';
var beneficiaryErr = require('../../mock/V00/transfers/beneficiary/beneficiaryErr.json');

//rulesInterbank
var rules_interbank = require('../../mock/V00/transfers/rulesInterbank/rules_01.json');
var rulesInterbank_inSchedule = require('../../mock/V00/transfers/rulesInterbank/rulesInterbank_01.json');
var rulesInterbank_outSchedule = require('../../mock/V00/transfers/rulesInterbank/rulesInterbank_02.json');
var error_rulesInterbank = require('../../mock/V00/transfers/rulesInterbank/error_rulesInterbank.json');

//DeleteFrequent
var deleteOk_freq = require('../../mock/V00/transfers/deleteFrequentOperation/deleteFrequentOperation.json');

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
    if(tsec === 'errorTransfer'){
        if (req.query.operationType === 'THIRD_PARTY'){
            return res.json(listSender_regla03);
        }else if (req.query.operationType === 'INTERBANK'){
            return res.json(listSender_regla04);
        }
    }else if (req.query.accountId !== undefined && req.query.accountId !== ''){
         return res.json(listSender_regla02);
    }else if (req.query.operationType !== undefined && req.query.operationType !== ''){
        if (req.query.accountType === undefined || req.query.accountType === ''){
            return res.status(400).json(listAccount_err);
        }
        if (req.query.operationType === 'THIRD_PARTY'){
            return res.json(listSender_regla03);
        }else if (req.query.operationType === 'INTERBANK'){
            return res.json(listSender_regla04);
        }
    }else{
        return res.json(listSender_regla01);
    }
    return res.status(400).json(listAccount_err);
  next();
});


// handler for query http://localhost:5000/transfers/V00/getBeneficiary?number=&accountType=
router.get('/V00/getBeneficiary', function(req, res, next) {
    var tsec = req.headers['tsec'];
    var filePath = path.join(__dirname, beneficiary01);
    var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if(tsec === '' || tsec === undefined){
       return res.json(json[1]);
    }else if (tsec.includes("beneficiary01")){
        var random = (Math.floor(Math.random() * 7) + 1) - 1;
        return res.json(json[random]);
    }else if (tsec.includes("beneficiaryErr")){
       return res.status(400).json(beneficiaryErr); 
    }else{
         return res.json(json[1]);
    }

    return res.status(400).json(beneficiaryErr);
  next();
});

// handler for query http://localhost:5000/transfers/V00/listReceiverAccounts?accountId=TCMXP0000001&operationType=PAY_CREDITCARD
router.get('/V00/listReceiverAccounts', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == '1234567890')
        return res.status(400).json(listAccount_err);
    else if (tsec==='errorTransfer')
        return res.json(listAccount_all);
    else if(tsec === '3456789')
         return res.json(listReceiver_empty);
    else if(tsec === '456789')
         return res.json(listReceiver_tdcError);
    else if (tsec == '567812' && req.query.operationType == 'PAY_CREDITCARD')
        return res.status(400).json(listAccount_err);
    else if (tsec == '123456' && req.query.operationType == 'PAY_CREDITCARD')
        return res.json(listReceiver_tdc02);
    else if (req.query.operationType == 'PAY_CREDITCARD')
        return res.json(listReceiver_tdc01);
    else if (tsec==='null')
        return res.json(listAccount_all);
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
     else  if (tsec == 'null')
        return res.json(QrDataSoftokenOpt);

    return res.status(400).json(qrError);
  next();
});


// handler for query http://localhost:4000/transfers/V00/loadBanks?operationType=spei
router.get('/V00/loadBanks', function(req, res, next) {
    var tsec = req.headers['tsec'];

    if ((tsec == '' || tsec == 'undefined')){
        if(req.query.includeBbva==='true'){
          return res.json(banksCatalog_bancomer);
        }
        if (req.query.operationType==='cb' || req.query.operationType==='CB' || req.query.operationType==='cl' || req.query.operationType==='CL'){
            return res.json(banksCatalogClabe);
        }else if(req.query.cveBank==='0012'){
            return res.json(bank_bancomer);
        }else if(req.query.cveBank==='0103'){
            return res.json(bank_0103);
        }else if((req.query.operationType==='oca' || req.query.operationType==='OCA') && req.query.cveBank==='0002'){
            return res.json(bank_002);
        }else if((req.query.operationType==='oca' || req.query.operationType==='OCA') && req.query.cveBank==='0030'){
            return res.json(bank_0030);
        }else if((req.query.operationType==='och' || req.query.operationType==='OCH') && req.query.cveBank==='0127'){
            return res.json(bank_0127);
        }else if((req.query.operationType==='ocp' || req.query.operationType==='OCP') && req.query.cveBank==='0127'){
            return res.json(bank_0127_2);
        }else if(req.query.operationType==='tc' || req.query.operationType==='TC' && req.query.cveBank==='0002'){
            return res.json(bank_002);
        }else if(req.query.operationType==='tc' || req.query.operationType==='TC' && req.query.cveBank==='0030'){
            return res.json(bank_0030);
        }else if(req.query.operationType==='tc' || req.query.operationType==='TC' && req.query.cveBank==='0127'){
            return res.json(bank_0127);
        }else if( req.query.operationType==='cb' || req.query.operationType==='CB' || req.query.operationType==='cl' || req.query.operationType==='CL' && req.query.cveBank==='0002'){
            return res.json(bank_002);
        }else if(req.query.operationType==='cb' || req.query.operationType==='CB'  || req.query.operationType==='cl' || req.query.operationType==='CL' && req.query.cveBank==='0030'){
            return res.json(bank_0030);
        }else if(req.query.operationType==='cb' || req.query.operationType==='CB'  || req.query.operationType==='cl' || req.query.operationType==='CL' && req.query.cveBank==='0127'){
            return res.json(bank_0127);
        }
    }else if (tsec.includes("loadBanks01")){
        if(req.query.includeBbva==='true'){
            return res.json(banksCatalog_bancomer);
        }
        if ((req.query.operationType==='cb' || req.query.operationType==='CB' || req.query.operationType==='cl' || req.query.operationType==='CL'))
            return res.json(banksCatalogClabe);
        else if ((req.query.operationType==='td' || req.query.operationType==='TD'))
            return res.json(banksCatalogTdd);
        else if ((req.query.operationType==='tc' || req.query.operationType==='TC'))
            return res.json(banksCatalogTdc);
        else if ((req.query.operationType==='oca' || req.query.operationType==='OCA' || req.query.operationType==='oc' || req.query.operationType==='OC' || req.query.operationType==='och' || req.query.operationType==='OCH' || req.query.operationType==='ocp' || req.query.operationType==='OCP'))
            return res.json(banksCatalogOtrosCreditos);
    }else if(tsec.includes("loadBanksErr01")){
        return res.status(409).json(banksError);
    }else{
        if (req.query.operationType==='cb' || req.query.operationType==='CB' || req.query.operationType==='cl' || req.query.operationType==='CL'){
            return res.json(banksCatalogClabe);
        }else if(req.query.cveBank==='0012'){
            return res.json(bank_bancomer);
        }else if(req.query.cveBank==='0103'){
            return res.json(bank_0103);
        }else if((req.query.operationType==='oca' || req.query.operationType==='OCA') && req.query.cveBank==='0002'){
            return res.json(bank_002);
        }else if((req.query.operationType==='oca' || req.query.operationType==='OCA') && req.query.cveBank==='0030'){
            return res.json(bank_0030);
        }else if((req.query.operationType==='och' || req.query.operationType==='OCH') && req.query.cveBank==='0127'){
            return res.json(bank_0127);
        }else if((req.query.operationType==='ocp' || req.query.operationType==='OCP') && req.query.cveBank==='0127'){
            return res.json(bank_0127_2);
        }else if(req.query.operationType==='tc' || req.query.operationType==='TC' && req.query.cveBank==='0002'){
            return res.json(bank_002);
        }else if(req.query.operationType==='tc' || req.query.operationType==='TC' && req.query.cveBank==='0030'){
            return res.json(bank_0030);
        }else if(req.query.operationType==='tc' || req.query.operationType==='TC' && req.query.cveBank==='0127'){
            return res.json(bank_0127);
        }else if( req.query.operationType==='cb' || req.query.operationType==='CB' || req.query.operationType==='cl' || req.query.operationType==='CL' && req.query.cveBank==='0002'){
            return res.json(bank_002);
        }else if(req.query.operationType==='cb' || req.query.operationType==='CB'  || req.query.operationType==='cl' || req.query.operationType==='CL' && req.query.cveBank==='0030'){
            return res.json(bank_0030);
        }else if(req.query.operationType==='cb' || req.query.operationType==='CB'  || req.query.operationType==='cl' || req.query.operationType==='CL' && req.query.cveBank==='0127'){
            return res.json(bank_0127);
        }
    }

  next();
});

// handler for query http://localhost:4000/transfers/V00/frequentOperations?typeOpFrequent&paginationKey=&numMovsFreq=10
router.get('/V00/frequentOperations', function(req, res, next) {
    var tsec = req.headers['tsec'];

  //  var filePath = path.join(__dirname, frequents_A1);
   // var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if(tsec == '' || tsec == 'undefined'){
        if ((req.query.accountId.includes('AHMXP')|| req.query.accountId.includes('CHMXP')) && req.query.typeOpFrequent === '' && req.query.paginationKey === '' && req.query.numMovsFreq == ''){
            //return res.json(frequents_A1);
            var random = (Math.floor(Math.random() * 4) + 1) - 1;
            if(random > 0 && random < 2){
                return res.json(frequents_A1);
            }else  if(random > 2 && random < 5){
               return res.json(frequent_01);
            }else{
                return res.json(frequent_02);
            }
            return res.json(json.listFrequentOperation[1].id);
        }else if(req.query.accountId.includes('TCMXP') && req.query.typeOpFrequent === '' && req.query.paginationKey === '' && req.query.numMovsFreq == ''){
            return res.json(frequent_02);
        }
    }else if(tsec.includes("frequentOperations01")){
        if ((req.query.accountId.includes('AHMXP')|| req.query.accountId.includes('CHMXP')) && req.query.typeOpFrequent === '' && req.query.paginationKey === '' && req.query.numMovsFreq == ''){
            return res.json(frequent_01);
        }else if(req.query.typeOpFrequent === 'MOBILE_TOP_UP'){
            return res.json(frequent_mobile_01);
        }
    }else if(tsec.includes("frequentOperations02")){
        return res.json(frequent_03);
    }else if(tsec.includes("frequentOperationsErr01")){
        return res.json(frequent_empty);
    }else{
        if ((req.query.accountId.includes('AHMXP')|| req.query.accountId.includes('CHMXP')) && req.query.typeOpFrequent === '' && req.query.paginationKey === '' && req.query.numMovsFreq == ''){
            return res.json(frequents_A1);
        }else if(req.query.accountId.includes('TCMXP') && req.query.typeOpFrequent === '' && req.query.paginationKey === '' && req.query.numMovsFreq == ''){
            return res.json(frequent_02);
        }
    }
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

    if(tsec=== 'errorTransfer'){
        return res.status(406).json(error_token_transfer); 
    }

    if((otp == "11111111" || otp == "") && otp != null){

    if (senderAccountId != "" && senderAccountId != null &&  frequentId != "" && frequentId != null &&
        aplicationDate != "" && aplicationDate != null && (tsec != "") && (tsec != null) &&
        amount != "" && amount != null){
        
        if (isPeriodic){
         if (repetitions != '' && periodicName != '' && periodicName != null &&  period != '' && repetitions != null && concept != null &&  period != null){
                if (taxReceipt){
                     if (iva != '' && rfc != '' &&  iva != null && rfc != null){
                        if(tsec == "7777777"){
                            return res.json(OK_interbank_traking);
                        }else{
                            return res.json(OK_interbank);
                        }
                     }else{
                        return res.status(409).json(error_tax); 
                     }
                  }
                  if(tsec == "7777777"){
                    return res.json(OK_interbank_traking_period);
                  }else{
                    return res.json(OK_interbank_period);
                    
                  }
         }else{
            return res.status(409).json(error_period); 
         }
        }
        if (taxReceipt){
             if (iva != '' && rfc != '' &&  iva != null && rfc != null){
                if(tsec == "7777777"){
                    return res.json(OK_interbank_traking);
               }else{
                    return res.json(OK_interbank);
                }
             }else{
                return res.status(409).json(error_tax); 
             }
        }

        if(tsec == "7777777"){
         return res.json(OK_interbank_traking); 
       }else{
            return res.json(OK_interbank); 
        }
    }else{
       return res.status(409).json(error_line); 
    }
    return res.status(406).json(RESP_ERROR);

    }else{
           return res.status(400).json(error_token_transfer); 
    
     }
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
             if (repetitions != '' &&  period != '' && repetitions != null  &&  period != null){
                return res.json(OK_period_resp);
             }else{
                return res.status(409).json(MYACCOUNTS_ERROR); 
             }
        }

        return res.json(MYACCOUNTS_OK); 
    }else{
       return res.status(409).json(MYACCOUNTS_ERROR); 
    }
    return res.status(406).json(MYACCOUNTS_ERROR);
  next();
});

//sendEmailTransfers
router.post('/V00/sendEmailTransfers', function(req, res, next) {
    //var tsec = req.headers['tsec'];
    var bodi = req.body;
    if (bodi.operationId === undefined || bodi.operationId === '' || bodi.beneficiaryEmail === undefined || 
        bodi.beneficiaryEmail === '' || bodi.titularCopy === undefined){
        return res.status(400).json(err_mandatory);
    }
    if (bodi.operationId != '' && bodi.beneficiaryEmail != '' && bodi.titularCopy){
        if(bodi.beneficiaryEmail == "error@test.com"){
            return res.json(json_true_err);
        }else if(req.body.beneficiaryEmail == "error2@test.com"){
            return res.json(json_true_err2);
        }else{
            return res.json(json_true);

        }
    }else if (bodi.operationId != '' && bodi.beneficiaryEmail != '' && !bodi.titularCopy ){

        if(bodi.beneficiaryEmail == "error@test.com"){
         return res.json(json_false_err);
        }else{
            return res.json(json_false);

        }
        
    }else{
        return res.json(json_ERR);

    }
  next();
});

// handler for query http://localhost:5000/transfers/V00/otherAccountsTransfer
router.post('/V00/otherAccountsTransfer', function(req, res, next) {
    var otp = req.headers['otp'];
    var otherTrasnferFreqId = req.body.frequentId;
    var senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var isPeriodic =req.body.isPeriodic;
    var aplicationDate =req.body.aplicationDate;
    var repetitions =req.body.repetitions;
    var periodicName = req.body.periodicName;
    //var reference =req.body.reference;
    var amount =req.body.amount;
    var period =req.body.period;
    var tsec = req.headers['tsec'];
    if((otp == "11111111" || otp == "") && otp != undefined){
        if (tsec.includes('errorReliable')){
            return res.status(406).json(otheraccounts_err); 
        }else  if (tsec.includes('errorOtherAccount')){
            return res.status(400).json(RESP_ERROR); 
        }else if (tsec.includes("otherAccount01")){
            if (otherTrasnferFreqId!= '' && senderAccountId != '' && amount !=''  && aplicationDate != '' && otherTrasnferFreqId!= null && senderAccountId != null && amount !=null  && aplicationDate != null){
            
                if (isPeriodic){
                     if (repetitions != '' && periodicName != '' &&  period != '' && periodicName != null && repetitions != null && concept != null &&  period != null){
                        return res.json(OK_period);
                     }else{
                        return res.status(400).json(RESP_ERROR); 
                     }
                }
                return res.json(RESP_OK);
            }
        }else{
           return res.json(RESP_OK); 
        }

    }else{
        return res.status(400).json(error_token_transfer);    
    }
  next();

});

//advancedSearch
router.get('/V00/advancedSearch', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (!isNaN(req.query.number)){
         var filePath = path.join(__dirname, advancedSearch_varios);
         var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (tsec === '' || tsec === undefined){
            json.data[6].account.number = req.query.number;
            return res.json(json.data[6]); 
        }else if (tsec.includes('advancedSearchErr01')){
             return res.status(406).json(advancedSearchErr_STN); 
        }else if (tsec.includes('advancedSearch01')) {
            if (req.query.number === '0021807005'){
                return res.json(json.data[0]);
            }else if (req.query.number === '9711440156'){
                return res.json(json.data[1]);
            }else if (req.query.number === '5520721628'){
                return res.json(json.data[2]);           
            }else if (req.query.number === '1136164080'){
                return res.json(json.data[3]);          
            }else if (req.query.number === '021180040000000752'){
                return res.json(json.data[4]);         
            }else if (req.query.number === '5499490515322931'){
                return res.json(json.data[5]);        
            }else if (req.query.number === '4768513016451321'){
                return res.json(json.data[6]);
            }else if (req.query.number === '4098513016018209'){
                return res.json(json.data[7]);
            }else if (req.query.number === '4152313300116865'){
                return res.json(json.data[8]);
            }else if (req.query.number === '4461180036974370'){
                return res.json(json.data[9]);
            }else if (req.query.number === '4772133010484910'){
                return res.json(json.data[10]);
            }else if (req.query.number === '4513120515322123'){
                return res.json(json.data[11]);
            }else if (req.query.number === '012610011361640806'){
                return res.json(json.data[12]);
            }else if (req.query.number === '376782341005795'){
                return res.json(json.data[13]);
            }else if (req.query.number === '5512345678'){
                return res.json(json.data[14]);
            }else{
                json.data[6].account.number = req.query.number;
                return res.json(json.data[6]); 
            }
        }else if (req.query.number == undefined || req.query.number === ''){
           return res.status(406).json(advancedSearchErr); 
        }else  if (req.query.number === '2800160237'){
            return res.json(advancedSearch01);
        }else if (req.query.number === '002180700256551903'){
            return res.json(advancedSearch02);
        }else{
            return res.json(advancedSearch03);
        }
    }else{
         return res.status(406).json(advancedSearchErr_02); 
    }
    
  next();
});

//handler for query http://localhost:4000/transfers/V00/getRulesInterbankTransfers?typeProduct=TC
router.get('/V00/getRulesInterbankTransfers', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ((tsec == '' || tsec == 'undefined')&& req.query.typeProduct !== '')
        return res.json(rulesInterbank_inSchedule);
    else if(tsec.includes("rulesInterbankTransfer01")){
        return res.json(rules_interbank);
    }else if(tsec.includes("rulesInterbankTransfer02")){
        return res.json(rulesInterbank_outSchedule);
    }else if(tsec.includes("rulesInterbankTransferErr01")){
        return res.status(409).json(error_rulesInterbank);
    }else{
        return res.json(rulesInterbank_inSchedule);
    }
    
  next();
});


//http://localhost:8080/Andrea/transfers/V00/deleteFrequents/FRTT000065
router.post('/V00/deleteFrequents/:id', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (req.params.id != null){
        return res.json(deleteOk_freq);
    }

    return res.status(409).json(error_rulesInterbank);
  next();
});


module.exports = router;