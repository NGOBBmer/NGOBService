var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var cheques = require('./routes/cheques');
var cards = require('./routes/cards');
var pg = require('./routes/pg');
var operations = require('./routes/operations');
var transfers = require('./routes/transfers');
var expandedCard = require('./routes/expanded-card');
var movements = require('./routes/movements');
var relatedCards = require('./routes/related-cards');
var periods = require('./routes/periods');
var promotions = require('./routes/promotions');
var accountStatement = require('./routes/accountStatement');
var sendAccountStatement = require('./routes/sendAccountStatement');
var accounts = require('./routes/accounts/listAccounts');
var accountsMovs = require('./routes/accounts/accountsMovs');
var periodsAc = require('./routes/accounts/periodsAc');
var accountStatementAc = require('./routes/accounts/accountStatementAc');
var sendAccountStatementAc = require('./routes/accounts/sendAccountStatementAc');
var tsec = require('./routes/dashboard/tsec');
var userInfo = require('./routes/dashboard/userInfo');
var systemDate = require('./routes/dashboard/systemDate');
var logs = require('./routes/dashboard/logs');
var campaigns = require('./routes/dashboard/campaigns');
var validateOtp = require('./routes/dashboard/validateOtp');
var banners = require('./routes/dashboard/banners');
var dashboard = require('./routes/dashboard/dashboard');
var modifyAlias = require('./routes/dashboard/modifyAlias');
var documents = require('./routes/operations/documents');
var agileOperations = require('./routes/operations/agileOperations');
var delAgileOperations = require('./routes/operations/delAgileOperations');
var suggestedOperations = require('./routes/operations/suggestedOperations');
var actionalAdvice = require('./routes/operations/actionalAdvice');
var deleteActionalAdvice = require('./routes/operations/deleteActionalAdvice');
var qrcronto = require('./routes/security/qr');
var assets = require('./routes/assets');
var auth = require('./routes/auth');
var dropDownMenu = require('./routes/dashboard/dropDownMenu');
var mobileTransfers = require('./routes/dashboard/mobileTransfers');
var headlinesAccounts = require('./routes/dashboard/headlinesAccounts');
var frequentOperations = require('./routes/transfers/frequentOperations');
var creditCardPayment = require('./routes/transfers/creditCardPayment');
var myAccountsTransfer = require('./routes/transfers/myAccountsTransfer');
var otherAccountsTransfer = require('./routes/transfers/otherAccountsTransfer');
var cashAdvanceFee = require('./routes/transfers/cashAdvanceFee');
var mainTransfers = require('./routes/transfers/mainTransfers');
var dashboardMovements = require('./routes/dashboard/dashboardMovements');
var balanceDashboard = require('./routes/dashboard/balanceDashboard');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/cheques', cheques);
app.use('/dashboard', pg);
app.use('/cards', promotions);
app.use('/cards', expandedCard);
app.use('/cards', cards);
app.use('/cards', movements);
app.use('/cards', relatedCards);
app.use('/cards', periods);
app.use('/cards', accountStatement);
app.use('/cards', sendAccountStatement);
app.use('/accounts', accounts);
app.use('/accounts', accountsMovs);
app.use('/accounts', periodsAc);
app.use('/accounts', accountStatementAc);
app.use('/accounts', sendAccountStatementAc);
app.use('/dashboard', dashboard);
app.use('/dashboard', tsec);
app.use('/dashboard', userInfo);
app.use('/dashboard', systemDate);
app.use('/dashboard', campaigns);
app.use('/dashboard', logs);
app.use('/dashboard', validateOtp);
app.use('/dashboard', banners);
app.use('/dashboard', modifyAlias);
app.use('/operations', operations);
app.use('/operations', documents);
app.use('/operations', agileOperations);
app.use('/operations', suggestedOperations);
app.use('/operations', actionalAdvice);
app.use('/operations', deleteActionalAdvice);
app.use('/operations', delAgileOperations);
app.use('/auth', auth);
app.use('/img', assets);
app.use('/dashboard', dropDownMenu);
app.use('/security', qrcronto);
app.use('/dashboard', mobileTransfers);
app.use('/dashboard', headlinesAccounts);
app.use('/transfers', transfers)
app.use('/transfers', frequentOperations);
app.use('/transfers', creditCardPayment);
app.use('/transfers', myAccountsTransfer);
app.use('/transfers', otherAccountsTransfer);
app.use('/transfers', cashAdvanceFee);
app.use('/transfers', mainTransfers);
app.use('/dashboard', dashboardMovements);
app.use('/dashboard', balanceDashboard);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(4000, function() {
  console.log('Example app listening on port 4000 :)!');
});
module.exports = app;