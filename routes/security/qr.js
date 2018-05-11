var express = require('express');
var router = express.Router();

var QR_IMAGE = require('../../mock/V00/security/qr/qr_image.json');
var QR_ERROR = require('../../mock/V00/security/qr/qr_error.json');

//getRulesToken
var rules_s1 = require('../../mock/V00/security/getRulesToken/S1.json');
var rules_s2 = require('../../mock/V00/security/getRulesToken/S2.json');
var simple_validation = require('../../mock/V00/security/getRulesToken/simple_validation.json');
var ocra = require('../../mock/V00/security/getRulesToken/ocra.json');
var rules_t7 = require('../../mock/V00/security/getRulesToken/T7.json');
var error_inst = require('../../mock/V00/security/getRulesToken/error_instrumento.json');
var error_rules = require('../../mock/V00/security/getRulesToken/error_rules.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host||"*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/security/V00/getQR
/*se espera

{
  "type":"OPERATION"
}
*/
router.post('/V00/getQR', function(req, res, next) {

  if (req.body.type=="OPERATION"){
    return res.json(QR_IMAGE);
  } else if (req.body.type=="REGISTER"){
    return res.status(400).json(QR_ERROR);
  } 
  
  return res.status(500).json(QR_ERROR);
  
  next();
});

//security/V00/getOpticalValidation
/*{
  "idOperation": "RSTPG",
  "beneficiaryName": "",
  "beneficiaryAccount": ""
}*/
router.post('/V00/getOpticalValidation', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if(tsec == 'null' && req.body.idOperation === 'RSTPG'){
    return res.json(rules_s2);
  }else if(tsec === '123456789' && req.body.idOperation === 'RSTPG'){
    return res.json(rules_s1);
  } else if(tsec == undefined && req.body.idOperation === 'RSTPG'){
    return res.json(rules_s2);
  } else if(tsec === '890765' && req.body.idOperation === 'RSTPG'){
    return res.json(rules_t7);
  }else if(tsec === '18234' && req.body.idOperation === 'RSTPG'){
    return res.json(ocra);
  } else if(tsec === '556790' && req.body.idOperation === 'RSTPG'){
    return res.json(simple_validation);
  }else if(tsec === '34567' && req.body.idOperation === 'RSTPG'){
    return res.json(error_inst);
  }else if(req.body.idOperation === 'RSTPG'){
    return res.status(400).json(error_rules);
  }
 
  next();
});

module.exports = router;