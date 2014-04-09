var myApp = angular.module('myApp', ['ngRoute', 'movieControllers']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/list',{
            templateUrl: 'partials/lists.html',
            controller: 'ListController'
        }).
        when('/movie/:id',{
            templateUrl: 'partials/movie.html',
            controller: 'DetailsController'
        }).
        otherwise({
                redirectTo:'/list'
            });
}])