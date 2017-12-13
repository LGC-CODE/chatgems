var port = 8000;

var io = require('socket.io')(port);

io.on('connection', (socket) => {
	
	socket.on('join', (room) =>{
		socket.join(room);
		io.emit(room, 'hello world');
		console.log(room + ' joined');

		socket.on(room, data => {
			io.in(room).emit(room, data);
			console.log(socket.rooms, `received ${data}`);
		});
	});

});

	