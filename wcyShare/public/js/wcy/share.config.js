'use strict';

angular.module('shareApp', [])
        .controller('sharePanel', function ($scope) {

        })
        // 分享详情
        .controller('shareInfo', function ($http, $rootScope, $scope) {
            var gameId = $rootScope.gameId;
            var uid = $rootScope.uid;
            var likeKey = gameId + ':' + uid ;
            var isLiked = localStorage.getItem(likeKey);
            $scope.isLiked =  false||isLiked;

            $scope.AllLike = parseInt($scope.AllLike);

            // alert(  $scope.AllLike);
            $scope.dislike = function () {
                if (!$scope.isLiked) {
                    return true;
                } else {
                    var AllLike = $scope.AllLike;
                    $http.get('/unDoLike?gameId=' + gameId + '&AllLike=' +AllLike).then(function (response) {
                        var resDate = response.data;
                        if (resDate.code == 200) {
                            $scope.isLiked = false;
                            $scope.AllLike -= 1;
                            if($scope.AllLike<0){
                                $scope.AllLike = 0;
                            }
                            localStorage.setItem(likeKey, false);
                        }
                    });
                }
            };

            $scope.like = function () {
                if ($scope.isLiked) {
                    return false;
                } else {
                    $http.get('/doLike?gameId=' + gameId + '&uid=' +uid).then(function (response) {
                        var resDate = response.data;
                        if (resDate.code == 200) {
                            $scope.isLiked = true;
                            $scope.AllLike += 1;
                            localStorage.setItem(likeKey, true);
                        }
                    });
                }
            };
        })
        // 推荐
        .controller('recommend', function ($http, $scope) {
            $scope.recommends = new Array();
            var lock = false;
            $scope.refresh = function () {
                if (lock === true)
                    return false;
                lock = true;
                $http.get('/getRecommend').then(function (response) {
                    if (response.data.code == 200) {

                            for(let key in response.data.data[0]){
                                console.log(key+':'+response.data.data[0][key]);
                            }

                        $scope.recommends = response.data.data;
                        lock = false;
                    }
                });
            };
            $scope.refresh();
        })
        // 底部广告
        .controller('footAD', function ($scope) {
            $scope.footAdShow = true;
            $scope.closeAd = function () {
                $scope.footAdShow = false;
            };
        });


