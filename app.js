var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var seq =  require('./config.js');
var routes = require('./routes/index');


// var test2 = require('./routes/test2');
var register=require('./routes/register');
var loginUser=require('./routes/loginUser');
var login = require('./routes/login');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); //ejs
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
  req.seq =  seq;
  return next();
})
app.use('/', routes);

// app.use('/test' , test);
// app.use('/test2',test2);
app.use('/register',register)
app.use('/loginUser',loginUser)
app.use('/login',login);
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
app.listen(7852,function(){
  console.log('App on currently')
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
