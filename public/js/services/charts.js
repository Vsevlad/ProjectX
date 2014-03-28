'use strict';

//Charts service used for charts REST endpoint
angular.module('mean.charts').factory('Charts', ['$resource', function($resource) {
    return $resource('charts/:chartId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);