var express = require('express');
var router = express.Router();
var OK = require('../../mock/V00/dashboard/validateOtp/otp_01.json');
var NOK = require('../../mock/V00/dashboard/validateOtp/otp_error.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/dashboard/V00/validateOtp
/*se espera
{
  "otp": "12345678";
}
*/
router.post('/V00/validateOtp', function(req, res, next) {
  console.log(req.body);
  if (req.body.otp && req.body.otp=="12345678"){
    return res.json(OK);
  }
  return res.status(400).json(NOK);
  next();
});
// handler for query http://localhost:4000/dashboard/V00/validateOtp?otp=12345678
router.get('/V00/validateOtp', function(req, res, next) {
  console.log(req.params.otp);
  if (req.query.otp && req.query.otp=="12345678"){
    return res.json(OK);
  }
  return res.status(400).json(NOK);
  next();
});


module.exports = router;