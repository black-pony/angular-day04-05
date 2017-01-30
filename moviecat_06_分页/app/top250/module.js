(function(angular){
    //创建正在热映模块
    var app = angular.module('moviecat.top250',['ngRoute']);

    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/top250',{
            templateUrl:'top250/view.html',
            controller:'top250Controller'
        });
    }]);

    //创建控制器
    app.controller('top250Controller',['$scope',function($scope){
        //
    }]);
})(angular);