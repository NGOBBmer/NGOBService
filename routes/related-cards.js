var express = require('express');
var router = express.Router();


var related_cards = require('../mock/V00/cards/aditionals/aditionals.json');


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
  return res.json(related_cards);
});
module.exports = router;