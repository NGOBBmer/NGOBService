var express = require('express');
var router = express.Router();
var TSEC = require('../../mock/V00/dashboard/tsec/tsec_01.json');

/* GET users listing. */
/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,tsec,Accept-Language');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Tsec', '654321');
  res.header('Access-Control-Expose-Headers', 'Tsec');
  next();
});

/*app.post('/V00/tsec', function(req, res, next) {
  return res.json(TSEC);
  next();
});
*/
// handler for query http://localhost:4000/dashboard/V00/tsec
router.post('/V00/tsec', function(req, res, next) {
  return res.json({});
  next();
});


module.exports = router;