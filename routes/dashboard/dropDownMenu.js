var express = require('express');
var router = express.Router();
var DATA_01 = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenu.json');
var ERROR = require('../../mock/V00/dashboard/dropDownMenu/dropDownMenuError.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// handler for query http://localhost:4000/dashboard/V00/dropDownMenu?typeAccount&page=page
router.get('/V00/dropDownMenu/', function(req, res, next) {
	if(req.query){
     return res.json(DATA_01);
  }else{
     return res.status(400).json(ERROR);
  }
  next();
  });

module.exports = router;