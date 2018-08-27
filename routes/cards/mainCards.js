var express = require('express');
var moment = require('moment');
var fs = require("fs");
var path = require('path');
var router = express.Router();

//listCards
var card_4152313300116865 = require('../../mock/V00/cards/listCards/card_4152313300116865.json');
var card_4152313300116865 = require('../../mock/V00/cards/listCards/card_4152313300116865.json');
var card_sinCardType = require('../../mock/V00/cards/listCards/card_sinCardType.json');

//cardDetail
var CARD_DETAIL_NO_DATA = require('../../mock/V00/cards/cardDetail/card_detail_no_data.json');
var CARD_DETAIL_SERVICE_ERROR = require('../../mock/V00/cards/cardDetail/card_detail_service_error.json');
var urlJson = '../../mock/V00/cards/cardDetail/';
var CARD_DETAIL_NEW = require('../../mock/V00/cards/cardDetail/newTDC.json');

/* Welcome Kit */
var wkAzul = require('../../mock/V00/cards/welcomeKit/welcomeKit_Azul.json');
var wkOro = require('../../mock/V00/cards/welcomeKit/welcomeKit_Oro.json');
var error = require('../../mock/V00/cards/welcomeKit/welcomeKit_empty.json');

//Movements
var movements_TJ0001 = require('../../mock/V00/cards/movements/TJ0001.json');
var movements_TJ0001_next= require('../../mock/V00/cards/movements/TJ0001_next.json');
var movements_TJ0001_dates = require('../../mock/V00/cards/movements/TJ0001_dates.json');
var movements_TJ0001_dates_next = require('../../mock/V00/cards/movements/TJ0001_dates_next.json');
var movements_1107368912 = require('../../mock/V00/cards/movements/1107368912.json');
var movements_1107368912_next= require('../../mock/V00/cards/movements/1107368912_next.json');
var movements_default = require('../../mock/V00/cards/movements/default.json');
var movements_TJ0002 = require('../../mock/V00/cards/movements/TJ0002.json');
var movements_TJ0002_next = require('../../mock/V00/cards/movements/TJ0002_next.json');
var movements_TJ0003 = require('../../mock/V00/cards/movements/TJ0003.json');
var movements_TJ0003_next = require('../../mock/V00/cards/movements/TJ0003_next.json');
var movements_TJ0004 = require('../../mock/V00/cards/movements/TJ0004.json');
var movements_TJ0004_next = require('../../mock/V00/cards/movements/TJ0004_next.json');
var movements_TJ0005 = require('../../mock/V00/cards/movements/TJ0005.json');
var movements_TJ0005_next = require('../../mock/V00/cards/movements/TJ0005_next.json');
var movements_tdc01 = require('../../mock/V00/cards/movements/TDC01_2233.json');
var movements_err= require('../../mock/V00/cards/movements/movements_err.json');

//promotions
var CPS = require('../../mock/V00/cards/promotions/CPS/CPS.json');
var CPS_TCMXP0000002 = require('../../mock/V00/cards/promotions/CPS/CPS_TCMXP0000002.json');
var CPS_TCMXP0000003 = require('../../mock/V00/cards/promotions/CPS/CPS_TCMXP0000003.json');
var CPS_TCMXP0000004 = require('../../mock/V00/cards/promotions/CPS/CPS_TCMXP0000004.json');
var CPS_TCMXP0000005 = require('../../mock/V00/cards/promotions/CPS/CPS_TCMXP0000005.json');
var CPS_pagination = require('../../mock/V00/cards/promotions/CPS/CPS_pagination.json');
var EFI = require('../../mock/V00/cards/promotions/EFI/EFI.json');
var EFI_TCMXP0000002 = require('../../mock/V00/cards/promotions/EFI/EFI_TCMXP0000002.json');
var EFI_TCMXP0000003 = require('../../mock/V00/cards/promotions/EFI/EFI_TCMXP0000003.json');
var EFI_TCMXP0000004 = require('../../mock/V00/cards/promotions/EFI/EFI_TCMXP0000004.json');
var EFI_TCMXP0000005 = require('../../mock/V00/cards/promotions/EFI/EFI_TCMXP0000005.json');
var EFI_pagination = require('../../mock/V00/cards/promotions/EFI/EFI_pagination.json');
var PPF = require('../../mock/V00/cards/promotions/PPF/PPF.json');
var PPF_TCMXP0000002 = require('../../mock/V00/cards/promotions/PPF/PPF_TCMXP0000002.json');
var PPF_TCMXP0000003 = require('../../mock/V00/cards/promotions/PPF/PPF_TCMXP0000003.json');
var PPF_TCMXP0000004 = require('../../mock/V00/cards/promotions/PPF/PPF_TCMXP0000004.json');
var PPF_TCMXP0000005 = require('../../mock/V00/cards/promotions/PPF/PPF_TCMXP0000005.json');
var PPF_pagination = require('../../mock/V00/cards/promotions/PPF/PPF_pagination.json');
var PR_NO_DATA = require('../../mock/V00/cards/promotions/vacio.json');
var PR_ERROR = require('../../mock/V00/cards/promotions/promotions_error.json');
var CPS_01 = require('../../mock/V00/cards/promotions/CPS/CPS_01.json');
var CPS_02 = require('../../mock/V00/cards/promotions/CPS/CPS_02.json');
var CPS_03 = require('../../mock/V00/cards/promotions/CPS/CPS_03.json');

