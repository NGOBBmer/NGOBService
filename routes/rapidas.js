var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


router.get('/rapidas/:id', function(req, res, next) {
	if(req.params.id === "rapida_ob_40_x_40.png"){
	  res.sendFile(__dirname + '/img/rapidas/rapida_ob_40_x_40.png');
	}else if(req.params.id === "rapida_tt_40_x_40.png"){
	  res.sendFile(__dirname + '/img/rapidas/rapida_tt_40_x_40.png');
	}else if(req.params.id === "rapida_ta_40_x_40.png"){
	  res.sendFile(__dirname + '/img/rapidas/rapida_ta_40_x_40.png');
	}
	res.sendFile(__dirname + '/img/rapidas/rapida_tt_40_x_40.png');
});


module.exports = router;
