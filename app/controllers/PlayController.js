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

  PlayController.$inject = ['$routeParams', '$location', '$scope'];

  function PlayController($routeParams, $location, $scope) {

    /* Private Constants & Variables */
    var maxCardsNum = 52;
    var minCardsNum = 2;
    var self = this;
    var cardsNum    = parseInt($routeParams.pairsNum) * 2;
    var isFlipped   = false;
    var flippedCard = null;

    /* Public data */
    self.cards = [];

    /* Params verification */
    if (cardsNum > maxCardsNum) {
      cardsNum = maxCardsNum
    } else if (cardsNum < minCardsNum) {
      cardsNum = minCardsNum;
    }

    console.log('controller started cardsNum = ', cardsNum);

    /* Fill cards array */
    for (var i = 0; i < cardsNum; i++) {
      self.cards.push({
        number:  i,
        ranking: i,
        color:   true, // false - black, true - red
        flipped: false,
        matched: false
      });
    }

    /* Event Handlers */
    self.handleCardClick = function (card) {
      console.log('handleCardClick card = ', card);
      // Exit if user clicked the same card twice
      if (flippedCard && (flippedCard === card)) {
        return;
      }

      if (!isFlipped && !flippedCard) {
        // Flip the first card in a pair
        card.flipped = true;
        
        isFlipped   = true;
        flippedCard = card;
      } else if (isFlipped && flippedCard) {
        // Flip the second card in a pair and check
        card.flipped = true;

        isFlipped   = true;
        flippedCard = null;
      } else if (isFlipped && !flippedCard) {
        // Flip all the unmatched cards back and flip the current one
        self.cards.forEach(function (card) {
          if (!card.matched) {
            card.flipped = false;
          }
        });
        card.flipped = true;

        isFlipped   = true;
        flippedCard = card;
      }
    };

  }

})();