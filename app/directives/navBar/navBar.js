angularApp.directive('navBar', function () {
      return {
      restrict: 'E',         
      templateUrl: "/app/directives/navBar/navBar.html",
      scope: {
        isFiltersOpen: '='
      },
      link: ($scope) => {
          
      }
    } 
});