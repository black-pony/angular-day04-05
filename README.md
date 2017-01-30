- 凡是带link,src就可以用来跨域


假数据(放到一个数组里面) --> 放到一个json文件里面,通过angular的$http.get方法获取数据 -->在then方法里面接收数据 --> 渲染页面(ng-repeat) --> jsonp --> angular的jsonp怎么玩($http.jsonp方法) --> 自己封装一个jsonp方法，并且做为一个服务(复用代码和数据) --> 分页($routeParams),默认没传1 --> ng-click="" 在当前的基础上加1，减1 --> 防止出错（超出范围，不能小第1页，不能大于最大页)  



jsonp = 构建一个script标签 + 创建一个全局回调函数(函数的名字必须要唯一，不能与别的函数冲突) + 去后台发送请求，接收数据 --> 数据是以实参的形式

1. API是供别人用的，函数不能写死
2. 函数名必须要由使用者提供(script标签是get方式，只能通过url后面的参数来提供函数，默认是callback)



angular当前这个页面如何渲染出来：(ngRoute)
通过hash锚点值 --> 路由(进入config里面的$routeProvider判断一下当前这个hash对应的) --> 控制器 --> 视图 --> 合成我们真的可以看到的东西




我们的ng-repeat的最后一项的$last值是true
<span ng-show="$last==false" ng-repeat="item in ar">、</span>
{{$last?'':'、'}}
{{arr.join('、')}}


var arr = [1,32,4];
arr.join('、');

概念
API
工具
实例
typescript 
ES6

