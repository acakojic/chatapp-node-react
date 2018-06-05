var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Users: GET");
    res.render('users');
});

router.post('/', function(req, res, next){
    console.log("Users: POST");
    res.render('users', {username: req.body.username});
});


module.exports = router;
