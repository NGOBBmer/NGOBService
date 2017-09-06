var express = require('express');
var router = express.Router();
var OK = require('../../mock/V00/transfers/cashAdvanceFee/response_ok.json'); 
var ERROR = require('../../mock/V00/transfers/cashAdvanceFee/response_err.json');


/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
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