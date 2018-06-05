var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Login: GET");
    res.render('login');
});

router.post('/', function(req, res, next) {
    console.log("Login: POST");
    res.render('login', {username: req.body.username});
});




module.exports = router;
