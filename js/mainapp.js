!function(){function n(n){var o=this;o.easyPairsNum=6,o.mediumPairsNum=12,o.hardPairsNum=25,o.play=function(o){console.log("Play num = ",o),n.path("/play/"+o)}}angular.module("concentrationGameApp").controller("SetupController",n),n.$inject=["$location"]}(),function(){function n(n,o,a){var t=this,e=a(parseInt(n.pairsNum));t.cards=e.cards,t.progress=0,t.matchesLeft=e.matchesGoal,e.on("matchFound",function(n,o){console.log("matchFound"),t.matchesLeft=n,t.progress=o}),e.on("gameWon",function(){console.log("gameWon"),o.path("/results")}),t.handleCardClick=function(n){e.flipCard(n.number)}}angular.module("concentrationGameApp").controller("PlayController",n),n.$inject=["$routeParams","$location","ConcentrationGame"]}(),function(){function n(n){}angular.module("concentrationGameApp").controller("ResultsController",n),n.$inject=["$location"]}();