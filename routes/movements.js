var express = require('express');
var router = express.Router();

var movements_TJ0001 = require('../mock/V00/cards/movements/TJ0001.json');
var movements_TJ0001_next= require('../mock/V00/cards/movements/TJ0001_next.json');
var movements_TJ0001_dates = require('../mock/V00/cards/movements/TJ0001_dates.json');
var movements_TJ0001_dates_next = require('../mock/V00/cards/movements/TJ0001_dates_next.json');

var movements_1107368912 = require('../mock/V00/cards/movements/1107368912.json');
var movements_1107368912_next= require('../mock/V00/cards/movements/1107368912_next.json');

var movements_default = require('../mock/V00/cards/movements/default.json');


/* GET users listing. */
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// handler for /V00/cards/movements/TCMXP0000001?additionalCardId=TJ0001&paginationKey=&initialDate=&finalDate=&period=&numMovements
router.get('/V00/cards/movements/:id', function(req, res, next) {
    if (req.query.additionalCardId == 'TJ0001') {
        if (req.query.paginationKey) {
            return res.json(movements_TJ0001_next);
        } else {
            return res.json(movements_TJ0001);
        }
        if (req.query.initialDate) {
            console.log("here");
            if (req.query.paginationKey) {
                return res.json(movements_TJ0001_dates_next);
            } else {
                return res.json(movements_TJ0001_dates);
            }
            return res.json(movements_TJ0001_dates);
        } else {
            return res.json(movements_4162945006_next);
        }
    } else if (req.query.additionalCardId == 'TJ0000') {
        return res.json(movements_1107368912);
    } else if (req.query.additionalCardId == 'TJ0002') {
        return res.json(movements_1107368912_next);
    } else {
        return res.json(movements_default);
    }
});

module.exports = router;