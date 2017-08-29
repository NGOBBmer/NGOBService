var express = require('express');
var router = express.Router();
var AHMXP0000001 = require('../../mock/V00/accounts/periods/AHMXP0000001.json');
var AHMXP0000001_next = require('../../mock/V00/accounts/periods/AHMXP0000001_next.json');
var CHUSD0000001 = require('../../mock/V00/accounts/periods/CHUSD0000001.json');
var CHUSD0000001_next = require('../../mock/V00/accounts/periods/CHUSD0000001_next.json');
var CHEUR0000001 = require('../../mock/V00/accounts/periods/CHEUR0000001.json');
var AS_NO_DATA = require('../../mock/V00/accounts/periods/periods_error_sinperiodos.json');
var AS_ERROR_ID = require('../../mock/V00/accounts/periods/periods_error_id.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:4000/accounts/V00/accounts/AHMXP0000001/periods?paginationKey=
router.get('/V00/accounts/:id/periods/', function(req, res, next) {
  if(req.params && req.params.id){
    var id = req.params.id;
      if (req.params && (id.startsWith('AH') || id.startsWith('IN') || id.startsWith('CA') || id.startsWith('SI') )) {
        if (req.query.paginationKey != "" && req.query.paginationKey != null){
          return res.json(AHMXP0000001_next);
        }else{
          return res.json(AHMXP0000001);
        }
      }
      if (req.params && req.params.id == 'CHUSD0000001')  {
        if (req.query.paginationKey != "" && req.query.paginationKey != null){
          return res.json(CHEUR0000001_next);
        }else{
          return res.json(CHEUR0000001);
        }
      }
      if (req.params && req.params.id == 'CHEUR0000001')  {
        return res.json(CHUSD0000001);
      }
      if (req.params && req.params.id == 'CHMXP0000001')  {
        return res.json(AS_NO_DATA);
      }
      return res.json(AS_ERROR_ID);
    }
    next();
  });


module.exports = router;