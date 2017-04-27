var express = require('express');
var router = express.Router();
var accounts_4152313300116865 = require('../../mock/V00/accounts/listAccounts/accounts_4152313300116865.json');
// var accounts_4152313300116865 = require('../mock/V00/accounts/listAccounts/accounts_4152313300116865.json');
var accounts_sinAccountType = require('../../mock/V00/accounts/listAccounts/accounts_sinAccountType.json');
// var accounts_sinAccounts = require('../mock/V00/accounts/listAccounts/accounts_sinAccounts.json');

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

// handler for query http://localhost:3000/accounts/V00/accounts?accountType=CHECK_ACCOUNT
router.get('/V00/accounts', function(req, res, next) {
	if(req.query && req.query.accountType){
	    if (req.query && req.query.accountType== 'CHECK_ACCOUNT')  {
	      res.json(accounts_4152313300116865);
	    }
	    if (req.query && req.query.accountType!= 'CHECK_ACCOUNT' || req.query.accountType==null)  {
	      res.json(accounts_sinAccountType);
	    }
    
  	}else{
  		return res.json(accounts_sinAccountType);
  	}
    
  });


module.exports = router;