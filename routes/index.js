var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var username = req.session.username;
    console.log('Index Get Method; session: ', username );

    if (typeof username == 'undefined'){
	res.render('index', {username: 'Please login..'});
    }else{
	res.redirect('/room');
    }
    
});

router.post('/', function(req, res, next){
    console.log('Index Post Method:', req.body.username);
    var username = req.session.username = req.body.username;
    
    console.log('Index Post Method; Added session:', username);
    if (typeof username == 'undefined'){
	res.redirect('/');
    }else{
	res.redirect('/room');
    }

});

module.exports = router;
