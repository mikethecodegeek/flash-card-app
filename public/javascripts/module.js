/**
 * Created by Admin on 5/2/16.
 */
'use strict';

var app = angular.module('angularApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl',
            resolve: {
                items: function(myService) {
                    return myService.getAll();
                }
            }
        })
        .state('splash', {
            url: '/',
            templateUrl: '/html/splash.html',
            controller: 'splashCtrl'
            
        })
        .state('delete', {
            url: '/delete/:id',
            templateUrl: '/html/home.html',
            controller: 'deleteCtrl'
        })
        .state('state1', {
            url: '/state1/',
            templateUrl: '/html/state1.html',
            controller: 'state1Ctrl'
        })
        .state('state2', {
            url: '/state2/:category',
            templateUrl: '/html/game.html',
            controller: 'state2Ctrl'
        })


    $urlRouterProvider.otherwise('/');

})