//relatedCards
var related_cards01 = require('../../mock/V00/cards/aditionals/aditionals_01.json');
var related_cards02 = require('../../mock/V00/cards/aditionals/aditionals_02.json');
var related_cards03 = require('../../mock/V00/cards/aditionals/aditionals_03.json');
var related_cards04 = require('../../mock/V00/cards/aditionals/aditionals_04.json');
var related_cards05 = require('../../mock/V00/cards/aditionals/aditionals_05.json');
var related_cards06 = require('../../mock/V00/cards/aditionals/aditionals_06.json');
var related_cards_error = require('../../mock/V00/cards/aditionals/aditionals_error.json');

//periods EDC
var TCMXP0000001 = require('../../mock/V00/cards/periods/TCMXP0000001.json');
var TCMXP0000001_next = require('../../mock/V00/cards/periods/TCMXP0000001_next.json');
var TCMXP0000002 = require('../../mock/V00/cards/periods/TCMXP0000002.json');
var TCMXP0000002_next = require('../../mock/V00/cards/periods/TCMXP0000002_next.json');
var TCMXP0000003 = require('../../mock/V00/cards/periods/TCMXP0000003.json');
var AS_NO_DATA = require('../../mock/V00/cards/periods/periods_error_sinperiodos.json');
var AS_ERROR_ID = require('../../mock/V00/cards/periods/periods_error_id.json');

//accountStatements
var PERIOD0001 = require('../../mock/V00/cards/accountstatement/PERIOD0001.json');
var PERIOD0002 = require('../../mock/V00/cards/accountstatement/PERIOD0002.json');
var PERIOD0003 = require('../../mock/V00/cards/accountstatement/PERIOD0003.json');
var PERIOD0004 = require('../../mock/V00/cards/accountstatement/PERIOD0004.json');
var PERIOD0005_XML = require('../../mock/V00/cards/accountstatement/PERIOD0005XML.json');
var AS_NO_DATA = require('../../mock/V00/cards/accountstatement/accountstatement_error_sinperiodos.json');
var AS_ERROR_ID = require('../../mock/V00/cards/accountstatement/accountstatement_error_id.json');

//sendAccountStatement
var PERIOD0001 = require('../../mock/V00/cards/sendAccountStatement/PERIOD0001.json');
var PERIOD0002 = require('../../mock/V00/cards/sendAccountStatement/PERIOD0002.json');
var PERIOD0003 = require('../../mock/V00/cards/sendAccountStatement/PERIOD0003.json');
var PERIOD0004 = require('../../mock/V00/cards/sendAccountStatement/PERIOD0004.json');
var AS_NO_DATA = require('../../mock/V00/cards/sendAccountStatement/error_sin_edc.json');
var AS_ERROR_ID = require('../../mock/V00/cards/sendAccountStatement/error_id.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.get('/', function(req, res, next) {
  res.render('cards', { title: '' });
});

// handler for query http://localhost:3000/cards/V00/cards?cardType=CREDIT_CARD
router.get('/V00/cards', function(req, res, next) {
	if(req.query && req.query.cardType){
	    if (req.query && req.query.cardType== 'CREDIT_CARD')  {
	      res.json(card_4152313300116865);
	    }
	    if (req.query && req.query.cardType!= 'CREDIT_CARD' || req.query.cardType==null)  {
	      res.json(card_sinCardType);
	    }
    
  	}else{
  		return res.json(card_sinCardType);
  	}
});

