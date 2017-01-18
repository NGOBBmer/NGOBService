var express = require('express');
var router = express.Router();
var dates01 = require('../mock/V00/users/systemDate/date01.json');

function getDate(){
  var now = new Date();
  return now;
}

function getJson(){
  var now = new Date();
  var dt = JSON.stringify(now);
  dt = dt.substring(1, dt.length -2);
  var obj = { 
    "data": 
    { 
      "date": dt.substring(0,10),
      "time": dt.substring(11),
      "timeZone": "-06:00"
    }
  }

  return obj;
}

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

// handler for query http://localhost:4000/users/V00/systemDate
router.get('/V00/systemDate', function(req, res, next) {
	if(req.query){
    return res.json(getJson());
	}else{
		return res.json(getJson());
	}
    
  });


module.exports = router;