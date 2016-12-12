var express = require('express');
var router = express.Router();
var card_4152313300116865 = require('../mock/V00/cards/card_4152313300116865.json');
/* GET users listing. */
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


router.get('/V00/cards', function(req, res, next) {
    res.json(card_4152313300116865);
  });


module.exports = router;