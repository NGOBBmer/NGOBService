var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');

var search_telmex = require('../../../mock/V00/payments/advancedSearch/search_telmex.json');
var search_telmex_0035241 = require('../../../mock/V00/payments/advancedSearch/search_telmex_0035241.json');
var search_telmex_0035241 = require('../../../mock/V00/payments/advancedSearch/search_telmex_0035241.json');
var search_telmex_0624101 = require('../../../mock/V00/payments/advancedSearch/search_telmex_0624101.json');
var search_telmex_0074172 = require('../../../mock/V00/payments/advancedSearch/search_telmex_0074172.json');
var search_CFE = require('../../../mock/V00/payments/advancedSearch/search_CFE.json');
var search_CFE_0039862 = require('../../../mock/V00/payments/advancedSearch/search_CFE_0039862.json');
var search_CFE_0578869 = require('../../../mock/V00/payments/advancedSearch/search_CFE_0578869.json');
var search_liverpool = require('../../../mock/V00/payments/advancedSearch/search_liverpool.json');
var search_liverpool_0084946 = require('../../../mock/V00/payments/advancedSearch/search_liverpool_0084946.json');
var search_liverpool_1207865 = require('../../../mock/V00/payments/advancedSearch/search_liverpool_1207865.json');
var search_palacio_de_hierro = require('../../../mock/V00/payments/advancedSearch/search_palacio_de_hierro.json');
var search_palacio_de_hierro_0516203 = require('../../../mock/V00/payments/advancedSearch/search_palacio_de_hierro_0516203.json');
var search_palacio_de_hierro_0516212 = require('../../../mock/V00/payments/advancedSearch/search_palacio_de_hierro_0516212.json');
var search_error = require('../../../mock/V00/payments/advancedSearch/search_error.json');
var search_no_encontrado = require('../../../mock/V00/payments/advancedSearch/search_no_encontrado.json');

var listAgreementsSponsors = require('../../../mock/V00/payments/listAgreements/istAgreementsSPONSORS.json');
var listAgreementsError  = require('../../../mock/V00/payments/listAgreements/listAgreementError.json');
var listAgreementsErrorTsec  = require('../../../mock/V00/payments/listAgreements/errorTsec.json');


router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host||"*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/payments/V00/advancedSearch?agreement=telemx
/*
* agreement: nombre o número del convenio
*/

router.get('/V00/advancedSearch', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var agreement = req.query.agreement;


  if(tsec!=null && tsec.includes("errorAdvancedSearch")){
    return res.status(400).json(search_error);

  } else if (agreement!=null && agreement!=undefined && agreement.length>1){
    if("telmex".includes(agreement.toLowerCase())){
      return res.json(search_telmex);
    
    } else if("0035241" === agreement){
      return res.json(search_telmex_0035241);

    } else if("0624101" === agreement){
      return res.json(search_telmex_0624101);
      
    } else if("0074172" === agreement){
      return res.json(search_telmex_0074172);
      
    } else if("cfe".includes(agreement.toLowerCase())){
      return res.json(search_CFE);
    
    } else if("0039862" === agreement){
      return res.json(search_CFE_0039862);
      
    } else if("0578869" === agreement){
      return res.json(search_CFE_0578869);
      
    } else if("liverpool".includes(agreement.toLowerCase())){
      return res.json(search_liverpool);
    
    } else if("0084946" === agreement){
      return res.json(search_liverpool_0084946);
      
    } else if("1207865" === agreement){
      return res.json(search_liverpool_1207865);
      
    } else if("palacio de hierro".includes(agreement.toLowerCase())){
      return res.json(search_palacio_de_hierro);
    
    } else if("0516203" === agreement){
      return res.json(search_palacio_de_hierro_0516203);
      
    } else if("0516212" === agreement){
      return res.json(search_palacio_de_hierro_0516212);
      
    } else {
      return res.json(search_no_encontrado);
      
    }
  } else {
    return res.json(search_no_encontrado);
  }

 

  next();
});

//payments/V00/listAgreements?type=SPONSORS
router.get('/V00/listAgreements', function(req, res, next) {
  var tsec = req.headers['tsec'];
  var type = req.query.type;


  if(tsec!=null && tsec.includes("errorListAgreements")){
    return res.status(400).json(search_error); 
    
  } else {
    return res.json(listAgreementsSponsors);
  }

  next();
});

module.exports = router;