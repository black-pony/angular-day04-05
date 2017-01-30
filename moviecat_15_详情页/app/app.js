(function (angular) {
    // "use strict";
    // start your ride
    //1. 创建模块
    window.angular = angular;
    var app = angular.module('moviecat',[
        'moviecat.details',// 先引入就会优先匹配相应的路由规则
        'moviecat.home_page',
        'moviecat.movie_list',
        'moviecat.myjsonp',
        'moviecat.auto_active']);

    app.controller('mainController',function($scope,$location){
        $scope.query = '';
        $scope.search = function(){
            $location.url('/search/?q=' + $scope.query);
        };
    });
})(angular);