module.exports = function (io) {
    // registration related behaviour goes here...
    io.on('connection', function(socket) {
	socket.on('test message', function (data) {
	    // do stuff
	    console.log('test message, socket, value:', data);
	    console.log('--+++++----- ', data.username);
	    io.emit('add message to ul', data);
	});
    });
}

