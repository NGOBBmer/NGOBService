var express = require('express');
var router = express.Router();
var PERIOD0001 = require('../../mock/V00/accounts/accountstatement/PERIOD0001.json');
var PERIOD0002 = require('../../mock/V00/accounts/accountstatement/PERIOD0002.json');
var PERIOD0003 = require('../../mock/V00/accounts/accountstatement/PERIOD0003.json');
var PERIOD0004 = require('../../mock/V00/accounts/accountstatement/PERIOD0004.json');
var AS_NO_DATA = require('../../mock/V00/accounts/accountstatement/accountstatement_error_sinperiodos.json');
var AS_ERROR_ID = require('../../mock/V00/accounts/accountstatement/accountstatement_error_id.json');
var NOK = require('../../mock/V00/dashboard/validateOtp/otp_error.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec,otp');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:3000/accounts/V00/accounts/AHMXP0000001/accountStatement?periodId=PERIOD0001&format=pdf
router.get('/V00/accounts/:id/accountStatement/', function(req, res, next) {
  var otp = req.headers['otp'];
	if(req.params && req.params.id){
    console.log();
    if (otp == "12345678"){
	    if (req.params && req.query.periodId == 'PERIOD0001')  {
        return res.json(PERIOD0001);
	    }
      if (req.params && req.query.periodId == 'PERIOD0002')  {
        return res.json(PERIOD0002);
      }
      if (req.params && req.query.periodId == 'PERIOD0003')  {
        return res.json(PERIOD0003);
      }
      if (req.params && req.query.periodId == 'PERIOD0004')  {
        return res.json(PERIOD0004);
      }
      if (req.params && req.params.id == 'PERIOD0005')  {
        return res.json(AS_NO_DATA);
      }
      return res.json(AS_ERROR_ID);
  	}else{
      return res.status(400).json(NOK);
    }
  }
    return res.json(AS_ERROR_ID);
    next();
  });


module.exports = router;