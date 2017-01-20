var express = require('express');
var router = express.Router();
var dates01 = require('../mock/V00/users/systemDate/date01.json');

function getDate(now) {
   var yyyy = now.getFullYear();
   var mm = now.getMonth()+1;
   var dd  = now.getDate();

   return String(10000*yyyy + 100*mm + dd); 
}

function getTime(now){
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  var ms = now.getMilliseconds();

  hh < 10 ? hh = '0' + hh : hh = hh;
  mm < 10 ? mm = '0' + mm : mm = mm;
  ss < 10 ? ss = '0' + ss : ss = ss;

  return hh + ":" +  mm + ":" + ss + "." +  ms;
}

function getJson(){
  var now = new Date();
  var dt = getDate(now);
  var newDate = dt.substring(0,4) + "-" + dt.substring(4,6) + "-" + dt.substring(6);
  var obj = { 
    "data": 
    { 
      "date":  newDate,
      "time": getTime(now),
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