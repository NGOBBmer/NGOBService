var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
router.get('/list', function(req, res, next) {
  res.json({
  "data":[
    {
      "cardId":"AM5CA7WQ6RD4Q7WG1JRXRSSH3PF3SV018ZKPTVTV85WG00TVMTGG",
      "number":"5420150000014815",
      "numberType":{
        "id":"PAN",
        "name":"Primary Account Number"
      },
      "alias":"ALIAS TARJETA",
      "brandAssociation":{
        "id":"MASTER_CARD",
        "name":"Master Card"
      },
      "availableBalance":{
        "currentBalances":[
          {
            "amount":0,
            "currency":"MXP"
          }
        ]
      },
      "disposedBalance":{
        "currentBalances":[
          {
            "amount":0,
            "currency":"MXP"
          }
        ]
      },
      "currentBalance":{
        "saldoAnterior":{
          "amount":10303.57,
          "currency":"MXP"
        },
        "saldoTransito":{
          "amount":1988.00,
          "currency":"MXP"
        },
        "nvoCargo":{
          "amount":5828.00,
          "currency":"MXP"
        },
        "montoDisponible":{
          "amount":4068.94,
          "currency":"MXP"
        },
        "nvoPago":{
          "amount":1300.00,
          "currency":"MXP"
        }
      },
      "postedBalance":{
        "limiteCredito":{
          "amount":25000.00,
          "currency":"MXP"
        },
        "montoUtilizado":{
          "amount":15931.06,
          "currency":"MXP"
        }
      }
    }
  ]






  });
  });

module.exports = router;
