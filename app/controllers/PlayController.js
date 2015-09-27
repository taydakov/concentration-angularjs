/**
 * Main game controller
 *
 * Provides cards to display for Cards grid and tracks what cards have been matched
 * 
 */
;(function() {

  angular
    .module('concentrationGameApp')
    .controller('PlayController', PlayController);

  PlayController.$inject = ['$routeParams', '$location', 'ConcentrationGame'];

  function PlayController($routeParams, $location, ConcentrationGame) {

    var self = this;
    var concentrationGame = ConcentrationGame(parseInt($routeParams.pairsNum));
    
    self.cards = concentrationGame.cards;
    self.progress    = 0;
    self.matchesLeft = concentrationGame.matchesGoal;

    /* Game Event Handlers */
    concentrationGame.on('matchFound', function (matchesLeft, progress) {
      console.log('matchFound');
      self.matchesLeft = matchesLeft;
      self.progress    = progress;
    });
    concentrationGame.on('gameWon', function () {
      console.log('gameWon');
      $location.path('/results');
    });

    /* UI Event Handlers */
    self.handleCardClick = function (card) {
      concentrationGame.flipCard(card.number);
    };

  }

})();