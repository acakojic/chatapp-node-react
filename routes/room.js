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
    var username = req.session.username;
    console.log('ROOM: Router GET method');
    console.log('Room: Post method; session:', req.session.username);
    if (typeof username == 'undefined'){
	res.redirect('/');
    }else{
	res.render('room', {username: username});
    }
});

router.post('/', function(req, res, next){
    var message = req.body.message;
    var username = req.session.username;
    console.log('Room: POST method');
    console.log('Room: Post method; session:', req.session.username);
    
    console.log('req.body.username:', message);
    
    connection.query('INSERT INTO messages (message) VALUES (?)', message, function (error, results) {
	if (error) throw error;
	console.log('Insert into messages value:', message, 'added successfully!');
    });
    res.render('room', {username: username});
});

module.exports = router;
