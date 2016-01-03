app.controller('mainCtrl', function($scope, mainService) {
	$scope.exercises = [];

	if (!$scope.equipment) {
		$scope.equipment = {
			"Bands": false,
			"Barbell": true,
			"Body Only": false,
			"Cable": false,
			"Dumbbell": false,
			"E-Z Curl Bar": false,
			"Exercise Ball": false,
			"Foam Roll": false,
			"Kettlebells": false,
			"Medecine Ball": false
		};
	}

	if (!$scope.muscle) {
		$scope.muscle = {
			"Abdominals": false,
			"Abductors": false,
			"Adductors": false,
			"Biceps": true,
			"Calves": false,
			"Chest": false,
			"Forearms": false,
			"Glutes": false,
			"Hamstrings": false,
			"Lats": false,
			"Lower Back": false,
			"Middle Back": false,
			"Neck": false,
			"Quadriceps": false,
			"Shoulders": false,
			"Traps": false,
			"Triceps": false
		};
	}

	$scope.randomSingle = function() {
		if (!equipmentSelected()) {
			console.log('No equipment selected');
			return;
		}
		while (true) {
			ranWorkout = mainService.getWorkout(1);
			reqEquipment = ranWorkout['Equipment'].trim();
			reqMuscle = ranWorkout['Muscle'].trim();
			if ($scope.equipment[reqEquipment] && $scope.muscle[reqMuscle]) {
				break;
			}
		}
		$scope.exercises = [];
		$scope.exercises.push(ranWorkout);
	}


	function equipmentSelected() {
		for (var key in $scope.equipment){
			if ($scope.equipment[key] === true) {
				return true;
			}
		}
		return false;
	}


	$scope.randomSingle();
})