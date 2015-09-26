/**
 * Main game controller
 *
 * Provides cards to display for Cards grid and tracks what cards have been matched
 * 
 */
;(function() {

  angular
    .module('concentrationGame')
    .controller('PlayController', PlayController);

  PlayController.$inject = ['$routeParams', '$location'];

  function PlayController($routeParams, $location) {

    var self = this;

    console.log('controller started routeParams = ', $routeParams);

    self.cards = [];
    for (var i = 0; i < 52; i++) {
      self.cards.push({});
    }

  }


})();