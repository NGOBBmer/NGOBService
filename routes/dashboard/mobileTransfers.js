var express = require('express');
var router = express.Router();
var DATA_01 = require('../../mock/V00/dashboard/mobileTransfers/mobileTransfers.json');
var ERROR = require('../../mock/V00/dashboard/mobileTransfers/mobileTransfersError.json');
var ERROR1 = require('../../mock/V00/dashboard/mobileTransfers/Error.json');
 
/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:4000/dashboard/V00/dashboard/mobileTransfers
router.post('/V00/dashboard/mobileTransfers/', function(req, res, next) {
  console.log(req.body);
	if(req.body.amount!=null && req.body.concept!= "" && req.body.idAccount !=""){
     return res.json(DATA_01);
  }else{
    return res.status(400).json(ERROR);
  }
  next();
  });

// handler for query http://localhost:4000/dashboard/V00/dashboard/mobileTransfers?amount=100&concept=concept&idAccount=AHMXP0000002
router.get('/V00/dashboard/mobileTransfers', function(req, res, next) {
  var otp = req.headers['otp'];
  var amou= req.query.amount%100
    if(otp == '12345678'){
      if(req.query.amount!=null && req.query.concept!= "" && req.query.idAccount !="" &&  amou== 0){
        return res.json(DATA_01);
      }else{
          return res.status(400).json(ERROR);
      }
    }else
      return res.status(400).json(ERROR1);
  next();
});

module.exports = router;