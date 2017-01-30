(function(angular){
    //创建正在热映模块
    var app = angular.module('moviecat.movie_list',['ngRoute']);

    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        // /a/b
        // /details/322332 {movieType:'details',page:322332}
        $routeProvider.when('/:movieType/:page?',{
            templateUrl:'movie_list/view.html',
            controller:'movie_listController'
        });
    }]);

    //创建控制器
    app.controller('movie_listController',['$scope','$http','$routeParams','$route','MyJsonp',function($scope,$http,$routeParams,$route,MyJsonp){
        console.log($routeParams);
        // $http.get('./movie_list/movie_list.json')
        //      .then(function(res){
        //          //成功的回调函数
        //          console.log(res);
        //      },function(){
        //          //失败的回调函数
        //      });
        $scope.loading = true;//控制加载动画的显示与否
        $scope.pageSize = 5;//每页请求的数据
        $scope.nowPage = ($routeParams.page || '1') - 0;
        var start = ($scope.nowPage - 1) * $scope.pageSize;
        MyJsonp.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType + '?q=' + $routeParams.q,{start:start,count:10},function(data){
            $scope.data = data;
            $scope.total = data.total;
            $scope.totalPage = Math.ceil(data.total / $scope.pageSize);
            $scope.loading = false;
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