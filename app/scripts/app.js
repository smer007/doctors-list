'use strict';

/**
 * @ngdoc overview
 * @name doctorsListApp
 * @description
 * # doctorsListApp
 *
 * Main module of the application.
 */
angular
  .module('doctorsListApp', [
    'ngAria',
    'ngRoute'
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
