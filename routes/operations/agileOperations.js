var express = require('express');
var moment = require('moment');
var fs = require("fs");
var path = require('path');
var router = express.Router();

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

var allowRecI = require('../../mock/V00/operations/allowAgileOperations/allowAgileOpe_RECURRING_I.json');
var allowRecT = require('../../mock/V00/operations/allowAgileOperations/allowAgileOpe_RECURRING_T.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/operations/V00/allowAgileOperations?agileOperationType=RECURRING&transferType=THIRD_PARTY
router.get('/V00/allowAgileOperations', function(req, res, next) {

  var tsec = req.headers['tsec'];
    if (tsec === '1234567890'){
      if (req.query.agileOperationType === 'RECURRING' && req.query.transferType === 'THIRD_PARTY')
        return res.json(allowRecT);
      else if (req.query.agileOperationType === 'RECURRING' && req.query.transferType === 'INTERBANK')
        return res.json(allowRecI);
    }else 
      return res.status(400).json(errorAllow);
    next();
});

// handler for query http://localhost:4000/operations/V00/agileOperations?agileOperationType=
router.get('/V00/agileOperations', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if (tsec == '1234567890'){
     return res.status(500).json(ERROR);
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
            json.previousDate = previousDate;
            json.currentWeek=String(rn);
            json.currentDate=currentDate;
            delete json.nextDate;
            delete json.image;
          }else{
            // var cDate = moment(date);
            var nextDate = moment(date).add(1,'days').format('YYYY-MM-DD');
            var previousDate = moment(date).subtract(1,'days').format('YYYY-MM-DD');
            json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
            json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
            json.nextDate = nextDate;
            json.previousDate = previousDate;
            json.currentWeek=String(rn);
            json.currentDate=currentDate;
            delete json.image;
          }
          return res.json(json);
        }else{
          res.status(500).json(ERR_DATE03);
        }
        
      }else{
        var filePath = path.join(__dirname, urlJson2 + weekId + ".json");
        try {
          var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (weekId == 'init' || Number(weekId) <= 8){
            var len = 0;
            try {
              len = json.periodicsOperations.length;
            }catch(exa){}
            var currentDate = moment().format('YYYY-MM-DD'); 
            var nextDate = moment().add(6,'days').format('YYYY-MM-DD');
            if (weekId=='1'){
              currentDate = moment().add(7,'days').format('YYYY-MM-DD');
              nextDate = moment().add(13,'days').format('YYYY-MM-DD');
            }else if (weekId=='2'){
              currentDate = moment().add(14,'days').format('YYYY-MM-DD');
              nextDate = moment().add(20,'days').format('YYYY-MM-DD');
            }else if (weekId=='3'){
               currentDate = moment().add(21,'days').format('YYYY-MM-DD');
               nextDate = moment().add(27,'days').format('YYYY-MM-DD');
            }else if (weekId=='4'){
               currentDate = moment().add(28,'days').format('YYYY-MM-DD');
               nextDate = moment().add(34,'days').format('YYYY-MM-DD');
            }else if (weekId=='5'){
              currentDate = moment().add(35,'days').format('YYYY-MM-DD');
              nextDate = moment().add(41,'days').format('YYYY-MM-DD');
            }else if (weekId=='6'){
              currentDate = moment().add(42,'days').format('YYYY-MM-DD');
              nextDate = moment().add(48,'days').format('YYYY-MM-DD');
            }else if (weekId=='7'){
              currentDate = moment().add(49,'days').format('YYYY-MM-DD');
              nextDate = moment().add(55,'days').format('YYYY-MM-DD');
            }else if (weekId=='8'){
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
      if (tsec == '123456')
        return res.json(LISTA_RP);
      else if (tsec = '12345678')
        return res.json(LISTA_RP0);
      else
        return res.status(400).json(ERROR_RP);
    }
  return res.json(ERROR);
  next();
});

module.exports = router;