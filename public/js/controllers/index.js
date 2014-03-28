'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'Charts', function ($scope, Global) {
    $scope.global = Global;

    $scope.showCharts = function(){
    	alert('Keep it comming!');
    };

    $scope.create = function() {
        var chart = new Charts({
            content: this.content
        });
        chart.$save(function(response) {
            $location.path('charts/' + response._id);
        });

        this.content = '';
    };

}]);