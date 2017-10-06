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

router.post('/V00/otherAccountsTransfer', function(req, res, next) {
    var otherTrasnferFreqId = req.body.otherTrasnferFreqId;
   var  senderAccountId = req.body.senderAccountId;
    var concept = req.body.concept;
    var isPeriodic =req.body.isPeriodic;
    var aplicationDate =req.body.aplicationDate;
    var endDate =req.body.endDate;
    //var reference =req.body.reference;
    var amount =req.body.amount;
    var period =req.body.period;

    if (otherTrasnferFreqId!= '' && senderAccountId != '' && amount !=''  && aplicationDate != '' && otherTrasnferFreqId!= null && senderAccountId != null && amount !=null  && aplicationDate != null){
        
        if (isPeriodic){
             if (endDate != '' && concept != '' &&  period != '' && endDate != null && concept != null &&  period != null){
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