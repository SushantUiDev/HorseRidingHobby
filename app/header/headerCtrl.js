(function(){
	function headerCtrlFn(){
		var vm=this;
		vm.brandName="HorseRide";
		vm.loginTemplate="app/login/login.tpl.html";
		vm.navBar=["Home","login","RidingScholl","Trail Riding","Others"];
		vm.loadView=function(param){
			console.log(param);
			if(param=="login"){
				vm.loadTemplate=vm.loginTemplate;
			}
		}
	}
	angular.module("header")
	.controller("headerCtrl",[headerCtrlFn]);
})();