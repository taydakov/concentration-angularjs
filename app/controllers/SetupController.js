/**
 * Setup controller
 *
 * Chooses difficulty level and redirects user to the appropriate grid
 * 
 */
;(function() {

  angular
    .module('concentrationGameApp')
    .controller('SetupController', SetupController);

  SetupController.$inject = ['$location', 'CONSTANTS'];

  function SetupController($location, CONSTANTS) {

    var self = this;

    self.levels = CONSTANTS.LEVELS;

    self.play = function (cardsNum) {
      $location.path('/play/' + cardsNum);
    }

  }

})();