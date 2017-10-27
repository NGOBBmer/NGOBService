var express = require('express');
var router = express.Router();
var banksCatalog = require('../../mock/V00/transfers/loadBanks/loadBanks.json');
var banksError = require('../../mock/V00/transfers/loadBanks/ERROR.json');

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

// handler for query http://localhost:4000/transfers/V00/loadBanks?operationType=spei
router.get('/V00/frequentOperations', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if ((tsec == 'null' || tsec == undefined && req.query.operationType==='spei')
        return res.json(banksCatalog);
    
    return res.status(400).json(banksError);
  next();
});

module.exports = router;