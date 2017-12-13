var io = require('socket.io');

var socketIO = {};

socketIO.run = function(server){
	if(server) return io(server);
};

socketIO.listen = function(io){
	io.on('connection', (socket) => {
		
		socket.on('join', (room) =>{
			socket.join(room);
			io.emit(room, 'welcome!');
			console.log(room + ' joined');

			socket.on(room, data => {
				io.in(room).emit(room, data);
				console.log(socket.rooms, `received ${data}`);
			});
		});

	});
};

module.exports = socketIO;

	