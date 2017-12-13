app.controller('rooms-ctrl', ['$scope','$window', function($scope, $window){

	$scope.chatrooms = [
		{room: 'Dragons'},
		{room: 'Martial Arts'},
		{room: 'Heaven'},
		{room: 'Earth'},
		{room: 'Sky'},
		{room: 'Secret Agents'}
	];

	$scope.join = function(room){
		$window.location.href = `/rooms/${room}`;
	};

}]);