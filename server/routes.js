var express = require('express');
var router = express.Router();

router.get('/api/smth', function(req, res, next) {
    res.json({});
});

router.get('/socket.io/', function(req, res, next) {
    res.json({});
});

module.exports = router;