// handler for params http://localhost:3001/cards/V00/cards/TCMXP0000003
router.get('/V00/cards/:id', function(req, res, next) {
  var cutOffDate = '';
  var paymentDate = '';
  var flag = false;
  var tsec = req.headers['tsec'];
  if(tsec === '12345678'){
      if (req.params && req.params.id == 'TCMXP0000001')  {
        return res.json(CARD_DETAIL_NEW);
      }
  }
  if(tsec === '045678'){
    return res.json(CARD_DETAIL_SERVICE_ERROR);
  }
  if (req.params && req.params.id) {
    if (req.params && req.params.id) {
      if (req.params && req.params.id == 'TCMXP0000001') {
        flag = true;
        cutOffDate = moment().add(20,'days').format('YYYY-MM-DD');
        paymentDate = moment();
      }
      else if (req.params && req.params.id == 'TCMXP0000002') {
        flag = true;
        cutOffDate = moment().add(14,'days').format('YYYY-MM-DD');
        paymentDate = moment().subtract(4,'days').format('YYYY-MM-DD');
      }
      else if (req.params && req.params.id == 'TCMXP0000003') {
        flag = true;
        cutOffDate = moment().add(10,'days').format('YYYY-MM-DD');
        paymentDate = moment().add(5,'days').format('YYYY-MM-DD');
      }
      else if (req.params && req.params.id == 'TCMXP0000004') {
        flag = true;
        cutOffDate = moment().add(11,'days').format('YYYY-MM-DD');
        paymentDate = moment().add(2,'days').format('YYYY-MM-DD');
      }
      else if (req.params && req.params.id == 'TCMXP0000005') {
        flag = true;
        cutOffDate = moment().add(5,'days').format('YYYY-MM-DD');
        paymentDate = moment().subtract(5,'days').format('YYYY-MM-DD');
      }
       else if (req.params && req.params.id == 'TCMXP0000006') {
        flag = true;
        cutOffDate = moment().add(3,'days').format('YYYY-MM-DD');
        paymentDate = moment().subtract(4,'days').format('YYYY-MM-DD');
      }
    }
    if (flag){
      var currentDate = moment().format('YYYY-MM-DD');
      var filePath = path.join(__dirname, urlJson + req.params.id + ".json");
      var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      json.data.cutOffDate = cutOffDate;
      json.data.paymentMethod.endDate = paymentDate;
      json.data.currentDate=currentDate;
      flag = false;
      return res.json(json);
    }else{
      flag = false;
      return res.json(CARD_DETAIL_NO_DATA);
    }
    return res.json(CARD_DETAIL_SERVICE_ERROR);
  }
  next();
});

// handler for /V00/cards/movements/TCMXP0000001?additionalCardId=TJ0001&paginationKey=&initialDate=&finalDate=&numMovements&period=
router.get('/V00/cards/movements/:id', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec === '1234567890'){
         return res.status(400).json(movements_err);
    }
   // setTimeout(function() {
        if (req.query.additionalCardId){
            if (req.query.additionalCardId == 'TJ0001') {
                if (req.query.paginationKey && req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates_next);
                } else if (req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates);
                }else if (req.query.paginationKey) {
                    return res.json(movements_TJ0001_next);
                } else{
                    return res.json(movements_TJ0001);
                }
            } else if (req.query.additionalCardId == 'TJ0000') {
                return res.json(movements_1107368912);
            } else if (req.query.additionalCardId == 'TJ0002') {
                return res.json(movements_1107368912_next);
            } else {
                return res.json(movements_default);
            }
        }else{
            if (req.params.id == 'TCMXP0000001'){
                if (tsec === '2233445566'){
                    return res.json(movements_tdc01);
                }else{
                    if (req.query.paginationKey && req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates_next);
                } else if (req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_next);
                }else if (req.query.paginationKey) {
                    return res.json(movements_TJ0001_next);
                } else{
                    return res.json(movements_tdc01);
                }
              } 
            }
            if (req.params.id == 'TCMXP0000002'){
                 if (req.query.paginationKey && req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates_next);
                } else if (req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0002_next);
                }else if (req.query.paginationKey) {
                    return res.json(movements_TJ0002_next);
                } else{
                    return res.json(movements_TJ0002);
                }
            }
             if (req.params.id == 'TCMXP0000003'){
                 if (req.query.paginationKey && req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates_next);
                } else if (req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0003_next);
                }else if (req.query.paginationKey) {
                    return res.json(movements_TJ0003_next);
                } else{
                    return res.json(movements_TJ0003);
                }
            }
            if (req.params.id == 'TCMXP0000004'){
                 if (req.query.paginationKey && req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates_next);
                } else if (req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0004_next);
                }else if (req.query.paginationKey) {
                    return res.json(movements_TJ0004_next);
                } else{
                    return res.json(movements_TJ0004);
                }
            }
            if (req.params.id == 'TCMXP0000005'){
                 if (req.query.paginationKey && req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates_next);
                } else if (req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0005_next);
                }else if (req.query.paginationKey) {
                    return res.json(movements_TJ0005_next);
                } else{
                    return res.json(movements_TJ0005);
                }
            }
            if (req.params.id == 'TCMXP0000006'){
                 if (req.query.paginationKey && req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0001_dates_next);
                } else if (req.query.initialDate && req.query.finalDate) {
                    return res.json(movements_TJ0003_next);
                }else if (req.query.paginationKey) {
                    return res.json(movements_TJ0003_next);
                } else{
                    return res.json(movements_TJ0003);
                }
            }
             return res.json(movements_default);
        }
        return res.json(movements_default);
        next();
    // }, 21000); // 21 segundos 
});

