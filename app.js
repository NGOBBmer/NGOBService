var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var cheques = require('./routes/cheques');
var cards = require('./routes/cards');
var clarifications = require('./routes/clarifications');
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
var mainAccounts = require('./routes/accounts/mainAccounts');
var tsec = require('./routes/dashboard/tsec');
var userInfo = require('./routes/dashboard/userInfo');
var systemDate = require('./routes/dashboard/systemDate');
var logs = require('./routes/dashboard/logs');
var campaigns = require('./routes/dashboard/campaigns');
var validateOtp = require('./routes/dashboard/validateOtp');
var banners = require('./routes/dashboard/banners');
var dashboard = require('./routes/dashboard/dashboard');
var modifyAlias = require('./routes/dashboard/modifyAlias');
var mainOperations = require('./routes/operations/mainOperations');
var qrcronto = require('./routes/security/qr');
var assets = require('./routes/assets');
var auth = require('./routes/auth');
var dropDownMenu = require('./routes/dashboard/dropDownMenu');
var mobileTransfers = require('./routes/dashboard/mobileTransfers');
var headlinesAccounts = require('./routes/dashboard/headlinesAccounts');
var mainTransfers = require('./routes/transfers/mainTransfers');
var dashboardMovements = require('./routes/dashboard/dashboardMovements');
var balanceDashboard = require('./routes/dashboard/balanceDashboard');
var mainClarifications = require('./routes/clarifications/mainClarifications');



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
app.all('*', function(req, res, next) {
  var host = req.get('origin');
  res.setHeader('Access-Control-Allow-Origin', host || '*');
  res.setHeader('Accept-Language', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
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
app.use('/accounts', mainAccounts);
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
app.use('/operations', mainOperations);
app.use('/auth', auth);
app.use('/img', assets);
app.use('/dashboard', dropDownMenu);
app.use('/security', qrcronto);
app.use('/dashboard', mobileTransfers);
app.use('/dashboard', headlinesAccounts);
app.use('/transfers', transfers)
app.use('/transfers', mainTransfers);
app.use('/dashboard', dashboardMovements);
app.use('/dashboard', balanceDashboard);
app.use('/clarifications', clarifications);
app.use('/clarifications', mainClarifications);


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