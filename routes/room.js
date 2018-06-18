var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test_db'
});

connection.connect();


/* GET room page. */
router.get('/', function(req, res, next) {
    console.log('------------------', req.session.username);
    var username = req.session.username;
    console.log('Room: Get method; session:', req.session.username);
    if (typeof username == 'undefined'){
	res.redirect('http://localhost:3003/');
    }else{

	res.render('room', {username: username});
    }
});

router.post('/', function(req, res, next){
    
});

module.exports = router;
