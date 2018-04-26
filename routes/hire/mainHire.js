var express = require('express');
var router = express.Router();

var companiesList = require('../../mock/V00/hire/getCompaniesAmounts/companies_list.json');
var companies_error = require('../../mock/V00/hire/getCompaniesAmounts/companies_error.json');

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