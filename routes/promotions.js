var express = require('express');
var router = express.Router();

var CPS = require('../mock/V00/cards/promotions/CPS.json');
var EFI = require('../mock/V00/cards/promotions/EFI.json');
var PPF = require('../mock/V00/cards/promotions/PPF.json');


/* GET users listing. */
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



// handler for /cards/TCMXP0000001/promotions?type=CPS&paginationKey=
router.get('/V00/cards/:id/promotions', function(req, res, next) {
if(req.params && req.params.id ){

  if (req.query && req.query.type== 'CPS')  {
    return res.json(CPS);
  }
  if (req.query && req.query.type== 'EFI')  {
    return res.json(EFI);
  }
  if (req.query && req.query.type== 'PPF')  {
    return res.json(PPF);
  }
}
  
  next();
});

module.exports = router;
