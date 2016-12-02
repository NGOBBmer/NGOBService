var express = require('express');
var router = express.Router();

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
        res.json({
            "data": [{
                "listMovements": [{
                    "operationDate": "05/02/2016",
                    "reference": "74931616069981002667651",
                    "concept": "BEST BUY",
                    "amount": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": true
                }, {
                    "operationDate": "10/03/2016",
                    "reference": "74931616070981002668011",
                    "concept": "SAT REFERENCIADO",
                    "amount": {
                        "amount": "116",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "116",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "11/05/2016",
                    "reference": "74931616071981002668408",
                    "concept": "OXXO",
                    "amount": {
                        "amount": "48",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "48",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "1/02/2016",
                    "reference": "05933901071936502668504",
                    "concept": "STARBUCKS",
                    "amount": {
                        "amount": "59",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "59",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }],
                "paginationKey": "76WUI4K5N3KL"
            }]
        });
    } else if (req.query.additionalCardId == '1107368912') {
        res.json({
            "data": [{
                "listMovements": [{
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663415",
                    "concept": "7ELEVEN",
                    "amount": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663431",
                    "concept": "SAT REFERENCIADO",
                    "amount": {
                        "amount": "142",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "142",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663449",
                    "concept": "OXXO",
                    "amount": {
                        "amount": "122",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "122",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663552",
                    "concept": "CIELITO QUERIDO",
                    "amount": {
                        "amount": "33",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "33",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663578",
                    "concept": "FRIDAYS",
                    "amount": {
                        "amount": "45",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "45",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "03/03/2016",
                    "reference": "74931616063981002665412",
                    "concept": "BEST BUY",
                    "amount": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "04/03/2016",
                    "reference": "74931616064981002665549",
                    "concept": "VIPS",
                    "amount": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "04/03/2016",
                    "reference": "74931616064981002665598",
                    "concept": "CONTRIBUCION FEDERAL SAT",
                    "amount": {
                        "amount": "210",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "210",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "04/03/2016",
                    "reference": "74931616064981002665638",
                    "concept": "CONTRIBUCION FEDERAL SAT",
                    "amount": {
                        "amount": "350",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "350",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }],
                "paginationKey": ""
            }]
        });
    } else if (req.query.additionalCardId == '0222636591') {
        res.json({
            "data": [{
                "listMovements": [{
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663415",
                    "concept": "SAT REFERENCIADO",
                    "amount": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663431",
                    "concept": "SUPER K",
                    "amount": {
                        "amount": "142",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "142",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663449",
                    "concept": "CERVECERIA BARRIO",
                    "amount": {
                        "amount": "122",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "122",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663552",
                    "concept": "STARBUCKS",
                    "amount": {
                        "amount": "33",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "33",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "01/03/2016",
                    "reference": "74931616061981002663578",
                    "concept": "HOTEL HILTON",
                    "amount": {
                        "amount": "45",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "45",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "03/03/2016",
                    "reference": "74931616063981002665412",
                    "concept": "ITALIANIS",
                    "amount": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": true
                }, {
                    "operationDate": "04/03/2016",
                    "reference": "74931616064981002665549",
                    "concept": "TRANSFERENCIA BANCARIA",
                    "amount": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "145",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": true
                }],
                "paginationKey": ""
            }]
        });
    } else {
        res.json({
            "data": [{
                "listMovements": [{
                    "operationDate": "05/02/2016",
                    "reference": "74931616069981002667651",
                    "concept": "BEST BUY",
                    "amount": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "130",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": true
                }, {
                    "operationDate": "10/03/2016",
                    "reference": "74931616070981002668011",
                    "concept": "SAT REFERENCIADO",
                    "amount": {
                        "amount": "116",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "116",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "11/05/2016",
                    "reference": "74931616071981002668408",
                    "concept": "OXXO",
                    "amount": {
                        "amount": "48",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "48",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }, {
                    "operationDate": "1/02/2016",
                    "reference": "05933901071936502668504",
                    "concept": "STARBUCKS",
                    "amount": {
                        "amount": "59",
                        "currency": "MXN"
                    },
                    "postedBalance": {
                        "amount": "59",
                        "currency": "MXN"
                    },
                    "card": {
                        "idSubCard": "TJ0000",
                        "card": "****1924",
                        "participant": "TIT."
                    },
                    "category": "G",
                    "type": "Cargo",
                    "rewardsGenerated": "",
                    "rewardsconsumed": "",
                    "deferred": false,
                    "movementPending": false
                }],
                "paginationKey": "76WUI4K5N3KL"
            }]
        });
    }
});

module.exports = router;