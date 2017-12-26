var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
var dashboard_01 = require('../../mock/V00/dashboard/dashboard/dashboard_01.json');
var alias_ok = require('../../mock/V00/dashboard/modifyAlias/alias_ok.json');
var alias_nok = require('../../mock/V00/dashboard/modifyAlias/alias_nok.json');
var dashboard_roor = '../../mock/V00/dashboard/dashboard/dashboard_01.json';

// var dashboard_error = require('../../mock/V00/dashboard/dashboard/dashboard_error.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// handler for query http://localhost:5000/dashboard/V00/modifyAlias/CHMXP0000001
/*
{
    "shortName": "AliasPr001" <- solo 10 caracteres
}
*/
router.post('/V00/modifyAlias/:id', function(req, res, next) {
    var alias = req.body.shortName;
    var tsec = req.headers['tsec'];
    if (alias == undefined)
        alias = "";
    if (req.params.id == 'AHMXP0000001' || req.params.id == 'TCMXP0000001'){
        var filePath = path.join(__dirname, dashboard_roor);
        var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        json.product.savingAccount[0].branch.alias=alias;
        var nvoJson = JSON.stringify(json);
        fs.truncate(filePath, 0, function() {
            fs.writeFile(filePath, nvoJson , function (err) {
                if (err) {
                    return res.json(alias_nok); 
                }
            });
          });
        return res.json(alias_ok); 
    }else  if (tsec != null || tsec==='456789012' || req.params.id == 'SIMXP0000002'){
        var filePath = path.join(__dirname, dashboard_roor);
        var json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        json.product.savingAccount[0].branch.alias=alias;
        var nvoJson = JSON.stringify(json);
        fs.truncate(filePath, 0, function() {
            fs.writeFile(filePath, nvoJson , function (err) {
                if (err) {
                    return res.json(alias_nok); 
                }
            });
          });
        return res.json(alias_ok); 
    }else{
       return res.json(alias_nok); 
    }
	return res.json(alias_nok);
  next();
});


module.exports = router;