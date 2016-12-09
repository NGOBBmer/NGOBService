var express = require('express');
var router = express.Router();
var card_4152313300116865 = require('../mock/V00/cards/card_4152313300116865.json');
/* GET users listing. */
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


router.get('/V00/cards', function(req, res, next) {
    res.json(card_4152313300116865);
  });


router.get('/V00/promotions', function(req, res, next) {
    res.json({
        "data": {
            cols: [{
                key: 'date',
                field: 'date',
                css: 'col-1',
                date: true
            }, {
                key: 'description',
                field: 'concept',
                css: 'col-3 left'
            }, {
                key: 'amount',
                field: 'amount.amount',
                css: 'col-1 center'
            }, {
                key: 'monthly',
                field: 'monthly',
                css: 'col-1 center'
            }, {
                key: 'payments',
                field: 'payments',
                css: 'col-3 center'
            }, {
                key: 'interest',
                field: 'interest',
                css: 'col-1 right'
            }, {
                key: 'balance',
                field: 'balance.amount',
                css: 'col-2 center'
            }],
            paginationKey: "3413541135ASDVCCEDASSDA",
            items: [{
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '30/06/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Liverpool',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 3000,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 300,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 10,
                            amountLeft: 2
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '12%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 3400,
                            currency: 'USD'
                        }
                    }]
                },

                {
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '15/03/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Telcel',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 2000,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 200,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 10,
                            amountLeft: 7
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '0%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 3400,
                            currency: 'USD'
                        }
                    }]
                },

                {
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '22/12/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Tienda de muebles',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 6000,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 250,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 24,
                            amountLeft: 8
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '0%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 3400,
                            currency: 'USD'
                        }
                    }]
                },

                {
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '21/05/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Avance efectivo',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 4400,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 91.97,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 48,
                            amountLeft: 30
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '0%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 2750,
                            currency: 'USD'
                        }
                    }]
                },

            ]
        }
    });
});

router.get('/V00/instantMoney', function(req, res, next) {
    res.json({
        "data": {
            cols: [{
                key: 'date',
                field: 'date',
                css: 'col-1',
                date: true
            }, {
                key: 'description',
                field: 'concept',
                css: 'col-3 left'
            }, {
                key: 'amount',
                field: 'amount.amount',
                css: 'col-1 center'
            }, {
                key: 'monthly',
                field: 'monthly',
                css: 'col-1 center'
            }, {
                key: 'payments',
                field: 'payments',
                css: 'col-3 center'
            }, {
                key: 'interest',
                field: 'interest',
                css: 'col-1 right'
            }, {
                key: 'balance',
                field: 'balance.amount',
                css: 'col-2 center'
            }],
            paginationKey: "3413541135ASDVCCEDASSDA",
            items: [{
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '15/04/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Efectivo inmediato',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 500,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 100,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 5,
                            amountLeft: 2
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '8%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 300,
                            currency: 'USD'
                        }
                    }]
                },

                {
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '28/07/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Efectivo Inmmediato',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 200,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 10,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 20,
                            amountLeft: 2
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '14%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 180,
                            currency: 'USD'
                        }
                    }]
                },

                {
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '22/12/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Efectivo Inmmediato',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 7000,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 1000,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 7,
                            amountLeft: 6
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '18%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 1000,
                            currency: 'USD'
                        }
                    }]
                },

                {
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '01/01/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Efectivo Inmediato',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 400,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 80,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 5,
                            amountLeft: 0
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '10%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 400,
                            currency: 'USD'
                        }
                    }]
                },

            ]
        }
    });
});

router.get('/V00/fixedPaymentsPlan', function(req, res, next) {
    res.json({
        "data": {
            cols: [{
                key: 'date',
                field: 'date',
                css: 'col-1',
                date: true
            }, {
                key: 'description',
                field: 'concept',
                css: 'col-3 left'
            }, {
                key: 'amount',
                field: 'amount.amount',
                css: 'col-1 center'
            }, {
                key: 'monthly',
                field: 'monthly',
                css: 'col-1 center'
            }, {
                key: 'payments',
                field: 'payments',
                css: 'col-3 center'
            }, {
                key: 'interest',
                field: 'interest',
                css: 'col-1 right'
            }, {
                key: 'balance',
                field: 'balance.amount',
                css: 'col-2 center'
            }],
            paginationKey: "3413541135ASDVCCEDASSDA",
            items: [{
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '15/04/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Plan de pagos fijos',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 1000,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 100,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 10,
                            amountLeft: 4
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '17%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 600,
                            currency: 'USD'
                        }
                    }]
                },

                {
                    status: 'completed',
                    associatedCard: '1234ABCD',
                    fields: [{
                        key: 'date',
                        type: 'date',
                        value: '02/04/2016',
                        css: 'date'
                    }, {
                        key: 'description',
                        type: 'string',
                        value: 'Plan de pagos fijos',
                        css: 'description'
                    }, {
                        key: 'amount',
                        type: 'amount',
                        value: {
                            amount: 600,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'monthly',
                        type: 'amount',
                        value: {
                            amount: 200,
                            currency: 'USD'
                        },
                        css: 'amount'
                    }, {
                        key: 'payments',
                        type: 'percentage-bar',
                        value: {
                            amountRight: 3,
                            amountLeft: 2
                        },
                        css: 'amount'
                    }, {
                        key: 'interest',
                        type: 'string',
                        value: '12%',
                        css: 'amount'
                    }, {
                        key: 'balance',
                        type: 'amount',
                        value: {
                            amount: 200,
                            currency: 'USD'
                        }
                    }]
                },

            ]
        }
    });
});

module.exports = router;