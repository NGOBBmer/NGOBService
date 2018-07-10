var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
var QR_IMAGE = require('../../mock/V00/security/qr/qr_image.json');
var QR_ERROR = require('../../mock/V00/security/qr/qr_error.json');

//getRulesToken
var rules_s1 = require('../../mock/V00/security/getRulesToken/S1.json');
var rules_s2 = require('../../mock/V00/security/getRulesToken/S2.json');
var simple_validation = require('../../mock/V00/security/getRulesToken/simple_validation.json');
var ocra = '../../mock/V00/security/getRulesToken/ocra.json';
var rules_t7 = require('../../mock/V00/security/getRulesToken/T7.json');
var random_rules_t7 = '../../mock/V00/security/getRulesToken/T7.json';
var error_inst = require('../../mock/V00/security/getRulesToken/error_instrumento.json');
var error_rules = require('../../mock/V00/security/getRulesToken/error_rules.json');
var without_validation = require('../../mock/V00/security/getRulesToken/without_validation.json');
var random_rules_s12 = '../../mock/V00/security/getRulesToken/S1.json';
//validateFlow
var validateFlowNavigationOK = require('../../mock/V00/security/validateFlow/navigationOK.json');
var validateFlowUpdateNavigation = require('../../mock/V00/security/validateFlow/updateNavigation.json');
var validateFlowErrorTsec = require('../../mock/V00/security/validateFlow/error_tsec.json');
var validateFlowErrorOperation = require('../../mock/V00/security/validateFlow/error_operation.json');
var filesQR = '../../mock/V00/security/qr/qr_image.json';

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
 
 //Genera un json dinamico para cronto
  var random = (Math.floor(Math.random() * 3) + 1) - 1;
 
  var filePathCronto = path.join(__dirname, random_rules_t7);
  var jsonOpticalcronto = JSON.parse(fs.readFileSync(filePathCronto, 'utf8'));

  var filePathOcra = path.join(__dirname, ocra);
  var jsonOpticalOcra = JSON.parse(fs.readFileSync(filePathOcra, 'utf8'));

  var filePathSoftoken = path.join(__dirname, random_rules_s12);
  var jsonOpticalSoftoken = JSON.parse(fs.readFileSync(filePathSoftoken, 'utf8'));

  //Reglas para operación con token simple
  if(req.body.idOperation === 'TCT' || req.body.idOperation === 'TCI' || req.body.idOperation === 'EDOCTAINV' 
      || req.body.idOperation === 'EDOCTAFON' || req.body.idOperation === 'EDOCTACH'){
    if (tsec.includes("userInfoT7")){
      return res.json(jsonOpticalcronto[random]);
    } else if (tsec.includes("optValidationErr")){
      return res.status(400).json(error_rules);
    } else {
      return res.json(simple_validation);
    }
  
  //reglas para flujos donde no solicita token
  } else if(req.body.idOperation === 'EDOCTATDC' || req.body.idOperation === 'TCP'){
    if (tsec.includes("optValidationErr")){
      return res.status(400).json(error_rules);
    } else {
      return res.json(without_validation);
    }
  
  //reglas para validación optica
  } else if(req.body.idOperation === 'PREREG' ){
    if(tsec==undefined || tsec===''){
      return res.json(jsonOpticalSoftoken[random]);
    } else if (tsec.includes("userInfoS1")){
      return res.json(jsonOpticalSoftoken[random]);
    } else if (tsec.includes("userInfoS2")){
      return res.json(jsonOpticalSoftoken[random]);
    } else if (tsec.includes("userInfoT1")){
       return res.json(error_inst);
    } else if (tsec.includes("userInfoT3")){
       return res.json(error_inst);
    } else if (tsec.includes("userInfoT6")){
      return res.json(jsonOpticalOcra[random]);
    } else if (tsec.includes("userInfoT7")){
      return res.json(jsonOpticalcronto[random]);
    } else if (tsec.includes("optValidationErr")){
       return res.status(400).json(error_rules);
    } else {
      return res.json(userInfoS1);
    }
  
  // reglas especiales para retiro sin tarjeta en PG
  } else if(req.body.idOperation === 'RSTPG' ){
    if(tsec==undefined || tsec===''){
      return res.json(jsonOpticalSoftoken[random]);
    } else if (tsec.includes("userInfoS1")){
      return res.json(jsonOpticalSoftoken[random]);
    } else if (tsec.includes("userInfoS2")){
      return res.json(jsonOpticalSoftoken[random]);
    } else if (tsec.includes("userInfoT1")){
      return res.json(simple_validation);
    } else if (tsec.includes("userInfoT3")){
      return res.json(simple_validation);
    } else if (tsec.includes("userInfoT6")){
      return res.json(simple_validation);
    } else if (tsec.includes("userInfoT7")){
      return res.json(jsonOpticalcronto[random]);
    } else if (tsec.includes("optValidationErr")){
       return res.status(400).json(error_rules);
    } else {
      return res.json(userInfoS1);
    }
  
  //en caso de que el idOperation sea incorrecto
  } else {
    return res.status(400).json(validateFlowErrorOperation);
  }

  next();
});


//security/V00/validateFlow?idOperation=PREREG

router.get('/V00/validateFlow', function(req, res, next) {
  var tsec = req.headers['tsec'];

  if(req.query.idOperation === 'PREREG'){
    if(tsec==undefined || tsec===''){
      return res.json(validateFlowNavigationOK);
    } else if (tsec.includes("userInfoS1")){
      return res.json(validateFlowNavigationOK);
    } else if (tsec.includes("userInfoS2")){
      return res.json(validateFlowNavigationOK);
    } else if (tsec.includes("userInfoT1")){
      return res.json(validateFlowUpdateNavigation);
    } else if (tsec.includes("userInfoT3")){
      return res.json(validateFlowUpdateNavigation);
    } else if (tsec.includes("userInfoT6")){
      return res.json(validateFlowNavigationOK);
    } else if (tsec.includes("userInfoT7")){
      return res.json(validateFlowNavigationOK);
    } else if (tsec.includes("validateFlowErr")){
       return res.json(validateFlowErrorTsec);
    } else {
      return res.json(validateFlowNavigationOK);
    }
  }else {
    return res.status(400).json(validateFlowErrorOperation);
  }

  next();
});



module.exports = router;