// handler for query http://localhost:4000/cards/V00/cards/welcomeKit/TCMXP0000002
router.get('/V00/cards/welcomeKit/:id', function(req, res, next) {
  var tsec = req.headers['tsec'];
   if(tsec == '12345'){
    return res.json(error);
  }
  if(req.params.id == 'TCMXP0000001'){  
    return res.json(wkOro);
  }else if(req.params.id != ''){  
    return res.json(wkAzul);
  }
    
});

// handler for /cards/TCMXP0000001/promotions?type=CPS&paginationKey=
router.get('/V00/cards/:id/promotions', function(req, res, next) {
if(req.params && req.params.id ){
  if (req.query.type== 'CPS'){
    if (req.params.id=='TCMXP0000001' && req.query.paginationKey=='')  {
      return res.json(CPS_01);
    }else if (req.params.id=='TCMXP0000002' && req.query.paginationKey=='')  {
      return res.json(CPS_TCMXP0000002);
    }else if (req.params.id=='TCMXP0000003' && req.query.paginationKey=='')  {
      return res.json(CPS_TCMXP0000003);
    }else if (req.params.id=='TCMXP0000004' && req.query.paginationKey=='')  {
      return res.json(CPS_TCMXP0000004);
    }else if (req.params.id=='TCMXP0000005')  {
      return res.json(CPS_TCMXP0000005);
    }else if (req.query.paginationKey=='10')  {
      return res.json(CPS_02);
    }else if (req.query.paginationKey=='20')  {
      return res.json(CPS_03);
    }
  }else  if (req.query && req.query.type== 'EFI'){
    if (req.params.id=='TCMXP0000001' && req.query.paginationKey=='')  {
      return res.json(EFI);
    }else if (eq.params.id=='TCMXP0000002' && req.query.paginationKey=='')  {
      return res.json(EFI_TCMXP0000002);
    }else if (req.params.id=='TCMXP0000003' && req.query.paginationKey=='')  {
      return res.json(EFI_TCMXP0000003);
    }else if (req.params.id=='TCMXP0000004' && req.query.paginationKey=='')  {
      return res.json(EFI_TCMXP0000004);
    }else if (req.params.id=='TCMXP0000005')  {
      return res.json(EFI_TCMXP0000005);
    }else if (req.query.paginationKey=='3413541135ASDVCCEDASSDA')  {
      return res.json(EFI_pagination);
    }
  }
  
  if (req.query && req.query.type== 'PPF' && req.params.id=='TCMXP0000001' && req.query.paginationKey=='')  {
    return res.json(PPF);
  }
  if (req.query && req.query.type== 'PPF' && req.params.id=='TCMXP0000002' && req.query.paginationKey=='')  {
    return res.json(PPF_TCMXP0000002);
  }
  if (req.query && req.query.type== 'PPF' && req.params.id=='TCMXP0000003' && req.query.paginationKey=='')  {
    return res.json(PPF_TCMXP0000003);
  }
  if (req.query && req.query.type== 'PPF' && req.params.id=='TCMXP0000004' && req.query.paginationKey=='')  {
    return res.json(PPF_TCMXP0000004);
  }
  if (req.query && req.query.type== 'PPF' && req.params.id=='TCMXP0000005')  {
    return res.json(PPF_TCMXP0000005);
  }
  if (req.query && req.query.type== 'PPF' && req.query.paginationKey=='3413541135ASDVCCEDASSDA')  {
    return res.json(PPF_pagination);
  }
  if (req.params.id=='TCMXP0000006'){
    return res.status(400).json(PR_ERROR);
  }
  return res.json(PR_NO_DATA);
}
  
  next();
});

