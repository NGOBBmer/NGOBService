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


// handler for query http://localhost:3001/cards/V00/cards?id=TCMXP0000003
router.get('/V00/cards', function(req, res, next) {
  if(req.query && req.query.id){
    if (req.query && req.query.id== 'TCMXP0000001')  {
      return res.json({
        "data": {
          "alias": null,
          "amountDispute": "0",
          "availableBalance": {
            "currentBalances": {
              "amount": 38815.89,
              "currency": "MXP"
            },
            "pendingBalances": null,
            "postedBalances": null
          },
          "cardId": "TCMXP0000001",
          "cardType": {
            "id": "TP",
            "name": "TARJETA PLATINUM"
          },
          "cargosTransito": null,
          "comisiones": "",
          "cutOffDate": "2016-02-22",
          "deferredPayment": "",
          "disposedBalance": {
            "currentBalances": {
              "amount": 46184.21,
              "currency": "MXP"
            },
            "pendingBalances": {
              "amount": 0,
              "currency": "MXP"
            },
            "postedBalances": {
              "amount": 46184.21,
              "currency": "MXP"
            }
          },
          "disposicionEfectivo": {
            "amount": "0"
          },
          "grantedCredits": {
            "amount": "85000.1"
          },
          "images": {
            "id": "IMG01",
            "name": null,
            "url": ""
          },
          "nuevosAbonos": {
            "amount": 0.0
          },
          "nuevosCargos": {
            "amount": 0.0
          },
          "number": "*1924",
          "overDraft": null,
          "pagosTransito": null,
          "paymentMethod": {
            "endDate": "2016-03-14",
            "monetaryPayments": null,
            "paymentAmounts": [
              {
                "id": "PM",
                "name": "pagoMinimo",
                "values": {
                  "amount": "2603.19"
                }
              },
              {
                "id": "PNI",
                "name": "PagoNoIntereses",
                "values": {
                  "amount": "40049.17"
                }
              }
            ]
          },
          "totalPoints": "0"
        }
      });
    }
    if (req.query && req.query.id== 'TCMXP0000002')  {
      return res.json({
        "error": {
          "code": "MCE0004",
          "descripcion": "Se ha producido un error al consultar el servicio",
          "httpStatus": "400",
          "message": "SIN MOVIMIENTOS EN EL PERIODO",
          "severity": "FATAL",
          "version": "1"
        }
      });
    }
    if (req.query && req.query.id == 'TCMXP0000003') {
      return res.json({
        "data": {
          "alias": null,
          "amountDispute": "0",
          "availableBalance": {
            "currentBalances": {
              "amount": 13701.1,
              "currency": "MXP"
            },
            "pendingBalances": null,
            "postedBalances": null
          },
          "cardId": "TCMXP0000003",
          "cardType": {
            "id": "VI",
            "name": "VISA INTERNACIONAL"
          },
          "cargosTransito": null,
          "comisiones": "",
          "cutOffDate": "2013-09-09",
          "deferredPayment": "",
          "disposedBalance": {
            "currentBalances": {
              "amount": 199,
              "currency": "MXP"
            },
            "pendingBalances": {
              "amount": 0,
              "currency": "MXP"
            },
            "postedBalances": {
              "amount": 199,
              "currency": "MXP"
            }
          },
          "disposicionEfectivo": {
            "amount": "0"
          },
          "grantedCredits": {
            "amount": "13900"
          },
          "images": {
            "id": "IMG01",
            "name": null,
            "url": ""
          },
          "nuevosAbonos": {
            "amount": 0.0
          },
          "nuevosCargos": {
            "amount": 0.0
          },
          "number": "*1763",
          "overDraft": null,
          "pagosTransito": null,
          "paymentMethod": {
            "endDate": "2013-09-27",
            "monetaryPayments": null,
            "paymentAmounts": [
              {
                "id": "PM",
                "name": "pagoMinimo",
                "values": {
                  "amount": "882.67"
                }
              },
              {
                "id": "PNI",
                "name": "PagoNoIntereses",
                "values": {
                  "amount": "7015.27"
                }
              }
            ]
          },
          "totalPoints": "0"
        }
      });
    }
    return res.json({
        "data": {"error":"no data"}
      });
  }

    next();
  });

