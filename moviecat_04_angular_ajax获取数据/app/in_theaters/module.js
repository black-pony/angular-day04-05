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
    app.controller('in_theatersController',['$scope','$http',function($scope,$http){
        $http.get('./in_theaters/in_theaters.json')
             .then(function(res){
                 //成功的回调函数
                //  console.log(res);
                $scope.data = res.data;
             },function(){
                 //失败的回调函数
             });
    }]);
})(angular);