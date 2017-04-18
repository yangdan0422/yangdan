
function route($routeProvider){
	$routeProvider
        .when('/',{
            templateUrl:'view/updateInfo.html',
            //template:'aaa',
            controller:'aaa'
        }) 
        .when('/jianjie',{
            templateUrl:'view/intro.html',
            controller:'aaa'
        })
        .when('/xinxi',{
            templateUrl:'view/info.html',
            controller:'aaa'
        })
        .when('/caozuo',{
            //templateUrl:'',
        })
        .when('/lanmu',{
            //templateUrl:'',
        })
        .when('/more',{
            //templateUrl:'',
        })
        .otherwise({redirectTo:'/'});
}
