(function(){
    'use strict';

    var ang = angular.module('myApp',['myToggleApp']);

    ang.controller('myCtrl',['$scope',function($scope){
		var vm = this;
        vm.user = {
            notification:true,
        };

        function changeNotify(){
            console.log("notify");
        }
        function changeNot(){
            console.log("but");
            $scope.user.notification = true;
        }
        vm.changeNotify = changeNotify;
        vm.changeNot = changeNot;
    }]); 
})();