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
    app.controller('in_theatersController',['$scope','$http','MyJsonp',function($scope,$http,MyJsonp){
        // $http.get('./in_theaters/in_theaters.json')
        //      .then(function(res){
        //          //成功的回调函数
        //          console.log(res);
        //      },function(){
        //          //失败的回调函数
        //      });
        MyJsonp.jsonp('http://api.douban.com/v2/movie/in_theaters',{start:0,count:10},function(data){
            $scope.data = data;
            $scope.$apply();//强制刷新整个viewmodel
        });
    }]);
})(angular);