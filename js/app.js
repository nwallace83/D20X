var app = angular.module('myProject',['ngRoute'])

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'js/main/main.html'
	})

})