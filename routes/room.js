var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('ROOM: GET method');
    res.render('room');
});

router.post('/', function(req, res, next){
    console.log('Room: POST method');
    var username = req.body.username;
    console.log('req.body.username', req.body.username);
    res.render('room');
});

module.exports = router;
