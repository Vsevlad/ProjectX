'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$stateParams', '$location', 'Charts', function ($scope, Global, $stateParams, $location, Charts) {
    $scope.global = Global;
    Charts.query(function(charts) {
        $scope.charts = charts;
    });

    $scope.create = function() {
        var chart = new Charts({
            content: this.content
        });
        chart.$save(function(response) {
            $location.path('charts/' + response._id);
        });

        this.content = '';

        Charts.query(function(charts) {
            $scope.charts = charts;
        });
    };

}]);