'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var router = express.Router();
const ENV = process.env.NODE_ENV;
// isDevServer: helpers.isWebpackDevServer()

io.on('connection', function(socket){ 
    console.log('io: a user connected')

    // router.post('/api/newFeed', function(req, res, next) {
    //     socket.emit('newFeed', req);
    //     res.json({});
    // });

    let i = 0;

    setInterval(() => {
        i++;
        let newsFeed = {
            title: 'Someone commited ' + i,
            description: 'Refactored some component'
        }
        socket.emit('newsFeed', newsFeed);
    }, 6000);

    socket.on('disconnect', function(){
        console.log('io: a user disconnected')
    });
});

app.use(express.static('dist'));

if (ENV !== 'production') {
    
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
    });
}


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use('/', router);

app.get('/api/newsfeed', function (req, res) {

    let demoFeeds = [
        { title: 'Paulius1 commited', description: 'Refactored file upload' },
        { title: 'Tomas1 commited', description: 'Added migrations' }        
    ]

    res.json({
        data: demoFeeds  
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

server.listen('3000', function() {
  console.log('%s listening at %s', server.name, server.url);
});