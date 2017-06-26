var express = require('express');
var moment = require('moment');
var fs = require("fs");
var path = require('path');
var router = express.Router();

var LISTA_ALL = require('../../mock/V00/operations/agileOperations/lista_all.json');
var LISTA_PR = require('../../mock/V00/operations/agileOperations/lista_pr.json');
var LISTA_RP = require('../../mock/V00/operations/agileOperations/lista_rp.json');
var DATE = require('../../mock/V00/operations/agileOperations/lista_rp.json');
var ERROR = require('../../mock/V00/operations/agileOperations/error.json');
var ERR_DATE01 = require('../../mock/V00/operations/agileOperations/err_date01.json');
var ERR_DATE02 = require('../../mock/V00/operations/agileOperations/err_date02.json');
var ERR_DATE03 = require('../../mock/V00/operations/agileOperations/err_date03.json');
var ERR_WEEK01 = require('../../mock/V00/operations/agileOperations/err_week01.json');
var urlJson = '../../mock/V00/operations/agileOperations/date_01.json';
var urlJson2 = '../../mock/V00/operations/agileOperations/pr_';

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/operations/V00/agileOperations?agileOperationType=
router.get('/V00/agileOperations', function(req, res, next) {
  if (req.query.agileOperationType === 'ALL')
  	return res.json(LISTA_ALL);
  else if (req.query.agileOperationType === 'RECURRING'){
    var weekId = req.query.weekId;
    var date = req.query.date;
    
    if (date != undefined && date != ''){
      var currentDate = moment().format('YYYY-MM-DD');
      var endDate = moment().add(8,'weeks');
      endDate = endDate.subtract(1,'days').format('YYYY-MM-DD');
     
      // cDate = moment().add(1,'days').format('YYYY-MM-DD');
      var cDate = moment(date);
      if (!isNaN(cDate)) {
        var filePath = path.join(__dirname, urlJson);
        var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (date < currentDate){
          return res.status(500).json(ERR_DATE01);
        }else if (date > endDate){
          return res.status(500).json(ERR_DATE02);
        }else if (date === currentDate){
          var nextDate = moment(date).add(1,'days').format('YYYY-MM-DD');
          json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
          json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
          json.nextDate = nextDate;
          delete json.previousDate;
        }else if (date === endDate){
          var previousDate = moment(date).subtract(1,'days').format('YYYY-MM-DD');
          json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
          json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
          json.previousDate = previousDate;
          delete json.nextDate;
        }else{
          // var cDate = moment(date);
          var nextDate = moment(date).add(1,'days').format('YYYY-MM-DD');
          var previousDate = moment(date).subtract(1,'days').format('YYYY-MM-DD');
          json.periodicsOperations[0].operationDate = moment(date).format('YYYY-MM-DD');
          json.periodicsOperations[1].operationDate = moment(date).format('YYYY-MM-DD');
          json.nextDate = nextDate;
          json.previousDate = previousDate;
        }
        return res.json(json);
      }else{
        res.status(500).json(ERR_DATE03);
      }
      
    }else{
      var filePath = path.join(__dirname, urlJson2 + weekId + ".json");
      try {
        var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      } catch(ex){
         return res.status(500).json(ERR_WEEK01);
      }
      return res.json(json);
    }
  	// return res.json(LISTA_PR);
  }
  else if (req.query.agileOperationType === 'FAST')
  	return res.json(LISTA_RP);

  return res.json(ERROR);
  next();
});

module.exports = router;