// handler for params http://localhost:3001/cards/V00/cards/TCMXP0000003
router.get('/V00/cards/:id', function(req, res, next) {
if(req.params && req.params.id ){

  if (req.params && req.params.id == 'TCMXP0000001') {
    return res.json({
      "data": {
        "alias": null,
        "amountDispute": "0",
        "availableBalance": {
          "currentBalances": {
            "amount": 38815.89,
            "currency": "MXP"
          },
          "pendingBalances": null,
          "postedBalances": null
        },
        "cardId": "TCMXP0000001",
        "cardType": {
          "id": "TP",
          "name": "TARJETA PLATINUM"
        },
        "cargosTransito": null,
        "comisiones": "",
        "cutOffDate": "2016-02-22",
        "deferredPayment": "",
        "disposedBalance": {
          "currentBalances": {
            "amount": 46184.21,
            "currency": "MXP"
          },
          "pendingBalances": {
            "amount": 0,
            "currency": "MXP"
          },
          "postedBalances": {
            "amount": 46184.21,
            "currency": "MXP"
          }
        },
        "disposicionEfectivo": {
          "amount": "0"
        },
        "grantedCredits": {
          "amount": "85000.1"
        },
        "images": {
          "id": "IMG01",
          "name": null,
          "url": ""
        },
        "nuevosAbonos": {
          "amount": 0.0
        },
        "nuevosCargos": {
          "amount": 0.0
        },
        "number": "*1924",
        "overDraft": null,
        "pagosTransito": null,
        "paymentMethod": {
          "endDate": "2016-03-14",
          "monetaryPayments": null,
          "paymentAmounts": [
            {
              "id": "PM",
              "name": "pagoMinimo",
              "values": {
                "amount": "2603.19"
              }
            },
            {
              "id": "PNI",
              "name": "PagoNoIntereses",
              "values": {
                "amount": "40049.17"
              }
            }
          ]
        },
        "totalPoints": "0"
      }
    });
  }
  if (req.params && req.params.id == 'TCMXP0000002')  {
    return res.json({
      "error": {
        "code": "MCE0004",
        "descripcion": "Se ha producido un error al consultar el servicio",
        "httpStatus": "400",
        "message": "SIN MOVIMIENTOS EN EL PERIODO",
        "severity": "FATAL",
        "version": "1"
      }
    });
  }
  if (req.params && req.params.id == 'TCMXP0000003'){
    return res.json({
      "data": {
        "alias": null,
        "amountDispute": "0",
        "availableBalance": {
          "currentBalances": {
            "amount": 13701.1,
            "currency": "MXP"
          },
          "pendingBalances": null,
          "postedBalances": null
        },
        "cardId": "TCMXP0000003",
        "cardType": {
          "id": "VI",
          "name": "VISA INTERNACIONAL"
        },
        "cargosTransito": null,
        "comisiones": "",
        "cutOffDate": "2013-09-09",
        "deferredPayment": "",
        "disposedBalance": {
          "currentBalances": {
            "amount": 199,
            "currency": "MXP"
          },
          "pendingBalances": {
            "amount": 0,
            "currency": "MXP"
          },
          "postedBalances": {
            "amount": 199,
            "currency": "MXP"
          }
        },
        "disposicionEfectivo": {
          "amount": "0"
        },
        "grantedCredits": {
          "amount": "13900"
        },
        "images": {
          "id": "IMG01",
          "name": null,
          "url": ""
        },
        "nuevosAbonos": {
          "amount": 0.0
        },
        "nuevosCargos": {
          "amount": 0.0
        },
        "number": "*1763",
        "overDraft": null,
        "pagosTransito": null,
        "paymentMethod": {
          "endDate": "2013-09-27",
          "monetaryPayments": null,
          "paymentAmounts": [
            {
              "id": "PM",
              "name": "pagoMinimo",
              "values": {
                "amount": "882.67"
              }
            },
            {
              "id": "PNI",
              "name": "PagoNoIntereses",
              "values": {
                "amount": "7015.27"
              }
            }
          ]
        },
        "totalPoints": "0"
      }
    });
  }
  return res.json({
      "data": {"ernext();or":"no data"}
    });
}
  
  next();
});

module.exports = router;
