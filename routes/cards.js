var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.json({
    cards: [
      {
          "data": [{
              "cardId": "PCJ3TBB7QE795BMAKBFFV5NXP2QWECPXZC0CPZYYZQ7J0FMJT8TG",
              "number": "4440870101328488",
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
    ]
  });
});

module.exports = router;
