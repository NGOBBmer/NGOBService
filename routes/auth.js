var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Request-Method', 'POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'token');
  res.header('token', '5715261762');
  next();
});

router.post('/v01', function(req, res){
  res.json({
    authenticationState: 'OK'
  });
});

module.exports = router;