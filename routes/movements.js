var express = require('express');
var router = express.Router();

var movements_4162945006 = require('../mock/V00/cards/movements/4162945006.json');
var movements_4162945006_next= require('../mock/V00/cards/movements/4162945006_next.json');

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
router.get('/movements/:id', function(req, res, next) {
    if (req.query.additionalCardId == '4162945006') {
        if (req.query.paginationKey) {
            return res.json(movements_4162945006);
        } else {
            return res.json(movements_4162945006_next);
        }
    } else if (req.query.additionalCardId == '1107368912') {
        return res.json(movements_1107368912);
    } else if (req.query.additionalCardId == '0222636591') {
        return res.json(movements_1107368912_next);
    } else {
        return res.json(movements_default);
    }
});

module.exports = router;