var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/iconos/:id', function(req, res, next) {
  res.sendFile(__dirname + '/img/iconos/check_green.svg');
});

module.exports = router;
