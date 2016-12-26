var express = require('express');
var router = express.Router();

var CPS = require('../mock/V00/cards/promotions/CPS/CPS.json');
var CPS_TCMXP0000002 = require('../mock/V00/cards/promotions/CPS/CPS_TCMXP0000002.json');
var CPS_TCMXP0000003 = require('../mock/V00/cards/promotions/CPS/CPS_TCMXP0000003.json');
var CPS_TCMXP0000004 = require('../mock/V00/cards/promotions/CPS/CPS_TCMXP0000004.json');
var CPS_pagination = require('../mock/V00/cards/promotions/CPS/CPS_pagination.json');
var EFI = require('../mock/V00/cards/promotions/EFI/EFI.json');
var EFI_TCMXP0000002 = require('../mock/V00/cards/promotions/EFI/EFI_TCMXP0000002.json');
var EFI_TCMXP0000003 = require('../mock/V00/cards/promotions/EFI/EFI_TCMXP0000003.json');
var EFI_TCMXP0000004 = require('../mock/V00/cards/promotions/EFI/EFI_TCMXP0000004.json');
var EFI_pagination = require('../mock/V00/cards/promotions/EFI/EFI_pagination.json');
var PPF = require('../mock/V00/cards/promotions/PPF/PPF.json');
var PPF_TCMXP0000002 = require('../mock/V00/cards/promotions/PPF/PPF_TCMXP0000002.json');
var PPF_TCMXP0000003 = require('../mock/V00/cards/promotions/PPF/PPF_TCMXP0000003.json');
var PPF_TCMXP0000004 = require('../mock/V00/cards/promotions/PPF/PPF_TCMXP0000004.json');
var PPF_pagination = require('../mock/V00/cards/promotions/PPF/PPF_pagination.json');
var PR_NO_DATA = require('../mock/V00/cards/promotions/vacio.json');


/* GET users listing. */
router.use(function (req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



// handler for /cards/TCMXP0000001/promotions?type=CPS&paginationKey=
router.get('/V00/cards/:id/promotions', function(req, res, next) {
if(req.params && req.params.id ){

  if (req.query && req.query.type== 'CPS' && req.params.id=='TCMXP0000001' && req.query.paginationKey=='')  {
    return res.json(CPS);
  }
  if (req.query && req.query.type== 'CPS' && req.params.id=='TCMXP0000002' && req.query.paginationKey=='')  {
    return res.json(CPS_TCMXP0000002);
  }
  if (req.query && req.query.type== 'CPS' && req.params.id=='TCMXP0000003' && req.query.paginationKey=='')  {
    return res.json(CPS_TCMXP0000003);
  }
  if (req.query && req.query.type== 'CPS' && req.params.id=='TCMXP0000004' && req.query.paginationKey=='')  {
    return res.json(CPS_TCMXP0000004);
  }
  if (req.query && req.query.type== 'CPS' && req.query.paginationKey=='3413541135ASDVCCEDASSDA')  {
    return res.json(CPS_pagination);
  }
  if (req.query && req.query.type== 'EFI' && req.params.id=='TCMXP0000001' && req.query.paginationKey=='')  {
    return res.json(EFI);
  }
  if (req.query && req.query.type== 'EFI' && req.params.id=='TCMXP0000002' && req.query.paginationKey=='')  {
    return res.json(EFI_TCMXP0000002);
  }
  if (req.query && req.query.type== 'EFI' && req.params.id=='TCMXP0000003' && req.query.paginationKey=='')  {
    return res.json(EFI_TCMXP0000003);
  }
  if (req.query && req.query.type== 'EFI' && req.params.id=='TCMXP0000004' && req.query.paginationKey=='')  {
    return res.json(EFI_TCMXP0000004);
  }
  if (req.query && req.query.type== 'EFI' && req.query.paginationKey=='3413541135ASDVCCEDASSDA')  {
    return res.json(EFI_pagination);
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
  if (req.query && req.query.type== 'PPF' && req.query.paginationKey=='3413541135ASDVCCEDASSDA')  {
    return res.json(PPF_pagination);
  }
  return res.json(PR_NO_DATA);
}
  
  next();
});

module.exports = router;
