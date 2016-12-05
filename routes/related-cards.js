var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
router.get('/relatedCards/:id', function(req, res, next) {
  return res.json({
    "data": {
      "relatedCards": [{
        "idSubCard": "TJ0000",
        "card": "****1924",
        "participant": "TIT."
      }, {
        "idSubCard": "TJ0001",
        "card": "****8846",
        "participant": "ADC."
      }, {
        "idSubCard": "TJ0002",
        "card": "****9586",
        "participant": "ADC."
      }]
    }
  });
});
module.exports = router;