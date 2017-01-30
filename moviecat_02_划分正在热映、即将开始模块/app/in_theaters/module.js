(function(angular){
    //创建正在热映模块
    var app = angular.module('moviecat.in_theaters',['ngRoute']);

    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/in_theaters',{
            templateUrl:'in_theaters/view.html',
            controller:'in_theatersController'
        });
    }]);

    //创建控制器
    app.controller('in_theatersController',['$scope',function($scope){
        //
    }]);
})(angular);