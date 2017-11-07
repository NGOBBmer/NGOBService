var express = require('express');
var router = express.Router();
var json_true = require('../../mock/V00/transfers/sendEmailTransfers/true_json.json');
var json_false = require('../../mock/V00/transfers/sendEmailTransfers/false_json.json');
var json_ERR = require('../../mock/V00/transfers/sendEmailTransfers/err_json.json');

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


router.get('/V00/sendEmailTransfers', function(req, res, next) {
    //var tsec = req.headers['tsec'];
    if (req.query.operationId != '' && req.query.beneficiaryEmail != '' && req.query.titularCopy){
        return res.json(json_true);
    }else if (req.query.operationId != '' && req.query.beneficiaryEmail != '' && !req.query.titularCopy){
        return res.json(json_false);
    }else{
        return res.json(json_ERR);

    }
  next();
});

module.exports = router;