
angular.module('myapp', ['ngRoute','ngAnimate'])
	.config(route)                               //路由配置
    .controller('mainctrl',mainctrl)             //控制器
    .controller('aaa',aaa)                       //调试，可删除
    .animation('.fadeComment',fadeComment)		 //动画，评论添加淡入效果
    .directive('showBanner',showBanner)          //导航条实现手风琴效果
    .directive('addComment',addComment);	     //导航栏实现下拉效果
    
    