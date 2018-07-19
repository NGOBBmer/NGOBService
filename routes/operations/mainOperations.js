var express = require('express');
var moment = require('moment');
var fs = require("fs");
var path = require('path');
var router = express.Router();

//actionalAdvice
var ADVISE = require('../../mock/V00/operations/actionalAdvice/actionalAdvice.json');
var ERROR = require('../../mock/V00/operations/actionalAdvice/error.json');
var VACIO = require('../../mock/V00/operations/actionalAdvice/actionalVacio.json');

var GEMAIL = require('../../mock/V00/operations/email/get_email.json');
var UEMAIL = require('../../mock/V00/operations/email/update_email.json');

//agileOperations
var LISTA_ALL = require('../../mock/V00/operations/agileOperations/lista_all.json');
var LISTA_PR = require('../../mock/V00/operations/agileOperations/lista_pr.json')
var LISTA_PR_VACIA = require('../../mock/V00/operations/agileOperations/lista_prVacia.json')

//var PR_EMPTY = require('../../mock/V00/operations/agileOperations/pr_empty.json');
var LISTA_RP = require('../../mock/V00/operations/agileOperations/lista_rp.json');
var LISTA_RP0 = require('../../mock/V00/operations/agileOperations/lista_rp_0.json');
var DATE = require('../../mock/V00/operations/agileOperations/lista_rp.json');
var ERROR = require('../../mock/V00/operations/agileOperations/error.json');
var ERROR_RP = require('../../mock/V00/operations/agileOperations/error_rp.json');
var ERR_DATE01 = require('../../mock/V00/operations/agileOperations/err_date01.json');
var ERR_DATE02 = require('../../mock/V00/operations/agileOperations/err_date02.json');
var ERR_DATE03 = require('../../mock/V00/operations/agileOperations/err_date03.json');
var ERR_WEEK01 = require('../../mock/V00/operations/agileOperations/err_week01.json');
var urlJson = '../../mock/V00/operations/agileOperations/date_01.json';
var urlJson2 = '../../mock/V00/operations/agileOperations/pr_';


var FAST_DETAIL_INTERBANK = require('../../mock/V00/operations/fast/fastDetailInterbank.json');
var FAST_DETAIL = require('../../mock/V00/operations/fast/fastDetail.json');
var FAST_ERROR = require('../../mock/V00/operations/fast/fastError.json');

//Mapa de semanas para agileOperations
var mapaWeek = ["init",
  "152232158154152156150157152147153160AB153AB3886000232",
  "152232158154152156150157152147153160AB153AB3886000332",
  "152232158154152156150157152147153160AB153AB3886000432",
  "152232158154152156150157152147153160AB153AB3886000532",
  "152232158154152156150157152147153160AB153AB3886000632",
  "152232158154152156150157152147153160AB153AB3886000732",
  "152232158154152156150157152147153160AB153AB3886000832",
  "152232158154152156150157152147153160AB153AB3886000932"
  ]

var allowIdCAO = ["185171156156153151149AB138AB308853002248",
  "185180149156152152155AB138AB391844660540",
  "183174148155151157155AB138AB130739645746",
  "186173150148148148155AB138AB422000611536",
  "184178155151155156149AB138AB277378065321",
  "190180157157150155152AB138AB89992730884",
  "854854849349200090155152AB138AB89992730884",
  "185180154152155154153AB138AB396476457079",
  "189175148152149153157AB138AB74041584375",
  "185176152154153155156AB138AB354657793374",
  "184175148156150156158AB138AB240828990894",
  "185178154151148149152AB138AB376301340661",
  "10745987348587BG348750937845MB456435",
  "187174187197182177176180190185169191200178173179174AB51AB95020857710",
  "185172151149148148152AB138AB313100318228"
  ];

//allowOperations
var allowRecI = require('../../mock/V00/operations/allowAgileOperations/allowAgileOpe_RECURRING_I.json');
var allowRecT = require('../../mock/V00/operations/allowAgileOperations/allowAgileOpe_RECURRING_T.json');
var allowRec01 = require('../../mock/V00/operations/allowAgileOperations/allow_Recurring_01.json');
var allowFastT = require('../../mock/V00/operations/allowAgileOperations/allowFastOpe_01.json');
var allowFastI = require('../../mock/V00/operations/allowAgileOperations/allowFastOpe_02.json');

