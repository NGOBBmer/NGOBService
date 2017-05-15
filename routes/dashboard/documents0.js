var express = require('express');
var router = express.Router();
var PDF = require('../../mock/V00/dashboard/documents0/pdf.json');
var HTML = require('../../mock/V00/dashboard/documents0/html.json');
var HTML_PRINT = require('../../mock/V00/dashboard/documents0/html_print.json');
var XLS = require('../../mock/V00/dashboard/documents0/xls.json');
var NOK = require('../../mock/V00/dashboard/documents0/error.json');

router.use(function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// handler for query http://localhost:4000/dashboard/V00/getPDFDocuments
/*se espera

{
  "productId": "CHMXP0000001",
  "businessFlow": "MOVEMENTS",
  "operationType": "PRINT",
  "type": "pdf","html","xls"
}

*/
router.post('/V00/getPDFDocuments', function(req, res, next) {
  if (req.body.type=="pdf"){
    return res.json(PDF);
  }
  else if (req.body.type=="html"){
    if (req.body.operationType=="PRINT")
      return res.json(HTML_PRINT);
    else
      return res.json(HTML);
  }
  else if (req.body.type=="xls"){
    return res.json(XLS);
  }
  return res.status(400).json(NOK);
  next();
});

module.exports = router;