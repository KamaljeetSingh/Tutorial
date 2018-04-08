(function(){
    'use strict';

    var app = angular.module('myToggleApp',[]);

    app.directive('onOffToggle',function(){
        return{
            require: "ngModel",
            scope:{
                value1:'@',
                value2:'@',
            },
            link: onOffLink,
            templateUrl: '../template/on-off-switch.html',
        };
    });

    function onOffLink($scope, elem, attr, ngCtrl) {

        if (!attr.value1)
            attr.value1 = 'Yes';
        if (!attr.value2)
            attr.value2 = 'No';
        $scope.switchValue1 = attr.value1;
        $scope.switchValue2 = attr.value2;

        function changeValueDiv(){
            ngCtrl.$setViewValue(!ngCtrl.$viewValue);
            $scope.moveDiv();
        }

        function moveDiv(){
            if(ngCtrl.$viewValue == false){
                $scope.myStyle = {
                    'transform': 'translateX(-33.4%)',   
                };
            }
            else{
                $scope.myStyle = {
                    'transform': 'translateX(0px)',   
                };
            }       
        }

        ngCtrl.$render = function(){        //so as to get ngModel value correctly after render
            moveDiv();
        }
        $scope.$watch('ngCtrl.$modelValue',function(newValue,oldValue){
            console.log("Watch - "+newValue);
            //ngCtrl.$setViewValue(newValue);
        });

        $scope.moveDiv = moveDiv;
        $scope.changeValueDiv = changeValueDiv;
    }

})();
