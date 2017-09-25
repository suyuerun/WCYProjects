'use strict';

angular.module('wcyApp', ['ngRoute'])
        .component('playPanel', {
            templateUrl: '/js/wcy/share/playPanel.template.html',
            controller: ['$http', '$scope', '$location', '$routeParams', function ($http, $scope, $location, $routeParams) {
                    var gameId = $routeParams['gameId'];
                    var uid = $routeParams['uid'];
                    var AllLike = $routeParams['AllLike'];
                    var AllPlay = $routeParams['AllPlay'];
                    alert('gameId:'+gameId+',uid:'+uid);
                    var likeKey = gameId + ':' + uid;
                    var isLiked = localStorage.getItem(likeKey);
                    $scope.isLiked = isLiked || false;
                    $scope.like = function () {
                        if ($scope.isLiked) {
                            return false;
                        } else {
                            $http.get('/doLike?gameId=' + gameId + '&uid=' + uid).then(function (response) {
                                var resDate = response.data; 
                                if (resDate.code == 200) {
                                    $scope.isLiked = true;
                                    $scope.share.AllLike += 1;
                                    localStorage.setItem(likeKey, true);
                                }
                            });
                        }
                    };
                    $http.get('/getShare?gameId=' + gameId + '&uid=' + uid).then(function (response) {
                        if(response.data.code!=200){
                                    $location.path("/error");
                        }
                        $scope.share = response.data.data;
                    });
                }]
        })
        .component('footAd', {
            templateUrl: '/js/wcy/share/footAd.template.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                    $scope.footAdShow = true;
                    $scope.closeAd = function () {
                        $scope.footAdShow = false;
                    };
                }]
        })
        .component('recommend', {
            templateUrl: '/js/wcy/share/recommend.template.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                    $scope.refresh = function () {
                        $http.get('/getRecommend').then(function (response) {
                            if (response.data.code == 200) {
                                $scope.recommends = response.data.data;
                            }
                        });
                    };
                    $scope.refresh();
                }]
        })
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider
                        .when('/share/:gameId/:uid', {
                            templateUrl: '/js/wcy/share/share.template.html'
                        })
                        .when('/error', {
                            templateUrl: '/js/wcy/share/error.template.html'
                        })
                        .otherwise('/error');
            }]);
/*.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
 $locationProvider.html5Mode({
 enabled: true,
 requireBase: false
 });
 $stateProvider
 .state('recommend', {
 name: 'recommend',
 url: '/recommend',
 templateUrl: 'js/wcy/share/recommend.template.html'
 });
 
 })*/
/*.controller('recommend', function ($scope, $http, $state)
 {
 var self = $scope;
 refresh();
 function refresh() {
 $http.get('getRecommend').then(function (response) {
 self.recommends = response.data.data;
 });
 $state.go('recommend');
 }
 self.refresh = function () {
 refresh()
 };
 });*/