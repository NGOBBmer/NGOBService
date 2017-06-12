var express = require('express');
var router = express.Router();
var userInfo_user01 = require('../../mock/V00/dashboard/userInfo/userInfo_user01.json');
var userInfo_user02 = require('../../mock/V00/dashboard/userInfo/userInfo_user02.json');
var userInfo_error = require('../../mock/V00/dashboard/userInfo/userInfo_error.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
});

// handler for query http://localhost:3000/dashboard/V00/userInfo?filter=email
router.get('/V00/userInfo', function(req, res, next) {
  var tsec = req.headers['tsec'];
  if (tsec=='123456')
    return res.json(userInfo_user01);
	else
    return res.json(userInfo_user02);

  return res.json(userInfo_error);

    
  });

module.exports = router;