(function (angular) {
    // "use strict";
    // start your ride
    //1. 创建模块
    window.angular = angular;
    var app = angular.module('moviecat',['moviecat.home_page','moviecat.in_theaters','moviecat.coming_soon','moviecat.top250','moviecat.myjsonp']);
})(angular);