'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'Charts', function ($scope, Global, Charts) {
    $scope.global = Global;

    $scope.create = function() {
        var chart = new Charts({
            content: this.content
        });
        chart.$save(function(response) {
            $location.path('charts/' + response._id);
        });

        this.content = '';

        $scope.find();
    };

    $scope.find = function() {
        Charts.query(function(charts) {
            $scope.charts = charts;
        });
    };

}]);