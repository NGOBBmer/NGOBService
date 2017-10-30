var express = require('express');
var router = express.Router();
var banksCatalogSpei = require('../../mock/V00/transfers/loadBanks/loadBanks_Spei.json');
var banksCatalogClabe = require('../../mock/V00/transfers/loadBanks/loadBanks_clabe.json');
var banksCatalogTdd = require('../../mock/V00/transfers/loadBanks/loadBanks_tdd.json');
var banksCatalogTdc = require('../../mock/V00/transfers/loadBanks/loadBanks_tdc.json');
var banksCatalogOtrosCreditos = require('../../mock/V00/transfers/loadBanks/loadBanks_OtrosCreditos.json');
var bankFound = require('../../mock/V00/transfers/loadBanks/bankFound.json');
var bankFound01 = require('../../mock/V00/transfers/loadBanks/bankFound_01.json');
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
router.get('/V00/loadBanks', function(req, res, next) {
    var tsec = req.headers['tsec'];
    if (tsec == 'null' || tsec == undefined && req.query.operationType==='spei' && req.query.cveBank==='90628')
        return res.json(bankFound);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='otroscreditos' && req.query.cveBank==='30167')
        return res.json(bankFound01);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='spei')
        return res.json(banksCatalogSpei);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='clabe')
        return res.json(banksCatalogClabe);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='tdd')
        return res.json(banksCatalogTdd);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='tdc')
        return res.json(banksCatalogTdc);
    else if (tsec == 'null' || tsec == undefined && req.query.operationType==='otroscreditos')
        return res.json(banksCatalogOtrosCreditos);

    return res.status(400).json(banksError);
  next();
});

module.exports = router;