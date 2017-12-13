app.controller('space-ctrl', ['$scope', '$window', function($scope, $window){

	const socket = io('http://localhost:8000');
	const room = $window.location.href.split('/')[4];

	$scope.messages = [];

	function start(room){
		socket.emit('join', room);

		socket.on(room, data => {
			$scope.messages.push({msg: data});
			$scope.$apply();
		});
	}

	start(room);

	$scope.send = function(msg){
		socket.emit(room, msg);
	};


}]);