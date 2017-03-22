var express = require('express');
var router = express.Router();
var json_paola01 = require('../../mock/V00/paola/prueba01.json');
var json_gio02 = require('../../mock/V00/paola/prueba02.json');
var error = require('../../mock/V00/paola/error.json');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
});

// handler for query http://localhost:4000/paola/V00/prueba?nombre=tunombre
router.get('/V00/prueba', function(req, res, next) {
  if (req.query.nombre != null){
    if (req.query.nombre=='Paola'){
      return res.json(json_paola01);
    }
    if (req.query.nombre=='Giovanni'){
      return res.json(json_gio02);
    }
    return res.json(error);
  }
  return res.json(error);
});


module.exports = router;