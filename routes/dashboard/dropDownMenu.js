var express = require('express');
var router = express.Router();
var DATA_01 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenu.json');
var DATA_02 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuPesos.json');
var DATA_03 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuTodo.json');
var DATA_04 = require('../../mock/V00/dashboard/dropDownMenu/dropDownTarjetaCredito.json');
var DATA_05 = require('../../mock/V00/dashboard/dropDownMenu/dropDownPesosFondosInversion.json');
var DATA_06 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenu_01.json');
var DATA_07 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuFondosInv_01.json');
var DATA_ALL = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenu_01_all.json');
var ERROR = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuError.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:4000/dashboard/V00/dashboard/dropDownMenu?typeProduct&page=page
router.get('/V00/dashboard/dropDownMenu/', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if(tsec === '' || tsec == 'null'){
    return res.json(DATA_03);
  }
  if (tsec === '1234567890'){
    return res.status(400).json(ERROR);
  }else if(tsec === '567890'){
    return res.json(DATA_06);
  }else if (tsec === '456789012'){
    return res.json(DATA_07);
  }else if(tsec === '123456789' && req.query.page=="posicionGlobal"){
    return res.json(DATA_ALL);
  }else{
    if(req.query.typeProduct=='tarjetasCredito'){
     return res.json(DATA_04);
    }else{    
      if(req.query.typeProduct==""&& req.query.page=="posicionGlobal"){
        return res.json(DATA_03);
      }else {
        if(req.query.typeProduct=='pesos'){
         return res.json(DATA_02);
        }else{
          if(req.query.typeProduct==""){
            return res.json(DATA_01);
          }else {
            }if(req.query.typeProduct==""&& req.query.page==""){
              return res.json(DATA_03);
          }else{
            return res.status(400).json(ERROR);
          }
        }
      }
    }
  }
	
  next();
  });

module.exports = router;