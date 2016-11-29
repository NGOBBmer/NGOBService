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
router.get('/list', function(req, res, next) {
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
              "concept": "SAT REFERENCIADO",
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
              "concept": "SAT REFERENCIADO",
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
              "concept": "SAT REFERENCIADO",
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
              "concept": "CONTRIBUCION FEDERAL SAT",
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
              "concept": "CONTRIBUCION FEDERAL SAT",
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
          }, {
              "operationDate": "04/03/2016",
              "reference": "74931616064981002666091",
              "concept": "SAT REFERENCIADO",
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
              "operationDate": "04/03/2016",
              "reference": "74931616064981002666156",
              "concept": "SAT REFERENCIADO",
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
              "operationDate": "09/03/2016",
              "reference": "74931616069981002667651",
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
              "operationDate": "11/03/2016",
              "reference": "74931616071981002668408",
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
              "operationDate": "11/03/2016",
              "reference": "74931616071981002668504",
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
              "operationDate": "11/03/2016",
              "reference": "74931616071981002668692",
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
              "operationDate": "11/03/2016",
              "reference": "74931616071981002668716",
              "concept": "SAT REFERENCIADO",
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
              "operationDate": "11/03/2016",
              "reference": "74931616071981002668805",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "128",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "128",
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
              "operationDate": "11/03/2016",
              "reference": "74931616071981002668977",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "113",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "113",
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
              "operationDate": "11/03/2016",
              "reference": "74931616071981002669015",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "114",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "114",
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
              "operationDate": "13/04/2016",
              "reference": "74931616104981002734847",
              "concept": "SAT REFERENCIADO",
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
              "operationDate": "13/04/2016",
              "reference": "74931616104981002734870",
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
              "operationDate": "14/04/2016",
              "reference": "74931616105981002736318",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "138",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "138",
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
              "operationDate": "14/04/2016",
              "reference": "74931616105981002736456",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "131",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "131",
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
              "operationDate": "05/05/2016",
              "reference": "74931616126981002753865",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "30",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "30",
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
              "operationDate": "05/05/2016",
              "reference": "74931616126981002753881",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "32",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "32",
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
              "operationDate": "05/05/2016",
              "reference": "74931616126981002753921",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "49",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "49",
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
              "reference": "74931616132981002755152",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "30",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "30",
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
              "reference": "74931616132981002755234",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "49",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "49",
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
              "operationDate": "12/05/2016",
              "reference": "74931616133981002756091",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "39",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "39",
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
              "operationDate": "12/05/2016",
              "reference": "74931616133981002756149",
              "concept": "SAT REFERENCIADO",
              "amount": {
                  "amount": "27",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "27",
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
              "operationDate": "18/05/2016",
              "reference": "74931616139981002757730",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "110",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "110",
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
              "operationDate": "20/05/2016",
              "reference": "74931616141981002759508",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "100",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "100",
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
              "operationDate": "20/05/2016",
              "reference": "74931616141981002759825",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "200",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "200",
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
              "operationDate": "20/05/2016",
              "reference": "74931616141981002759833",
              "concept": "CONTRIBUCION FEDERAL SAT",
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
              "operationDate": "20/05/2016",
              "reference": "74931616141981002759841",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "110",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "110",
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
              "operationDate": "20/05/2016",
              "reference": "74931616141981002759866",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "100",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "100",
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
              "operationDate": "20/05/2016",
              "reference": "74931616141981002759874",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "120",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "120",
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
              "operationDate": "25/05/2016",
              "reference": "74931616146981002763573",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "5",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "5",
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
              "operationDate": "25/05/2016",
              "reference": "74931616146981002763581",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "30",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "30",
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
              "operationDate": "26/05/2016",
              "reference": "74931616147981002763848",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "15",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "15",
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
              "operationDate": "26/05/2016",
              "reference": "74931616147981002763855",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "50",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "50",
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
              "operationDate": "26/05/2016",
              "reference": "74931616147981002764293",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "100",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "100",
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
              "operationDate": "26/05/2016",
              "reference": "74931616147981002764309",
              "concept": "CONTRIBUCION FEDERAL SAT",
              "amount": {
                  "amount": "120",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "120",
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
              "operationDate": "18/07/2016",
              "reference": "74931616200910172789292",
              "concept": "*** SU PAGO GRACIAS ***",
              "amount": {
                  "amount": "-3935.76",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-3935.76",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "18/08/2016",
              "reference": "74931616231970172810905",
              "concept": "0020051016DISPOS.EFECTIVO",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "22/08/2016",
              "reference": "74931616235981002813287",
              "concept": "PAGO TESORERIA    B.COM 0",
              "amount": {
                  "amount": "10",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "10",
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
              "operationDate": "24/08/2016",
              "reference": "74931616238981002815997",
              "concept": "AGUA VIGENTE      B.COM 0",
              "amount": {
                  "amount": "10",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "10",
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
              "operationDate": "03/10/2016",
              "reference": "74931616277981002834352",
              "concept": "PAGO TENENCIA     B.COM",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "03/10/2016",
              "reference": "74931616277981002834386",
              "concept": "PAGO TENENCIA     B.COM",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "11/10/2016",
              "reference": "74931616285981002839586",
              "concept": "PREDIAL VENCIDO   B.COM 0",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "13/10/2016",
              "reference": "74931616287981002841794",
              "concept": "PAGO TESORERIA    B.COM",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "13/10/2016",
              "reference": "74931616287981002841800",
              "concept": "PREDIAL VENCIDO   B.COM",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "18/10/2016",
              "reference": "74931616292981002845274",
              "concept": "PREDIAL VIGENTE   B.COM 0",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "18/10/2016",
              "reference": "74931616292970172845404",
              "concept": "0060046010DISPOS.EFECTIVO",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "18/10/2016",
              "reference": "74931616292970172845607",
              "concept": "0060082054INTERN.PAGO TDC",
              "amount": {
                  "amount": "-2000",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-2000",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "18/10/2016",
              "reference": "74931616292970172845623",
              "concept": "0060082065INTERN.PAGO TDC",
              "amount": {
                  "amount": "-100",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-100",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "25/10/2016",
              "reference": "74931616299981002849409",
              "concept": "PAGO DE ANTECEDEN B.COM",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "26/10/2016",
              "reference": "74931616300970172851607",
              "concept": "0040905043INTERN.PAGO TDC",
              "amount": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "26/10/2016",
              "reference": "74931616300970172851631",
              "concept": "0040910026INTERN.PAGO TDC",
              "amount": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "29/10/2016",
              "reference": "74931616305970172857482",
              "concept": "0040004028INTERN.PAGO TDC",
              "amount": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "01/11/2016",
              "reference": "74931616306970172858915",
              "concept": "0000048018INTERN.PAGO TDC",
              "amount": {
                  "amount": "-150",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-150",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "01/11/2016",
              "reference": "74931616306970172858931",
              "concept": "0080063015DISPOS.EFECTIVO",
              "amount": {
                  "amount": "200",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "200",
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
              "operationDate": "08/11/2016",
              "reference": "74931616313970172863842",
              "concept": "0000098044INTERN.PAGO TDC",
              "amount": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "08/11/2016",
              "reference": "74931616313970172863859",
              "concept": "0000098046INTERN.PAGO TDC",
              "amount": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-1",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "08/11/2016",
              "reference": "74931616313970172864093",
              "concept": "0020005037DISPOS.EFECTIVO",
              "amount": {
                  "amount": "1",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "1",
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
              "operationDate": "08/11/2016",
              "reference": "74931616313970172864117",
              "concept": "0080007012DISPOS.EFECTIVO",
              "amount": {
                  "amount": "2",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "2",
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
              "operationDate": "15/11/2016",
              "reference": "74931616320970172878686",
              "concept": "0020073030INTERN.PAGO TDC",
              "amount": {
                  "amount": "-0.2",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-0.2",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0000",
                  "card": "****1924",
                  "participant": "TIT."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "16/11/2016",
              "reference": "74931616322970172881169",
              "concept": "0060081039INTERN.PAGO TDC",
              "amount": {
                  "amount": "-400",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-400",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0001",
                  "card": "****8846",
                  "participant": "ADC."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }, {
              "operationDate": "16/11/2016",
              "reference": "74931616322970172881151",
              "concept": "0060081021INTERN.PAGO TDC",
              "amount": {
                  "amount": "-300",
                  "currency": "MXN"
              },
              "postedBalance": {
                  "amount": "-300",
                  "currency": "MXN"
              },
              "card": {
                  "idSubCard": "TJ0002",
                  "card": "****9586",
                  "participant": "ADC."
              },
              "category": "G",
              "type": "Abono",
              "rewardsGenerated": "",
              "rewardsconsumed": "",
              "deferred": false,
              "movementPending": false
          }],
          "paginationKey": ""

      }]
  });
});

module.exports = router;