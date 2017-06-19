var express = require('express');
var router = express.Router();

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

/* GET home page. */
router.get('/iconos/:id', function(req, res, next) {
  res.sendFile(__dirname + '/img/iconos/check_green.svg');
});

router.get('/ngob/instrumento/cronto/:id', function(req, res, next) {
  if(req.params.id === "Scan_QR.png"){
    res.sendFile(__dirname + '/img/ngob/instrumento/cronto/Scan_QR.png');
  }else if(req.params.id === "Search_QR.png"){
    res.sendFile(__dirname + '/img/ngob/instrumento/cronto/Search_QR.png');
  }else if(req.params.id === "Token_ON.png"){
    res.sendFile(__dirname + '/img/ngob/instrumento/cronto/Token_ON.png');
  }
  res.sendFile(__dirname + '/img/ngob/instrumento/cronto/Scan_QR.png');

});

module.exports = router;
