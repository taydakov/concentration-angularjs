/**
 * Setup controller
 *
 * Chooses difficulty level and redirects user to the appropriate grid
 * 
 */
;(function() {

  angular
    .module('concentrationGame')
    .controller('SetupController', SetupController);

  SetupController.$inject = ['$location'];

  function SetupController($location) {

    var self = this;

    self.play = function (cardsNum) {
      console.log('Play num = ', cardsNum);
      $location.path('/play/' + cardsNum);
    }

  }

})();