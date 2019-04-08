angularApp.directive('listView', function () {
      return {
      restrict: 'E',         
      templateUrl: "/app/directives/listView/listView.html",
      scope: true,
      link: ($scope) => {

      }
    } 
});