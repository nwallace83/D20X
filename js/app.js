var app = angular.module('myProject',['ngRoute'])

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'js/main/main.html'
	})
	.when ('/equipment', {
		templateUrl: 'js/equipment/equipment.html'
	})
	.otherwise({
		redirectTo: '/equipment'
	})

})