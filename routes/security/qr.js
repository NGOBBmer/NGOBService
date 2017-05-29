var express = require('express');
var router = express.Router();

var QR_IMAGE = require('../../mock/V00/security/qr/qr_image.json');
var QR_ERROR = require('../../mock/V00/security/qr/qr_error.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host||"*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/security/V00/getQR
/*se espera

{
  "type":"OPERATION"
}
*/
router.post('/V00/getQR', function(req, res, next) {

  if (req.body.type=="OPERATION"){
    return res.json(QR_IMAGE);
  } else if (req.body.type=="REGISTER"){
    return res.status(400).json(QR_ERROR);
  } 
  
  return res.status(500).json(QR_ERROR);
  
  next();
});

module.exports = router;