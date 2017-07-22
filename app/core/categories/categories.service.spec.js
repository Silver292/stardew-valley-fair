'use strict';

describe('Categories', function() {
    var $httpBackend;
    var Categories;
    var categoryData = [
        {"category": "Category X"},
        {"category": "Category Y"},
        {"category": "Category Z"}
    ];

    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(module('core.categories'));

    beforeEach(inject(function(_$httpBackend_, _Categories_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('categories/categories.json').respond(categoryData);

        Categories = _Categories_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the category data from `/categories/categories.json`', function() {
        var categories = Categories.getAll();

        $httpBackend.flush();
        expect(categories).toEqual(categoryData);
    });

});