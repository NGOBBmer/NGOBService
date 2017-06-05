var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/oneclic/:id', function(req, res, next) {
  res.sendFile(__dirname + '/img/oneclic/Portability.png');

});

module.exports = router;
