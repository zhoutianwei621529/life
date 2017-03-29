(function() {
    angular.module('controller', [])
        .controller('HomeTabCtrl', function ($scope,$interval) {
            $scope.myActiveSlide = 0;
            $interval(function(){
                var index=$scope.myActiveSlide;
                index++;
                if(index>2){
                    index=0;
                }
                $scope.myActiveSlide=index;
            },2000)
        })
        .controller('LifeTabCtrl',function($scope){
            $scope.showPinglun={
                show1:false,
                show2:false
            }

        });
})();
