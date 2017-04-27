var express = require('express');
var router = express.Router();


var related_cards01 = require('../mock/V00/cards/aditionals/aditionals_01.json');
var related_cards02 = require('../mock/V00/cards/aditionals/aditionals_02.json');
var related_cards03 = require('../mock/V00/cards/aditionals/aditionals_03.json');
var related_cards04 = require('../mock/V00/cards/aditionals/aditionals_04.json');
var related_cards05 = require('../mock/V00/cards/aditionals/aditionals_05.json');
var related_cards06 = require('../mock/V00/cards/aditionals/aditionals_06.json');
var related_cards_error = require('../mock/V00/cards/aditionals/aditionals_error.json');

/* GET users listing. */
router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host||"*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
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
module.exports = router;