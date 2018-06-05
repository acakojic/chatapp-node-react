var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('This is from GET method');
    res.render('index', {username: 'This is from GET'});
});

router.post('/', function(req, res, next){
    console.log('This is from POST method');
    var username = req.body.username;
    console.log(req.body);
    res.render('index', {username: username});
});

module.exports = router;
