(function(angular){
    //创建正在热映模块
    var app = angular.module('moviecat.in_theaters',['ngRoute']);

    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/in_theaters/:page?',{
            templateUrl:'in_theaters/view.html',
            controller:'in_theatersController'
        });
    }]);

    //创建控制器
    app.controller('in_theatersController',['$scope','$http','$routeParams','MyJsonp',function($scope,$http,$routeParams,MyJsonp){
        console.log($routeParams);
        // $http.get('./in_theaters/in_theaters.json')
        //      .then(function(res){
        //          //成功的回调函数
        //          console.log(res);
        //      },function(){
        //          //失败的回调函数
        //      });
        $scope.pageSize = 5;//每页请求的数据 修改这个，可以设置每页的数据条数
        $scope.nowPage = ($routeParams.page || '1') - 0;
        var start = ($scope.nowPage - 1) * $scope.pageSize;
        MyJsonp.jsonp('http://api.douban.com/v2/movie/in_theaters',{start:start,count:$scope.pageSize},function(data){
            $scope.data = data;
            $scope.$apply();
        });
    }]);
})(angular);