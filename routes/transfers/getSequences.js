var express = require('express');
var router = express.Router();
var json_OK = require('../../mock/V00/transfers/getSequences/json_ok.json');
var json_ERR = require('../../mock/V00/transfers/getSequences/json_err.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
});


router.get('/V00/getSequences', function(req, res, next) {
    //var tsec = req.headers['tsec'];
    if (req.query.initDate != '' && req.query.transferType != '' && req.query.period != '' && req.query.repetitions != ''){
        return res.json(json_OK);
    }else{
        return res.json(json_ERR);
    }
  next();
});

module.exports = router;