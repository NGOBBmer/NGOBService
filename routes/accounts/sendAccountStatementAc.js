var express = require('express');
var router = express.Router();
var PERIOD0001 = require('../../mock/V00/accounts/sendAccountStatement/PERIOD0001.json');
var PERIOD0002 = require('../../mock/V00/accounts/sendAccountStatement/PERIOD0002.json');
var PERIOD0003 = require('../../mock/V00/accounts/sendAccountStatement/PERIOD0003.json');
var AS_NO_DATA = require('../../mock/V00/accounts/sendAccountStatement/error_sin_edc.json');
var AS_ERROR_ID = require('../../mock/V00/accounts/sendAccountStatement/error_id.json');

/* GET users listing. */
router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// handler for query http://localhost:3000/accounts/V00/accounts/TCMXP0000001/sendAccountStatement
/* Object json in method post
  {
    "email": "userEmail@server.com",
    "password": "userPass4Edc",
    "periodId": "PERIOD0001",
    "otp": "12345678"
  }
*/
router.post('/V00/accounts/:id/sendAccountStatement', function(req, res, next) {
  if (req.params && req.params.id && req.body.email && req.body.password && req.body.periodId && req.body.otp == "12345678") {
    if (req.params && req.params.id == 'AHMXP0000001')  {
      return res.json(PERIOD0001);
    }
    if (req.params && req.params.id == 'CHUSD0000001')  {
      return res.json(PERIOD0002);
    }
    if (req.params && req.params.id == 'CHEUR0000001')  {
      return res.json(PERIOD0003);
    }
    if (req.params && req.params.id == 'CHMXP0000001')  {
      return res.json(AS_NO_DATA);
    }
    
    return res.json(AS_ERROR_ID);
  }
  next();
});


module.exports = router;