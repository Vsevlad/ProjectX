'use strict';

angular.module('mean.charts').controller('ChartsController', ['$scope', '$stateParams', '$location', 'Global', 'Articles', function ($scope, $stateParams, $location, Global, Articles) {
	$scope.global = Global;

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