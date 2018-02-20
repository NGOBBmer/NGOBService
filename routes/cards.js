var express = require('express');
var router = express.Router();
var card_4152313300116865 = require('../mock/V00/cards/listCards/card_4152313300116865.json');
var card_4152313300116865 = require('../mock/V00/cards/listCards/card_4152313300116865.json');
var card_sinCardType = require('../mock/V00/cards/listCards/card_sinCardType.json');

/* Welcome Kit */
var wkAzul = require('../mock/V00/cards/welcomeKit/welcomeKit_Azul.json');
var wkOro = require('../mock/V00/cards/welcomeKit/welcomeKit_Oro.json');
var error = require('../mock/V00/cards/welcomeKit/welcomeKit_empty.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
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

// handler for query http://localhost:4000/cards/V00/cards/welcomeKit/TCMXP0000002
router.get('/V00/cards/welcomeKit/:id', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if(req.params.id == 'TCMXP0000001'){  
    return res.json(wkOro);
  }else if(req.params.id != ''){  
    return res.json(wkAzul);
  }else{
    return res.json(error);
  }
    
  });


module.exports = router;