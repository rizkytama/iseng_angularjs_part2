modulnya.directive('headerNya', function(){
	return{
		restrict		:'E',
		templateUrl	:'komponen/header.html'
	}
});

modulnya.directive('footernya', function(){
	return{
		restrict		:'A',
		templateUrl	:'komponen/footer.html'
	}
});

//===============ROUTE=====================
modulnya.config(function($routeProvider){
	$routeProvider
	.when('/about',{
		templateUrl :'page/about.html'
	})
	.when('/data',{
		templateUrl	:'page/data.html'
	})
	.when('/home',{
		templateUrl	:'page/home.html'
	})
	.otherwise({redirectTo:'/home'})


});