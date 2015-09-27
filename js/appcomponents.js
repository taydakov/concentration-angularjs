!function(){function t(t,e,n,r){e.html5Mode(!1),t.when("/",{templateUrl:"app/views/setup.html",controller:"SetupController",controllerAs:"setup"}).when("/play/:pairsNum",{templateUrl:"app/views/play.html",controller:"PlayController",controllerAs:"play"}).when("/results",{templateUrl:"app/views/results.html",controller:"ResultsController",controllerAs:"results"}).otherwise({redirectTo:"/"}),n.interceptors.push("authInterceptor")}function e(t,e,n){return{request:function(t){return t.headers=t.headers||{},t},responseError:function(t){return 404===t.status?(n.path("/"),e.reject(t)):e.reject(t)}}}function n(t,e){}angular.module("concentrationGameApp",["ngRoute"]).config(t),t.$inject=["$routeProvider","$locationProvider","$httpProvider","$compileProvider"],angular.module("concentrationGameApp").factory("authInterceptor",e),e.$inject=["$rootScope","$q","$location"],angular.module("concentrationGameApp").run(n),n.$inject=["$rootScope","$location"]}(),function(){angular.module("concentrationGameApp").constant("CONSTANTS",{TITLE:"Concentration Game App"})}(),function(){function t(){function t(t,e,n){u[e]&&u[e].apply(t,n)}function e(t){for(var e,n,r=t.length;r;e=Math.floor(Math.random()*r),n=t[--r],t[r]=t[e],t[e]=n);return t}function n(t,e){var n=t.filter(function(t){return t.number===e?t:void 0});return n.length>0?n[0]:null}function r(t,e){return("clubs"!==t.suit&&"spades"!==t.suit||"clubs"!==e.suit&&"spades"!==e.suit)&&("diamonds"!==t.suit&&"hearts"!==t.suit||"diamonds"!==e.suit&&"hearts"!==e.suit)?!1:!0}var o=26,a=1,i=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"],s=["clubs","spades","diamonds","hearts"],c=function(t){t>o?t=o:a>t&&(t=a),this.pairsTotal=t,this.matchesGoal=t,this.matchesFound=0,this.cards=[],this.generateCards(t)};c.prototype.generateCards=function(t){for(var n=0;n<2*this.pairsTotal;n++)this.cards.push({number:n,rank:i[parseInt(n/s.length)],suit:s[n%s.length],flipped:!1,matched:!1});e(this.cards)};var u={};c.prototype.on=function(t,e){u[t]=e};var l=!1,p=null;return c.prototype.flipCard=function(t){var e=n(this.cards,t);if(e){if(p&&p===e)return;l||p?l&&p?(e.flipped=!0,e.rank===p.rank&&r(e,p)&&this.registerMatch(e,p),l=!0,p=null):l&&!p&&(this.cards.forEach(function(t){t.matched||(t.flipped=!1)}),e.flipped=!0,l=!0,p=e):(e.flipped=!0,l=!0,p=e)}},c.prototype.registerMatch=function(e,n){e.matched=!0,n.matched=!0,this.matchesFound+=1;var r=this.matchesGoal-this.matchesFound,o=this.matchesFound/this.matchesGoal*100;t(this,"matchFound",[r,o]),0>=r&&t(this,"gameWon")},function(t){return new c(t)}}angular.module("concentrationGameApp").factory("ConcentrationGame",t),t.$inject=[]}();