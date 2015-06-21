'use strict';

/**
 * @ngdoc mediadataappApp
 * @name mediadataappApp
 * @description
 * # mediadataappApp
 * Main module of the application.
 */
  
    angular
    .module('mediadataappApp', [
          'ngAnimate',
          'ngCookies',
          'ngResource',
          'ngRoute',
          'ngSanitize',
          'ngTouch',
          'page-directives'
        ])
        .config(function ($routeProvider) {
          $routeProvider
            .when('/', {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });
        })


