var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log('Index Get Method;');
    res.render('index', {username: 'Please login..'});
});

router.post('/', function(req, res, next){
    console.log('Index Post Method:', req.body.username);
    var username = req.session.username = req.body.username;
    
    console.log('Index Post Method; Added session:', username);
    
    res.render('index', {username: 'Welcome ' + username});
});

module.exports = router;
