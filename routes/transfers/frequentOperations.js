var express = require('express');
var router = express.Router();
var frequent_01 = require('../../mock/V00/transfers/frequentOperations/listFrequents_01.json');
var frequent_02 = require('../../mock/V00/transfers/frequentOperations/listFrequents_02.json');
var frequent_03 = require('../../mock/V00/transfers/frequentOperations/listFrequents_03.json');
var frequents_I = require('../../mock/V00/transfers/frequentOperations/frequents_Interbank_01.json');
var frequents_TP = require('../../mock/V00/transfers/frequentOperations/frequents_ThirdParty_01.json');
var frequents_A1 = require('../../mock/V00/transfers/frequentOperations/frequentsA_01.json');
var frequent_01_01 = require('../../mock/V00/transfers/frequentOperations/listFrequents_01_01.json');
var frequent_02_01 = require('../../mock/V00/transfers/frequentOperations/listFrequents_02_01.json');

var frequent_error = require('../../mock/V00/transfers/frequentOperations/ERROR.json');

var search_frequent = require('../../mock/V00/transfers/searchFrequents/searchFrequents_ALL.json');
var freq_error = require('../../mock/V00/transfers/searchFrequents/searchFrequents_error.json');

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

// handler for query http://localhost:5000/transfers/V00/frequentOperations?typeOpFrequent&paginationKey=&numMovsFreq=10
router.get('/V00/frequentOperations', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '0' && req.query.numMovsFreq == '20')
        return res.json(frequent_01);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '6' && req.query.numMovsFreq == '10')
        return res.json(frequent_02);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '16' && req.query.numMovsFreq == '10')
        return res.json(frequent_03);
	else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'third_party' && req.query.paginationKey === '' && req.query.numMovsFreq == '10')
        return res.json(frequent_01_01);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'interbank' && req.query.paginationKey === '' && req.query.numMovsFreq == '10')
        return res.json(frequent_02_01);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === '' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_A1);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'all' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_A1);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'interbank' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_I);
    else if ((tsec == 'null' || tsec == undefined || tsec == '' || tsec == '12345678') && req.query.typeOpFrequent === 'third_party' && req.query.paginationKey === '' && req.query.numMovsFreq == '30')
        return res.json(frequents_TP);

    return res.status(400).json(frequent_error);
  next();
});

// handler for query http://localhost:4000/transfers/V00/searchFrequents?word=prue
router.get('/V00/searchFrequents', function(req, res, next) {
     var tsec = req.headers['tsec'];
     if ((tsec == '12345678') && req.query.word === 'prueba')
        return res.json(search_frequent);
    return res.status(400).json(freq_error);
    next();
});

module.exports = router;