//deleteAgileOperations
var OK = require('../../mock/V00/operations/deleteAgileOps/delete_01.json');
var ERROR = require('../../mock/V00/operations/deleteAgileOps/delete_err.json');
var DELETE_ERROR = require('../../mock/V00/operations/deleteAgileOps/deleteAgileOp_error.json');

//deleteActionalAdvice
var ADVISE_OK = require('../../mock/V00/operations/deleteActionalAdvice/ok.json');
var ADVISE_ERROR = require('../../mock/V00/operations/deleteActionalAdvice/error.json');

//Documents
var PDF = require('../../mock/V00/operations/documents/pdf.json');
var HTML = require('../../mock/V00/operations/documents/html.json');
var HTML_TC = require('../../mock/V00/operations/documents/html_tc.json');
var HTML_NOMOVS = require('../../mock/V00/operations/documents/html_nomovs.json');
var HTML_PRINT = require('../../mock/V00/operations/documents/html_print.json');
var XLS = require('../../mock/V00/operations/documents/xls.json');
var NOK = require('../../mock/V00/operations/documents/error.json');
var PDF_PG_01 = require('../../mock/V00/operations/documents/pdf_pg_01.json');
var PDF_PG_02 = require('../../mock/V00/operations/documents/pdf_pg_02.json');
var PDF_PG_03 = require('../../mock/V00/operations/documents/pdfImpresionPG.json');


//suggestedOperations
var SLISTA_ALL = require('../../mock/V00/operations/suggestedOperations/lista_all.json');
var SLISTA_TT = require('../../mock/V00/operations/suggestedOperations/lista_tt.json');
var SLISTA_TI = require('../../mock/V00/operations/suggestedOperations/lista_ti.json');
var SLISTA_TP = require('../../mock/V00/operations/suggestedOperations/lista_tp.json');
var SLISTA_PDS = require('../../mock/V00/operations/suggestedOperations/lista_pds.json');
var SLISTA_TCP = require('../../mock/V00/operations/suggestedOperations/lista_tcp.json');
var SLISTA_TCI = require('../../mock/V00/operations/suggestedOperations/lista_tci.json');
var SERROR = require('../../mock/V00/operations/suggestedOperations/error.json');

//createAgileOperations
var createAgileOp01 = require('../../mock/V00/operations/createAgileOperations/createAgileOp01.json');
var createAgileOpErr_01 = require('../../mock/V00/operations/createAgileOperations/createAgileOpErr_01.json');
var createAgileOpErr_02 = require('../../mock/V00/operations/createAgileOperations/createAgileOpErr_02.json');
var getId_createAgileOp01 = require('../../mock/V00/operations/createAgileOperations/getId_createAgileOp_01.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec,otp');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/operations/V00/actionalAdvice
router.get('/V00/actionalAdvice', function(req, res, next) {

  var tsec = req.headers['tsec'];
  if(tsec === '123456' || tsec === '012345678'){
  
    return res.json(VACIO);
  }
    return res.json(ADVISE);
    return res.json(ERROR);
    
    next();
});

// handler for query http://localhost:4000/operations/V00/allowAgileOperations?agileOperationType=RECURRING&transferType=THIRD_PARTY
router.get('/V00/allowAgileOperations', function(req, res, next) {

  var tsec = req.headers['tsec'];
    if (tsec === '1234567890' || tsec === 'null'){
      if (req.query.agileOperationType === 'RECURRING' && req.query.transferType === 'THIRD_PARTY')
        return res.json(allowRecT);
      else if (req.query.agileOperationType === 'RECURRING' && req.query.transferType === 'INTERBANK')
        return res.json(allowRecI);
      else if (req.query.agileOperationType === 'FAST' && req.query.transferType === 'THIRD_PARTY')
        return res.json(allowFastT);
      else if (req.query.agileOperationType === 'FAST' && req.query.transferType === 'INTERBANK')
        return res.json(allowFastI);
    }else {
      if ((tsec === '34567890' || tsec === 'null') && req.query.agileOperationType === 'RECURRING' && req.query.transferType === 'INTERBANK')
        return res.json(allowRec01);
      else if (req.query.agileOperationType === 'RECURRING' && req.query.transferType === 'THIRD_PARTY')
        return res.json(allowRecT);
      else if (req.query.agileOperationType === 'RECURRING' && req.query.transferType === 'INTERBANK')
        return res.json(allowRecI);
      else if (req.query.agileOperationType === 'FAST' && req.query.transferType === 'THIRD_PARTY')
        return res.json(allowFastT);
      else if (req.query.agileOperationType === 'FAST' && req.query.transferType === 'INTERBANK')
        return res.json(allowFastI);
      else
        return res.status(400).json(errorAllow);
    }

    next();
});

