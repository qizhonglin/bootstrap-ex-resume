'use strict';

/**
 * @ngdoc overview
 * @name bootstrapExApp
 * @description
 * # bootstrapExApp
 *
 * Main module of the application.
 */
angular
  .module('bootstrapExApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
