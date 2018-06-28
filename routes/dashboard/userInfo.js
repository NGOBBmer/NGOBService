var express = require('express');
var router = express.Router();

var userInfo_user01 = require('../../mock/V00/dashboard/userInfo/userInfo_user01.json');
var userInfo_user02 = require('../../mock/V00/dashboard/userInfo/userInfo_user02.json');
var userInfo_user03 = require('../../mock/V00/dashboard/userInfo/userInfo_user03.json');
var userInfoS1  = require('../../mock/V00/dashboard/userInfo/userInfoS1.json');
var userInfoS2  = require('../../mock/V00/dashboard/userInfo/userInfoS2.json');
var userInfoT1  = require('../../mock/V00/dashboard/userInfo/userInfoT1.json');
var userInfoT3  = require('../../mock/V00/dashboard/userInfo/userInfoT3.json');
var userInfoT6  = require('../../mock/V00/dashboard/userInfo/userInfoT6.json');
var userInfoT7  = require('../../mock/V00/dashboard/userInfo/userInfoT7.json');
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

  if(tsec==undefined || tsec===''){
    return res.json(userInfoS1);
  } else if (tsec.includes("userInfoS1")){
    return res.json(userInfoS1);
  } else if (tsec.includes("userInfoS2")){
    return res.json(userInfoS2);
  } else if (tsec.includes("userInfoT1")){
    return res.json(userInfoT1);
  } else if (tsec.includes("userInfoT3")){
    return res.json(userInfoT3);
  } else if (tsec.includes("userInfoT6")){
    return res.json(userInfoT6);
  } else if (tsec.includes("userInfoT7")){
    return res.json(userInfoT7);
  } else if (tsec.includes("userInfoNoNominated")){
    return res.json(userInfo_user01);
  } else if (tsec.includes("userInfoWithOutAlerts")){
     return res.json(userInfo_user02);
  } else if (tsec.includes("userInfoWithOperations")){
     return res.json(userInfo_user03);
  } else if (tsec.includes("userInfoError")){
     return res.json(userInfo_error);
  } else {
    return res.json(userInfoS1);
  }
});

  module.exports = router;
