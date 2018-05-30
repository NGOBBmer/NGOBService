var express = require('express');
var router = express.Router();
var userInfo_user01 = require('../../mock/V00/dashboard/userInfo/userInfo_user01.json');
var userInfo_user02 = require('../../mock/V00/dashboard/userInfo/userInfo_user02.json');
var userInfo_user03 = require('../../mock/V00/dashboard/userInfo/userInfo_user03.json');
var userInfo_user04 = require('../../mock/V00/dashboard/userInfo/userInfo_user04.json');
var userInfo_user05 = require('../../mock/V00/dashboard/userInfo/userInfo_user05.json');
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
  if(tsec === '')
    return res.json(userInfo_error);
  if (tsec === '1122334455'){
    return res.json(userInfo_user05)
  }else if (tsec == 'giovanni'){
    return res.json(userInfo_user04)
  }else if (tsec == '123456789' || tsec == '34567'){
    return res.json(userInfo_user01)
  }else if (tsec == '890765'){
    return res.json(userInfo_user01)
  } else if (tsec == '556790' || tsec == '18234'){
    return res.json(userInfo_user01)
  } else if (tsec == '123456'){
    return res.json(userInfo_user01)  
  } else if (tsec == 'qrcronto'){
    return res.json(userInfo_user03)
  } else if (tsec == '12347823'){
    return res.json(userInfo_user01)
  } else{
    return res.json(userInfo_user02);
  }
  return res.json(userInfo_user01)
  

    
  });

module.exports = router;