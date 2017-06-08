var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/oneclic/:id', function(req, res, next) {
	if(req.params.id == "Token.png"){
	  res.sendFile(__dirname + '/img/oneclic/Token.png');
	}else if(req.params.id == "TermInvestments.png"){
		res.sendFile(__dirname + '/img/oneclic/TermInvestments.png');
	}else if(req.params.id == "TDCadditional.png"){
		res.sendFile(__dirname + '/img/oneclic/TDCadditional.png');
	}else if(req.params.id == "TDC.png"){
		res.sendFile(__dirname + '/img/oneclic/TDC.png');
	}else if(req.params.id == "ResidentPayment.png"){
		res.sendFile(__dirname + '/img/oneclic/ResidentPayment.png');
	}else if(req.params.id == "Promissory.png"){
		res.sendFile(__dirname + '/img/oneclic/Promissory.png');
	}else if(req.params.id == "PPI.png"){
		res.sendFile(__dirname + '/img/oneclic/PPI.png');
	}else if(req.params.id == "PersonalBanker.png"){
		res.sendFile(__dirname + '/img/oneclic/PersonalBanker.png');
	}else if(req.params.id == "Investments.png"){
		res.sendFile(__dirname + '/img/oneclic/Investments.png');
	}else if(req.params.id == "Insurance.png"){
		res.sendFile(__dirname + '/img/oneclic/Insurance.png');
	}else if(req.params.id == "ILC.png"){
		res.sendFile(__dirname + '/img/oneclic/ILC.png');
	}else if(req.params.id == "Funds.png"){
		res.sendFile(__dirname + '/img/oneclic/Funds.png');
	}else if(req.params.id == "EFI.png"){
		res.sendFile(__dirname + '/img/oneclic/EFI.png');
	}else if(req.params.id == "DebitsPayments.png"){
		res.sendFile(__dirname + '/img/oneclic/DebitsPayments.png');
	}else if(req.params.id == "CreditCar.png"){
		res.sendFile(__dirname + '/img/oneclic/CreditCar.png');
	}else if(req.params.id == "Advancement.png"){
		res.sendFile(__dirname + '/img/oneclic/Advancement.png');
	}else if(req.params.id == "Portability.png"){
		res.sendFile(__dirname + '/img/oneclic/ Portability.png');
	}else if(req.params.id == "Trader.png"){
		res.sendFile(__dirname + '/img/oneclic/Trader.png');
	}

});

module.exports = router;