// handler for query http://localhost:4000/operations/V00/agileOperations?agileOperationType=ALL_RS&weekId=init
router.get('/V00/agileOperations', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if ((tsec == '034942') && req.query.agileOperationType === 'FAST'){
     return res.status(406).json(ERROR);
  }else if (tsec == '1234567890'){
     return res.status(400).json(ERROR);
  }else{
    if (req.query.agileOperationType === 'ALL')
      return res.json(LISTA_ALL);
   else if (tsec == '12347823'){
     return res.json(LISTA_PR_VACIA);
   }else if (req.query.agileOperationType === 'ALL_RS'){
      var weekId = req.query.weekId;
      var date = req.query.date;
      
      if (date != undefined && date != ''){
        var currentDate = moment().format('YYYY-MM-DD');
        var endDate = moment().add(9,'weeks');
        endDate = moment(endDate).subtract(4,'days').format('YYYY-MM-DD');
        var cDate = moment(date);
        var rn = Math.floor((Math.random() * 8) + 1);;
        if (!isNaN(cDate)) {
          var filePath = path.join(__dirname, urlJson);
          var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (date < currentDate){
            return res.status(500).json(ERR_DATE01);
          }else if (date > endDate){
            return res.status(500).json(ERR_DATE02);
          }else if (date === currentDate){
            var nextDate = moment(date).add(1,'days').format('YYYY-MM-DD');
            delete json.periodicsOperations;
            json.nextDate = nextDate;
            json.total.amount.amount=0;
            json.currentWeek='init';
            json.currentDate=currentDate;
            delete json.previousDate;
          }else if (date === endDate){
            var previousDate = moment(date).subtract(1,'days').format('YYYY-MM-DD');
            json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
            json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
            delete json.periodicsOperations[2];
            delete json.periodicsOperations[3];
            json.previousDate = previousDate;
            json.currentWeek=String(rn);
            json.currentDate=currentDate;
            delete json.nextDate;
            delete json.image;
          }else{
            // var cDate = moment(date);
            var ran = Math.floor((Math.random() * 4) + 1);
            var nextDate = moment(date).add(1,'days').format('YYYY-MM-DD');
            var previousDate = moment(date).subtract(1,'days').format('YYYY-MM-DD');
            if (ran === 1){
               json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
               json.periodicsOperations.splice(1,1);
               json.periodicsOperations.splice(1,1);
               json.periodicsOperations.splice(1,1);
            }else if (ran === 2){
              json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations[2].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations.splice(1,3);
            }else if (ran === 3){
              json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations.splice(1,1);
              json.periodicsOperations.splice(1,1);
            }else{
              json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations[2].operationDate = moment(date).format('YYYY-MM-DD');
              json.periodicsOperations[3].operationDate = moment(date).format('YYYY-MM-DD');
            }
            
            json.nextDate = nextDate;
            json.previousDate = previousDate;
            json.currentWeek=String(rn);
            json.currentDate=currentDate;
            delete json.image;
          }
          return res.json(json);
        }else{
          res.status(400).json(ERR_DATE03);
        }
        
      }else{
        var week = '';
        for (var i = 0; i< mapaWeek.length; i++){
          if (weekId == mapaWeek[i]){  
            week = i + 1;
          }
        }
        if (week == 1){
          week = 'init';
        }
        var weekRan = '';
        if (tsec === '123456'){
          weekRan = week;
        }else{
          var ran = Math.floor((Math.random() * 8) + 1);;
        
          if (ran == 1){
            weekRan = 'init';
          }else{
            weekRan = ran;
          }
        }
        
        var filePath = path.join(__dirname, urlJson2 + weekRan + ".json");
        try {
          var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (week == 'init' || Number(week) <= 9){
            var len = 0;
            try {
              len = json.periodicsOperations.length;
            }catch(exa){}
            var currentDate = moment().format('YYYY-MM-DD'); 
            var nextDate = moment().add(6,'days').format('YYYY-MM-DD');
            if (week=='2'){
              currentDate = moment().add(7,'days').format('YYYY-MM-DD');
              nextDate = moment().add(13,'days').format('YYYY-MM-DD');
            }else if (week=='3'){
              currentDate = moment().add(14,'days').format('YYYY-MM-DD');
              nextDate = moment().add(20,'days').format('YYYY-MM-DD');
            }else if (week=='4'){
               currentDate = moment().add(21,'days').format('YYYY-MM-DD');
               nextDate = moment().add(27,'days').format('YYYY-MM-DD');
            }else if (week=='5'){
               currentDate = moment().add(28,'days').format('YYYY-MM-DD');
               nextDate = moment().add(34,'days').format('YYYY-MM-DD');
            }else if (week=='6'){
              currentDate = moment().add(35,'days').format('YYYY-MM-DD');
              nextDate = moment().add(41,'days').format('YYYY-MM-DD');
            }else if (week=='7'){
              currentDate = moment().add(42,'days').format('YYYY-MM-DD');
              nextDate = moment().add(48,'days').format('YYYY-MM-DD');
            }else if (week=='8'){
              currentDate = moment().add(49,'days').format('YYYY-MM-DD');
              nextDate = moment().add(55,'days').format('YYYY-MM-DD');
            }else if (week=='9'){
              currentDate = moment().add(56,'days').format('YYYY-MM-DD');
              nextDate = moment().add(59,'days').format('YYYY-MM-DD');
            }

            for(i = 0; i < len; i++){
              if (i==0){
                json.periodicsOperations[i].operationDate = moment(currentDate).format('YYYY-MM-DD');
              }else if (i%2==0){
                json.periodicsOperations[i].operationDate = moment(currentDate).add(2,'days').format('YYYY-MM-DD');
              }else{
                json.periodicsOperations[i].operationDate = moment(currentDate).add(3,'days').format('YYYY-MM-DD');
              } 
            }
          }      
        } catch(ex){
          return res.status(500).json(ERR_WEEK01);
        }
        json.initialDate=currentDate;
        json.finalDate=nextDate;
        return res.json(json);
      }
      // return res.json(LISTA_PR);
    }else if (req.query.agileOperationType === 'FAST')
      if (tsec === 'null' || tsec == '123456')
        return res.json(LISTA_RP);
      else if (tsec = '12345678')
        return res.json(LISTA_RP0);
      else
        return res.status(400).json(ERROR_RP);
    }
  return res.json(ERROR);
  next();
});

