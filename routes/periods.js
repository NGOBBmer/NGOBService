var express = require('express');
var router = express.Router();
var TCMXP0000001 = require('../mock/V00/cards/periods/TCMXP0000001.json');
var TCMXP0000001_next = require('../mock/V00/cards/periods/TCMXP0000001_next.json');
var TCMXP0000002 = require('../mock/V00/cards/periods/TCMXP0000002.json');
var TCMXP0000002_next = require('../mock/V00/cards/periods/TCMXP0000002_next.json');
var TCMXP0000003 = require('../mock/V00/cards/periods/TCMXP0000003.json');
var AS_NO_DATA = require('../mock/V00/cards/periods/periods_error_sinperiodos.json');
var AS_ERROR_ID = require('../mock/V00/cards/periods/periods_error_id.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:4000/cards/V00/cards/TCMXP0000001/periods?paginationKey=
router.get('/V00/cards/:id/periods/', function(req, res, next) {
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
        return res.json(AS_NO_DATA);
        es.sendStatus(400);
      }
      return res.json(AS_ERROR_ID);
      es.sendStatus(500);
  	}
    next();
  });


module.exports = router;