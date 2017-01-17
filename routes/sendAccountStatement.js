var express = require('express');
var router = express.Router();
var PERIOD0001 = require('../mock/V00/cards/sendAccountStatement/PERIOD0001.json');
var PERIOD0002 = require('../mock/V00/cards/sendAccountStatement/PERIOD0002.json');
var PERIOD0003 = require('../mock/V00/cards/sendAccountStatement/PERIOD0003.json');
var PERIOD0004 = require('../mock/V00/cards/sendAccountStatement/PERIOD0004.json');
var AS_NO_DATA = require('../mock/V00/cards/sendAccountStatement/error_sin_edc.json');
var AS_ERROR_ID = require('../mock/V00/cards/sendAccountStatement/error_id.json');

/* GET users listing. */
router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host);
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
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
      return res.json(AS_NO_DATA);
    }
    return res.json(AS_ERROR_ID);
  	}
  next();
});


module.exports = router;