// handler for query http://localhost:4000/operations/V00/deleteAgileOperations/PR0001?agileOperationType=RECURRING
router.get('/V00/deleteAgileOperations/:id', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if(req.params.id !== '0001' && req.query.agileOperationType === 'RECURRING')
    return res.json(OK);
  else if((tsec === 'null' || tsec === '123456') && req.query.agileOperationType === 'RECURRING')
   return res.status(409).json(DELETE_ERROR);
  if ((tsec === 'null') && req.query.agileOperationType === 'RECURRING' || req.query.agileOperationType === 'SCHEDULED')
    return res.json(OK);
  else if (req.query.agileOperationType === 'FAST')
    return res.json(OK);
  
  return res.status(409).json(ERROR);
  next();
});

// handler for query http://localhost:4000/operations/V00/actionalAdvice
router.get('/V00/deleteActionalAdvice', function(req, res, next) {
  if(req.query.adviceId != null && req.query.adviceId != ''){
    return res.json(ADVISE_OK);
  }else{
    return res.json(ADVISE_ERROR);
  }
  next();
});

// handler for query http://localhost:4000/operations/V00/getPDFDocuments
/*se espera

{
  "productId": "CHMXP0000001",
  "businessFlow": "MOVEMENTS",
  "operationType": "",
  "type": "pdf","html","xls"
}

*/
router.post('/V00/getPDFDocuments', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if (tsec == '12345678'){
    return res.json(PDF_PG_02);
  }else  if (tsec == '3456789'){
    return res.json(PDF_PG_03); 
  }
  if (req.body.type=="pdf"){
    if(tsec == 'null' && req.body.businessFlow=="pg" || req.body.businessFlow=="PG"){
      return res.json(PDF_PG_01);
    }else {
     return res.json(PDF);
    }
  }else if (req.body.type=="html"){
    if (req.body.productId=="TCMXP0000001")
      return res.json(HTML_TC);
    else if (req.body.productId=="CHMXP0000001")
      return res.json(HTML);
    else
      return res.json(HTML_NOMOVS);
  }
  else if (req.body.type=="xls"){
    return res.json(XLS);
  }
  return res.status(400).json(NOK);
  next();
});

