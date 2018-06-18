var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Login: GET");

    var username = req.session.username;

    if (typeof username == 'undefined'){
	res.redirect('http://localhost:3003/');
    }else{
	res.render('test', {username: username});
    }
});

router.post('/', function(req, res, next) {
    console.log("Login: POST:", req.body.username);
    res.render('users', {username: 'Aca'}, function(err, html) {
	console.log(html);
    });
});


module.exports = router;
