var express = require('express');
var router = express.Router();

var movements_AH01 = require('../../mock/V00/accounts/movements/AHMXP0000001.json');
var movements_AH01_next= require('../../mock/V00/accounts/movements/AHMXP0000001_next.json');
var movements_AH01_filter= require('../../mock/V00/accounts/movements/AHMXP0000001_filter.json');
var movements_CH01 = require('../../mock/V00/accounts/movements/CHUSD0000001.json');
var movements_CH01_next= require('../../mock/V00/accounts/movements/CHUSD0000001_next.json');
var movements_CH01_filter= require('../../mock/V00/accounts/movements/CHUSD0000001_filter.json');
var movements_CH02 = require('../../mock/V00/accounts/movements/CHEUR0000001.json');
var movements_CH02_next= require('../../mock/V00/accounts/movements/CHEUR0000001_next.json');
var movements_CH02_filter= require('../../mock/V00/accounts/movements/CHEUR0000001_filter.json');
var movements_default= require('../../mock/V00/accounts/movements/default.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// handler for /V00/accounts/movements/AHMXP0000001?paginationKey=&initialDate=&finalDate=&period=&numMovements&period=&amountMin=&amountMax
router.get('/V00/accounts/movements/:id', function(req, res, next) {
        if (req.params.id == 'AHMXP0000001'){
            if (req.query.paginationKey) {
                return res.json(movements_AH01_next);
            }else if (req.query.period){
                 return res.json(movements_AH01);
            }else if (req.query.initialDate && req.query.finalDate && req.query.amountMin && req.query.amountMax){
                return res.json(movements_AH01_filter);
            } else{
                return res.json(movements_AH01);
            }
            return res.json(movements_default);
        }
        if (req.params.id == 'CHUSD0000001'){
            if (req.query.paginationKey) {
                return res.json(movements_CH01_next);
            }else if (req.query.period){
                 return res.json(movements_CH01);
            }else if (req.query.initialDate && req.query.finalDate && req.query.amountMin && req.query.amountMax){
                return res.json(movements_CH01_filter);
            } else{
                return res.json(movements_CH01);
            }
            return res.json(movements_default);
        }
        if (req.params.id == 'CHEUR0000001'){
            if (req.query.paginationKey) {
                return res.json(movements_CH02_next);
            }else if (req.query.period){
                 return res.json(movements_CH02);
            }else if (req.query.initialDate && req.query.finalDate && req.query.amountMin && req.query.amountMax){
                return res.json(movements_CH02_filter);
            } else{
                return res.json(movements_CH02);
            }
            return res.json(movements_default);
        }
    return res.json(movements_default);

});

module.exports = router;