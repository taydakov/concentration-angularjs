/**
 * 
 * Concentration Game in AngularJS
 * @description           Classical cards matching game written in AngularJS
 * @author                Lev Taydakov
 * @url                   taydakov.com
 * @version               0.0.1
 * @date                  September 2015
 * @license               MIT
 * 
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('concentrationGameApp', [
      'ngRoute'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/setup.html',
        controller: 'SetupController',
        controllerAs: 'setup'
      })
      .when('/play/:pairsNum', {
        templateUrl: 'app/views/play.html',
        controller: 'PlayController',
        controllerAs: 'play'
      })
      .when('/results', {
        templateUrl: 'app/views/results.html',
        controller: 'ResultsController',
        controllerAs: 'results'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   * 
   */
  angular
    .module('concentrationGameApp')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$location'];

  function authInterceptor($rootScope, $q, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('concentrationGameApp')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();