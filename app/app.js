var app = angular.module('asApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl : 'views/home.html',
        controller  : 'homeCtrl'
    }) 
    .when('/tasks',{
        templateUrl : 'views/tasks.html'
    }) 
    .otherwise({
        redirectTo: '/home'
    });
});
