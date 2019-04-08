angularApp.directive('sortFilters', function () {
      return {
      restrict: 'E',         
      templateUrl: "/app/directives/sortFilters/sortFilters.html",
      scope: {
        isFiltersOpen: '=',
        isOrderBy: '='
      },
      link: ($scope) => {
                           
      }
    } 
});