var express = require('express');
var router = express.Router();

router.get('/rapidas/:id', function(req, res, next) {
	if(req.params.id === "rapida_ob_40_x_40.png"){
	  res.sendFile(__dirname + "/img/rapidas/rapida_ob_40_x_40.png");
	}else if(req.params.id === "rapida_tt_40_x_40.png"){
	  res.sendFile(__dirname + "/img/rapidas/rapida_tt_40_x_40.png");
	}else if(req.params.id === "rapida_ta_40_x_40.png"){
	  res.sendFile(__dirname + "/img/rapidas/rapida_ta_40_x_40.png");
	}
	res.sendFile(__dirname + "/img/rapidas/rapida_tt_40_x_40.png");
});


module.exports = router;
