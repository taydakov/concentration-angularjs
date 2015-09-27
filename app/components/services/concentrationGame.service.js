;(function() {


  /**
   * Concenctration game logic factory
   *
   * Stores the state of the game, performs all the actions and notifies the app about changes
   * 
   */
  angular
    .module('concentrationGameApp')
    .factory('concentrationGame', concentrationGame);

  concentrationGame.$inject = [];


  ////////////


  function concentrationGame() {

    var concentrationGame = function (pairsNum) {
      this.text = "Hello world!";
    }

    return function () {
      return new concentrationGame;
    }

    // return {
    //   /* Methods */
    //   generateCards: generateCards,
    //   flipCard:      flipCard,
    //   /* Properties */
    //   cards:        cards,
    //   pairsTotal:   pairsTotal,
    //   matchesGoal:  matchesGoal,
    //   matchesFound: matchesFound,
    //   /* Callbacks */
    // }

  }


})();
