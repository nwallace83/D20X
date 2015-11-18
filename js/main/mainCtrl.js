app.controller('mainCtrl', function($scope, mainService) {
	$scope.exercises = [];
	$scope.randomSingle = function() {
		console.log('getting random');
		$scope.exercises = [];
		$scope.exercises.push(mainService.getWorkout(1));
	}

		$scope.randomSingle();
})