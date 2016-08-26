app.controller('homeCtrl', function($scope, $location){
    $scope.redirect = function(){
        $location.path('/tasks');
    };
});
