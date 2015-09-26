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
    var cardsNum = parseInt($routeParams.pairsNum) * 2;

    console.log('controller started cardsNum = ', cardsNum);

    self.cards = [];
    for (var i = 0; i < cardsNum; i++) {
      self.cards.push({});
    }

  }

})();