router.get('/V00/cards/relatedCards/:id', function(req, res, next) {
    if (req.params.id == 'TCMXP0000001'){
        return res.json(related_cards01);
    }
    if (req.params.id == 'TCMXP0000002'){
        return res.json(related_cards02);
    }
    if (req.params.id == 'TCMXP0000003'){
        return res.json(related_cards03);
    }
    if (req.params.id == 'TCMXP0000004'){
        return res.json(related_cards04);
    }
    if (req.params.id == 'TCMXP0000005'){
        return res.json(related_cards05);
    }
    if (req.params.id == 'TCMXP0000006'){
        return res.json(related_cards06);
    }
    return res.json(related_cards_error);
    next();
});

// handler for query http://localhost:4000/cards/V00/cards/TCMXP0000001/periods?paginationKey=
router.get('/V00/cards/:id/periods/', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if(tsec === '045678'){
    return res.status(403).json(AS_NO_DATA);
  }else if(tsec === '12045678'){
    return res.status(403).json(AS_ERROR_ID);
  }
    if(req.params && req.params.id){
        if (req.params && req.params.id == 'TCMXP0000001')  {
        if (req.query.paginationKey != "" && req.query.paginationKey != null){
          return res.json(TCMXP0000001_next);
        }else{
          return res.json(TCMXP0000001);
        }
        }
      if (req.params && req.params.id == 'TCMXP0000002')  {
        if (req.query.paginationKey != "" && req.query.paginationKey != null){
          return res.json(TCMXP0000002_next);
        }else{
          return res.json(TCMXP0000002);
        }
      }
      if (req.params && req.params.id == 'TCMXP0000003')  {
        return res.json(TCMXP0000003);
      }
      if (req.params && req.params.id == 'TCMXP0000004')  {
        return res.status(400).json(AS_NO_DATA);
      }
      return res.status(400).json(AS_ERROR_ID);
    }
    next();
});

// handler for query http://localhost:3000/cards/V00/cards/TCMXP0000001/accountStatement?periodId=PERIOD0001&format=pdf
router.get('/V00/cards/:id/accountStatement/', function(req, res, next) {
    if(req.params && req.params.id){
    if (req.query.format === 'xml'){
      return res.json(PERIOD0005_XML);
    }else if (req.params && req.query.periodId == 'PERIOD0001')  {
        return res.json(PERIOD0001);
        }
      if (req.params && req.query.periodId == 'PERIOD0002')  {
        return res.json(PERIOD0002);
      }
      if (req.params && req.query.periodId == 'PERIOD0003')  {
        return res.json(PERIOD0003);
      }
      if (req.params && req.query.periodId == 'PERIOD0004')  {
        return res.json(PERIOD0004);
      }
      if (req.params && req.params.id == 'PERIOD0005')  {
        return res.status(400).json(AS_NO_DATA);
      }
      return res.status(500).json(AS_ERROR_ID);
    }
    next();
});

// handler for query http://localhost:3000/cards/V00/cards/TCMXP0000001/sendAccountStatement
/* Object json in method post
  {
    "email": "userEmail@server.com",
    "pass": "userPass4Edc",
    "periodId": "PERIOD0001"
  }
*/
router.post('/V00/cards/:id/sendAccountStatement', function(req, res, next) {
  if (req.params && req.params.id) {
        if (req.params && req.params.id == 'TCMXP0000001')  {
          return res.json(PERIOD0001);
        }
    if (req.params && req.params.id == 'TCMXP0000002')  {
      return res.json(PERIOD0002);
    }
    if (req.params && req.params.id == 'TCMXP0000003')  {
      return res.json(PERIOD0003);
    }
    if (req.params && req.params.id == 'TCMXP0000004')  {
      return res.json(PERIOD0004);
    }
    if (req.params && req.params.id == 'TCMXP0000005')  {
      return res.status(400).json(AS_NO_DATA);
    }
    return res.status(500).json(AS_ERROR_ID);
    }
  next();
});

module.exports = router;