// handler for query http://localhost:4000/operations/V00/suggestedOperations?suggestedOperationType=
router.get('/V00/suggestedOperations', function(req, res, next) {
  if (req.query.suggestedOperationType === 'all')
    return res.json(SLISTA_ALL);
  else if (req.query.suggestedOperationType === 'TT'){
  return res.json(SLISTA_TT);
  }
  else if (req.query.suggestedOperationType === 'TI'){
    return res.json(SLISTA_TI);
  } 
  else if (req.query.suggestedOperationType === 'TP'){
    return res.json(SLISTA_TP);
  } else if (req.query.suggestedOperationType === 'PS'){
    return res.json(SLISTA_PDS);
  } else if (req.query.suggestedOperationType === 'TCP'){
    return res.json(SLISTA_TCP);
  } else if (req.query.suggestedOperationType === 'TCI'){
    return res.json(SLISTA_TCI);
  }
  return res.json(SERROR);
  next();
});

//createAgileOperations V00
router.post('/V00/createAgileOperations', function(req, res, next) {
  var otp = req.headers['otp']; 
  if ((otp == undefined || otp == '') && req.body.agileOperationType !=='QUICK'){
    return res.status(400).json(createAgileOpErr_02);
  }
  if (req.body.agileOperationType ==='REGISTER' || req.body.agileOperationType ==='REGISTER_FREQUENT'){
    if (otp === '00000000'){
       return res.status(400).json(createAgileOpErr_01);
    }
    if (allowIdCAO.indexOf(req.body.operationId) == -1){
      return res.status(400).json(createAgileOpErr_02);
    }
    return res.json(createAgileOp01); 
  }else if (req.body.agileOperationType ==='FREQUENT'){
     if (req.body.operationId !== '1234567890'){
      return res.status(400).json(createAgileOpErr_02); 
    }
    return res.json(createAgileOp01); 
  }else if (req.body.agileOperationType ==='QUICK'){
    if (req.body.operationId == '' || req.body.operationId == undefined  || req.body.sender === undefined){
      return res.status(400).json(createAgileOpErr_02); 
    }
    return res.json(createAgileOp01); 
  }else{
    return res.status(400).json(createAgileOpErr_01);
  }
  return res.status(400).json(createAgileOpErr_01);
  next();
});

router.get('/V00/getEmail', function(req, res, next) {
    return res.json(GEMAIL);
  next();
});

router.get('/V00/updateEmail', function(req, res, next) {
  if (req.query.newEmail != '')
    return res.json(UEMAIL);
  else
    return res.json(ERROR);
  next();
});

//createAgileOperations GetId
router.post('/V00/createAgileOperations/:action', function(req, res, next) {
  var otp = req.headers['otp'];
  if (req.params.action ==='getId' ){
    return res.json(getId_createAgileOp01);
  }
  return res.status(400).json(NOK);
  next();
});

//fastOperation
router.get('/V00/fastOperation', function(req, res, next) {


  if (tsec == '' || tsec == 'undefined'){
    return res.json(FAST_DETAIL);
  } else if(tsec.includes("fastThird")){
     return res.json(FAST_DETAIL);
  } else if(tsec.includes("fastInterBank")){
     return res.json(FAST_DETAIL_INTERBANK);
  } else if(tsec.includes("fastInterError")){
    return res.status(400).json(FAST_ERROR);
  } else {
     return res.json(FAST_DETAIL);
  }
  
  next();
});

module.exports = router;