var videoControllers = angular.module('videoControllers', ['ngAnimate']);

//THESE CONTROL THE SUB PAGE CONTENT OR VIEWS
videoControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
 //NEED TO GET DATA FROM THE YOUTUBE API HERE
    //this will be the home page of the application.

}]);

videoControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
     //this will be the video page

}]);
