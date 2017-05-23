var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');

var LOGS = require('../../mock/V00/dashboard/logs/logs_01.json');
var urlTxt = '../../mock/V00/dashboard/logs/writeLog.txt';

/* GET users listing. */
router.use(function(req, res, next) {
  var host = req.get('origin');
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// handler for query http://localhost:4000/dashboard/V00/logs
/*
{
  "message": "ocurrio un error",
  "code": "",
  "webComponent": "",
  "urlRequest": "",
  "type": "E"
}
*/
router.post('/V00/logs', function(req, res, next) {
  
  var filePath= path.join(__dirname, urlTxt);

  var tmp = fs.readFileSync(filePath, 'utf8');
  var nvoTexto = "Se agrega nueva linea: " + req.body.message + "\n";

  fs.truncate(filePath, 0, function() {
    fs.writeFile(filePath, tmp + nvoTexto , function (err) {
        if (err) {
            return console.log("Error writing log: " + err);
        }
    });
  });

  return res.json(LOGS);
  next();
});


module.exports = router;

