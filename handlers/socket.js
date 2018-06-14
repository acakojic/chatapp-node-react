var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test_db'
});

connection.connect();

module.exports = function (io) {
    // registration related behaviour goes here...
    io.on('connection', function(socket) {
	socket.on('test message', function (data) {
	    // do stuff
	    
	    var sql = "INSERT INTO messages (user, message) VALUES ('"+ data.username + "', '" + data.message + "')";
	    connection.query(sql, function (error, results) {
		if (error) throw error;
		console.log('Insert into messages value:', data.message, 'added successfully!');
	    });
	    
	    console.log('test message, socket, value:', data);
	    io.emit('add message to ul', data);
	});
    });
}

