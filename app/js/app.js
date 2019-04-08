// MODULE
var angularApp = angular.module('app', ['ui.bootstrap', 'ngAnimate']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$http', '$uibModal', function ($scope, $http, $uibModal) {
    $scope.users = [];
    
    $http.get('https://randomuser.me/api/?results=100&seed=teachup').success(function(data){
      $scope.users = data.results;
    })
    
    $scope.isFiltersOpen = false;
    $scope.isTypeView = 0; // 0 is equal to List view and 1 to Grid view
    
    $scope.maxSize = 3;
    $scope.pageSize = 12,
    $scope.currentPage = 1;

    $scope.open = function(user) {
    
        $uibModal.open({
          animation: false,
          templateUrl: './directives/listView/modalTemplate.html',
          controller: ['$scope', function($scope) {
            $scope.user = user;
          }]

        });
    }
    
    $scope.setOrderProperty = function(propertyName) {
        $scope.orderProperty = propertyName;
    };

}]);

