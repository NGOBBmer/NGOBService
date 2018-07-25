var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//Indexs
var routes = require('./routes/index');
var pg = require('./routes/mainIndexs/pg');

var mainCards = require('./routes/cards/mainCards');
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
var dropDownMenu = require('./routes/dashboard/dropDownMenu');
var mobileTransfers = require('./routes/dashboard/mobileTransfers');
var headlinesAccounts = require('./routes/dashboard/headlinesAccounts');
var mainTransfers = require('./routes/transfers/mainTransfers');
var dashboardMovements = require('./routes/dashboard/dashboardMovements');
var balanceDashboard = require('./routes/dashboard/balanceDashboard');
var mainClarifications = require('./routes/clarifications/mainClarifications');
var mainHire = require('./routes/hire/mainHire');

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
app.use('/dashboard', pg);
app.use('/cards', mainCards);
app.use('/accounts', mainAccounts);
app.use('/transfers', mainTransfers);
app.use('/clarifications', mainClarifications);
app.use('/hire', mainHire);
app.use('/security', qrcronto);
app.use('/operations', mainOperations);

app.use('/dashboard', dashboard);
app.use('/dashboard', tsec);
app.use('/dashboard', userInfo);
app.use('/dashboard', systemDate);
app.use('/dashboard', campaigns);
app.use('/dashboard', logs);
app.use('/dashboard', validateOtp);
app.use('/dashboard', banners);
app.use('/dashboard', modifyAlias);
app.use('/dashboard', dashboardMovements);
app.use('/dashboard', balanceDashboard);
app.use('/dashboard', dropDownMenu);
app.use('/dashboard', mobileTransfers);
app.use('/dashboard', headlinesAccounts);

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