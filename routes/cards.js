var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
router.get('/V00/cards', function(req, res, next) {
  res.json({
    "data": [{
        "cardId": "PCJ3TBB7QE795BMAKBFFV5NXP2QWECPXZC0CPZYYZQ7J0FMJT8TG",
        "number": "4440870101328488",
        "image": "data:image/png;base64,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",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "NT4J4RT5F0G00P4TJP7NRGCYP9WAK55N26FKHA3B6KZPDXQXPYR0",
        "number": "4555043000086497",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "S5TZRHED703V2B906BWKJ5KETJH6T1N1VTX3B03F09NMBVSYVJ70",
        "number": "4555043000158809",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "alias": "*****58809",
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 174520.78,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": -385550.88,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "SBZPD375JC8SG68FTXKF9RV9CP861TZXWN982HQ87B3YAMEEBM30",
        "number": "4772922070289502",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "alias": "*****89502",
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 4349.00,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "2P0XF3897Q395T6RNYYCRTJN2JP5Z69XCVWVV6VN1WENKZS7QZV0",
        "number": "4772922170585544",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "DVK8WQWX45046M2TJ5HC3WAR8NT5VTNT7QGCAS175J0CCJ8T0E3G",
        "number": "4772923009000291",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "DVK8WQWX45046M2TJ5HC3WAR8QPG50PWWMJT0V982WJ8WYS387JG",
        "number": "4772923009000309",
        "image": "'data:image/png;base64,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",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "AP42QV73R1GMCND121CNGGAMC4PPTDKEG33K1TK6J1JV1S3AZM9G",
        "number": "4931612090303155",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "VISA",
            "name": "Visa"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "80YPN8F2N7CBM30J9KPW8TSZ9KMFCWN9NWX79RJ0XBNT3DBMXV0G",
        "number": "5358750200059233",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "MASTER_CARD",
            "name": "Master Card"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 8064.83,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "AH4FXYE1E6FSYQDSCP0GSJJVY3TY4CDKPS3PXQXZ0J0TQQBYTPH0",
        "number": "5358750209968202",
        "image":"data:image/png;base64,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",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "MASTER_CARD",
            "name": "Master Card"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 7335.62,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 10532.62,
                "currency": "MXP"
            }]
        }
    }, {
        "cardId": "AM5CA7WQ6RD4Q7WG1JRXRSSH3PF3SV018ZKPTVTV85WG00TVMTGG",
        "number": "5420150000014815",
        "numberType": {
            "id": "PAN",
            "name": "Primary Account Number"
        },
        "cardType": {
            "id": "CREDIT_CARD",
            "name": "Credit Card"
        },
        "brandAssociation": {
            "id": "MASTER_CARD",
            "name": "Master Card"
        },
        "currencies": [{
            "currency": "MXP",
            "isMajor": true
        }],
        "availableBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        },
        "disposedBalance": {
            "currentBalances": [{
                "amount": 0.00,
                "currency": "MXP"
            }]
        }
    }]
}
  );
});

module.exports = router;
