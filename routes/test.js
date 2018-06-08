var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Login: GET");
    res.render('test');
});

router.post('/', function(req, res, next) {
    console.log("Login: POST:", req.body.username);
    res.render('users', {username: 'Aca'}, function(err, html) {
	console.log(html);
    });
});


module.exports = router;
