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

  PlayController.$inject = ['$routeParams', '$location', '$scope'];

  function PlayController($routeParams, $location, $scope) {

    /* Private Constants & Variables */
    var maxPairsNum = 26;
    var minPairsNum = 1;
    var cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    var cardSuits = ['clubs', 'spades', 'diamonds', 'hearts'];
    var self = this;
    var pairsNumGoal   = parseInt($routeParams.pairsNum);
    var pairsMatched   = 0;
    var isFlipped      = false;
    var flippedCard    = null;

    /* Params verification */
    if (pairsNumGoal > maxPairsNum) {
      pairsNumGoal = maxPairsNum;
    } else if (pairsNumGoal < minPairsNum) {
      pairsNumGoal = minPairsNum;
    }

    /* Public data */
    self.cards = [];
    self.percentageDone = 0;
    self.pairsLeft      = pairsNumGoal - pairsMatched;

    console.log('controller started pairsNumGoal = ', pairsNumGoal);

    /* Fill cards array */
    for (var i = 0; i < (pairsNumGoal * 2); i++) {
      self.cards.push({
        number: i,
        rank: cardRanks[parseInt(i / cardSuits.length)],
        suit: cardSuits[        (i % cardSuits.length)],
        flipped: false,
        matched: false
      });
    }
    shuffle(self.cards);

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

        if ((card.rank === flippedCard.rank)
            && hasSameColor(card, flippedCard)) {
          console.log('match!');
          registerMatch(card, flippedCard);
        }

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

    /* Helpers */
    function hasSameColor (card1, card2) {
      if (((card1.suit === 'clubs' || card1.suit === 'spades') && (card2.suit === 'clubs' || card2.suit === 'spades'))
          || ((card1.suit === 'diamonds' || card1.suit === 'hearts') && (card2.suit === 'diamonds' || card2.suit === 'hearts'))){
        return true;
      } else {
        return false;
      }
    }

    function registerMatch (card1, card2) {
      card1.matched = true;
      card2.matched = true;

      pairsMatched += 1;
      self.pairsLeft      = pairsNumGoal - pairsMatched;
      self.percentageDone = pairsMatched / pairsNumGoal * 100;

      if (pairsMatched >= pairsNumGoal) {
        $location.path('/results');
      }
    }

    function shuffle (o) {
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

  }

})();