var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test_db'
});

connection.connect();

var clients = [];
var test_clients = ['aca', 'misa'];
var count = 0;
var bool = false;

module.exports = function (io) {
    // registration related behaviour goes here...
    io.on('connection', function(socket) {
	
	socket.on('test message', function (data) {
	    // do stuff
	    var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
	    
	    var sql = "INSERT INTO messages (user, message, created_at) VALUES ('" + data.username + "', '" + data.message + "', '" + date + "')";
	    connection.query(sql, function (error, results) {
		if (error) throw error;
		console.log('Insert into messages value:', data.message, 'added successfully!');
	    });
	    
	    console.log('test message, socket, value:', data);
	    io.emit('add message to ul', data);

	});

	//////////////////////////////////////////////////

	socket.on('clients', function(data){
	    console.log("Clients: ", data);
	    for (var i = 0; i < clients.length; ++i){
		if (data === clients[i]){

		    bool = true;
		}
	    }

	    if (bool !== true){
		clients.push(data);
	    }
	    bool = false;

	    console.log('11111', clients);

	    io.emit('clients', clients);
	    count = clients.length;
	    io.emit('broadcast', count + ' people online');
	});

	socket.on('join room', function (data){
	    console.log("JOINED ROOM");
	    socket.join("room1");
	});

	socket.on('hello', function(x, y, z, abc){
	    console.log("XYZabc", x, ":", y, ";", z, "-", abc);
	});

	// private chat clients test
	socket.on('private room', function(data){
	    var result = test_clients.includes(data);
	    console.log("PRivate room", data);
	    console.log("PRIVATE CHAT:", result);

	    if (result){
		socket.emit('private room', data, function(){
		    console.log("Welcome to private chat room", data);
		});
	    }
	});
	
	//disconnect client
	socket.on('disconnect', function (data){
	    console.log("USER HAS DISCONNECTED");
	    count = clients.length;
	    io.emit('broadcast', count + ' people online');
	});

	
    });


}

