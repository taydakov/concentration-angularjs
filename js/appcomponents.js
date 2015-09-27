!function(){function e(e,o,t,r){o.html5Mode(!1),e.when("/",{templateUrl:"app/views/setup.html",controller:"SetupController",controllerAs:"setup"}).when("/play/:pairsNum",{templateUrl:"app/views/play.html",controller:"PlayController",controllerAs:"play"}).when("/results",{templateUrl:"app/views/results.html",controller:"ResultsController",controllerAs:"results"}).otherwise({redirectTo:"/"}),t.interceptors.push("authInterceptor")}function o(e,o,t,r){return{request:function(e){return e.headers=e.headers||{},e},responseError:function(e){return 404===e.status?(r.path("/"),o.reject(e)):o.reject(e)}}}function t(e,o){}angular.module("concentrationGame",["ngRoute"]).config(e),e.$inject=["$routeProvider","$locationProvider","$httpProvider","$compileProvider"],angular.module("concentrationGame").factory("authInterceptor",o),o.$inject=["$rootScope","$q","LocalStorage","$location"],angular.module("concentrationGame").run(t),t.$inject=["$rootScope","$location"]}(),function(){angular.module("concentrationGame").constant("CONSTANTS",{})}(),function(){"use strict";function e(e,o){function t(o,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(o)?e.localStorage&&e.localStorage.setItem(o,angular.toJson(t)):void console.warn("localStorage with the name "+o+" already exists. Please pick another name.")}function r(o){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&angular.fromJson(e.localStorage.getItem(o))}function n(o,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.setItem(o,angular.toJson(t))}function a(o){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.removeItem(o)}function l(){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.clear()}function c(){return e.localStorage}var u="undefined"==typeof window.localStorage?void 0:window.localStorage,i=!(void 0===typeof u||void 0===typeof window.JSON);return angular.element(e).on("storage",function(e,t){e.key===t&&o.$apply()}),{set:t,get:r,update:n,remove:a,removeAll:l,list:c}}angular.module("concentrationGame").factory("LocalStorage",["$window","$rootScope",e])}(),function(){"use strict";function e(e,o,t){function r(r,n,a,l){var c=o.defer();return e({method:r,url:t.API_URL+n,params:a,data:l}).then(function(e){e.config||console.log("Server error occured."),c.resolve(e)},function(e){c.reject(e)}),c.promise}var n={query:r};return n}angular.module("concentrationGame").factory("QueryService",["$http","$q","CONSTANTS",e])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/responsive-nav.html",link:function(e,o,t,r){o.on("click",function(e){$(".responsive-wrapper").slideToggle(150,"swing"),e.preventDefault()})}};return e}angular.module("concentrationGame").directive("responsiveNav",e)}();