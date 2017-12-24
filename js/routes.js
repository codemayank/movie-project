

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			//location of template
			templateUrl	: 'views/first-page.html',
			//which controller to use
			controller	: 'mainController'
			//controller alias
			controllerAs : 'mainCtrl'
		})
		.when('/movie-info' {
			templateUrl : 'views/movie-info',
		})
		.otherwise(
			{
				template : '<h1>404 Page Not found </h1>'
			}
		);
}]);