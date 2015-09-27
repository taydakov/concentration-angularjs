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

  SetupController.$inject = ['$location', 'concentrationGame'];

  function SetupController($location, concentrationGame) {

    var self = this;

    /* Difficulty level pairs number */
    self.easyPairsNum   = 6;
    self.mediumPairsNum = 12;
    self.hardPairsNum   = 25;

    self.play = function (cardsNum) {
      console.log('Play num = ', cardsNum);
      $location.path('/play/' + cardsNum);
    }

  }

})();