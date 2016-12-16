var express = require('express');
var router = express.Router();
var card_4152313300116865 = require('../mock/V00/cards/listCards/card_4152313300116865.json');
var card_4152313300116865 = require('../mock/V00/cards/listCards/card_4152313300116865.json');
var card_sinCardType = require('../mock/V00/cards/listCards/card_sinCardType.json');

/* GET users listing. */
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    
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


module.exports = router;