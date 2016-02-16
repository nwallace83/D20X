app.directive("hmenu", function() {
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			element.on('click', function() {
				$('#menu-area').slideToggle();
			})
		}
	}

})

app.directive('menuItem', function() {
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			element.on('click', function() {
				$('#menu-area').slideToggle();
			})
		}

	}
})