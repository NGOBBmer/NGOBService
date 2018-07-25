var express = require('express');
var router = express.Router();

var companiesList = require('../../mock/V00/hire/getCompaniesAmounts/companies_list.json');
var companies_error = require('../../mock/V00/hire/getCompaniesAmounts/companies_error.json');


/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec,otp');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
});

router.get('/', function(req, res, next) {
  res.render('hire', { title: '' });
});

// handler for query http://localhost:4000/hire/v0/getCompaniesAmounts
router.get('/v0/getCompaniesAmounts', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == '123456')
        return res.json(companiesList);
    else  if (tsec == '123456789')
        return res.json(companiesList);
    else  
       return res.status(409).json();
  next();
});


module.exports = router;