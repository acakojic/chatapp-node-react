var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3003;

var indexRouter = require('./routes/index');
var messagesRouter = require('./routes/messages');
var roomRouter = require('./routes/room');
var loginRouter = require('./routes/login');
var testRouter = require('./routes/test');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'ssshhhhh',
    resave: true,
    saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/messages', messagesRouter);
app.use('/room', roomRouter);
app.use('/login', loginRouter);
app.use('/test', testRouter);


//handle sockets:
require('./handlers/socket')(io);



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

server.listen(port, function(){
  console.log('listening on *:' + port);
});

module.exports = {app: app, server: server};
