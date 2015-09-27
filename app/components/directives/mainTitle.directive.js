;(function() {

  'use strict';

  /**
   * 
   * Main App Title
   * 
   * @example
   * <main-title><main-title/>
   *
   */
  angular
    .module('concentrationGameApp')
    .directive('mainTitle', mainTitle);

  mainTitle.$inject = ['CONSTANTS'];

  function mainTitle(CONSTANTS) {

    // Definition of the directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'app/components/directives/main-title.html',
      controller: function ($scope) {
        $scope.title = CONSTANTS.TITLE;
      }
    };

    return directiveDefinitionObject;
  }

})();