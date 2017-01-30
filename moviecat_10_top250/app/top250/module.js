(function(angular){
    //创建正在热映模块
    var app = angular.module('moviecat.top250',['ngRoute']);

    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/top250/:page?',{
            templateUrl:'top250/view.html',
            controller:'top250Controller'
        });
    }]);

    //创建控制器
    app.controller('top250Controller',['$scope','$http','$routeParams','$route','MyJsonp',function($scope,$http,$routeParams,$route,MyJsonp){
        console.log($routeParams);
        // $http.get('./top250/top250.json')
        //      .then(function(res){
        //          //成功的回调函数
        //          console.log(res);
        //      },function(){
        //          //失败的回调函数
        //      });
        $scope.pageSize = 5;//每页请求的数据
        $scope.nowPage = ($routeParams.page || '1') - 0;
        var start = ($scope.nowPage - 1) * $scope.pageSize;
        MyJsonp.jsonp('http://api.douban.com/v2/movie/top250',{start:start,count:10},function(data){
            $scope.data = data;
            $scope.total = data.total;
            $scope.totalPage = Math.ceil(data.total / $scope.pageSize);
            $scope.$apply();
        });

        $scope.goPage = function(nowPage){
            //防止用户恶意点击
            if(nowPage < 1 || nowPage>$scope.totalPage){
                return;
            }
            $route.updateParams({page:nowPage});
        };
    }]);
})(angular);