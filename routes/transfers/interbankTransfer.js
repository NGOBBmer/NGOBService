var express = require('express');
var router = express.Router();
var OK = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok.json'); 
var OK_period = require('../../mock/V00/transfers/otherAccountsTransfer/response_ok_period.json'); 
var ERROR = require('../../mock/V00/transfers/otherAccountsTransfer/response_err.json');


/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:5000/transfers/V00/otherAccountsTransfer

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
         && taxReceipt !=null  && numericReference != null && dayIndicator!= null && taxReceipt !=''  && numericReference != '' && dayIndicator!= ""null""){
        
        if (isPeriodic){
             if (repetitions != '' && concept != '' &&  period != '' && repetitions != null && concept != null &&  period != null){
                return res.json(OK_period);
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