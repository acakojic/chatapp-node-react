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

/* GET messages json listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM messages order by id desc limit 10', function (error, results, fields) {
	console.log("Messages: ROOTES GET");
	if (error) throw error;
	
//	console.log('The solution is: ', results);
	res.json(results);
    });
});


module.exports = router;
