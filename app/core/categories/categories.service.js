'use strict';

angular.
    module('core.categories').
    factory('Categories', ['$resource', function($resource){
        return $resource('categories/:category.json', {}, {
            getAll: {
                method: 'GET',
                params: {category: 'categories'},
                isArray: true
            }
        });
    }]);