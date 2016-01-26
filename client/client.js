var app = angular.module('bankApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log('angular hooked up');

}]);

app.controller('successController', ['$scope', '$http', function($scope, $http) {
    $http.get('/getUser').then(function(response) {
        $scope.user = response.data
        console.log(response);
    })
}]);

